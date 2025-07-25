// Base URL for the waitlist API. When deployed to Firebase Hosting the
// `/api` path is rewritten to the Cloud Function.
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export interface WaitlistResponse {
  success: boolean;
  message: string;
  error?: string;
}

export const addEmailToWaitlist = async (email: string): Promise<WaitlistResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    throw new Error(`Failed to join waitlist: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}; 