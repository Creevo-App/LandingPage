import { db } from '../firebase/config';
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';

export interface WaitlistResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Client-side rate limiting using localStorage
const RATE_LIMIT_KEY = 'waitlist_last_submission';
const RATE_LIMIT_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

function isRateLimited(): boolean {
  const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY);
  if (!lastSubmission) {
    return false;
  }

  const lastSubmissionTime = parseInt(lastSubmission, 10);
  const now = Date.now();

  return (now - lastSubmissionTime) < RATE_LIMIT_DURATION;
}

function recordSubmission(): void {
  localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
}

function getRemainingWaitTime(): number {
  const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY);
  if (!lastSubmission) {
    return 0;
  }

  const lastSubmissionTime = parseInt(lastSubmission, 10);
  const now = Date.now();
  const elapsed = now - lastSubmissionTime;

  return Math.max(0, Math.ceil((RATE_LIMIT_DURATION - elapsed) / 1000 / 60)); // minutes
}

export const addEmailToWaitlist = async (email: string): Promise<WaitlistResponse> => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address',
        error: 'Invalid email format'
      };
    }

    // Check client-side rate limiting
    if (isRateLimited()) {
      const remainingMinutes = getRemainingWaitTime();
      return {
        success: false,
        message: `Please wait ${remainingMinutes} more minutes before submitting another email`,
        error: 'Rate limited'
      };
    }

    // Reference to the waitlist collection
    const waitlistCollection = collection(db, 'waitlist_emails');

    // Check if email already exists
    const emailQuery = query(waitlistCollection, where('email', '==', email));
    const existingEmails = await getDocs(emailQuery);

    if (!existingEmails.empty) {
      return {
        success: false,
        message: 'This email is already registered on our waitlist',
        error: 'Email already exists'
      };
    }

    // Add email to Firestore
    await addDoc(waitlistCollection, {
      email: email,
      timestamp: serverTimestamp(),
      createdAt: serverTimestamp(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct'
    });

    // Record submission for rate limiting
    recordSubmission();

    return {
      success: true,
      message: 'Successfully joined the waitlist! We\'ll be in touch within 24 hours.'
    };

  } catch (error) {
    console.error('Error adding email to waitlist:', error);

    // Handle specific Firebase errors
    if (error instanceof Error) {
      if (error.message.includes('permission-denied')) {
        return {
          success: false,
          message: 'Unable to submit email. Please try again later.',
          error: 'Permission denied'
        };
      }

      if (error.message.includes('network')) {
        return {
          success: false,
          message: 'Network error. Please check your connection and try again.',
          error: 'Network error'
        };
      }
    }

    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}; 