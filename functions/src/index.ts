import * as admin from 'firebase-admin';
import { onRequest } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp();
}

// Initialize Firestore with emulator support
const db = admin.firestore();

// Check if we're running in the emulator
if (process.env.FUNCTIONS_EMULATOR === 'true') {
  // Set Firestore to use emulator
  db.settings({
    host: 'localhost:8080',
    ssl: false
  });
}

// Save emails to the "waitlist" collection while rate limiting by IP.
export const waitlist = onRequest({ cors: true }, async (request, response) => {
  // Only allow POST requests
  if (request.method !== 'POST') {
    response.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email } = request.body ?? {};

  // Validate email
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    response.status(400).json({ error: 'Valid email is required' });
    return;
  }

  // Determine client IP address
  const ipHeader =
    (request.headers['x-forwarded-for'] as string | undefined) ||
    request.ip ||
    'unknown';
  const clientIp = ipHeader.split(',')[0].trim();

  const ipDocRef = db
    .collection('waitlist_ip_limits')
    .doc(clientIp.replace(/[./#:]/g, '_'));
  const now = admin.firestore.Timestamp.now();
  const sixHoursAgo = admin.firestore.Timestamp.fromMillis(
    now.toMillis() - 6 * 60 * 60 * 1000,
  );

  try {
    await db.runTransaction(async (tx) => {
      const ipDoc = await tx.get(ipDocRef);
      let count = 0;
      let firstTime = now;
      if (ipDoc.exists) {
        const data = ipDoc.data() as { count: number; firstRequestTime: admin.firestore.Timestamp };
        firstTime = data.firstRequestTime;
        if (firstTime.toMillis() < sixHoursAgo.toMillis()) {
          count = 0;
          firstTime = now;
        } else {
          count = data.count;
        }
      }

      if (count >= 2) {
        throw new Error('Too many requests');
      }

      tx.set(ipDocRef, { count: count + 1, firstRequestTime: firstTime });
    });
  } catch {
    logger.warn(`Rate limit exceeded for IP ${clientIp}`);
    response.status(429).json({ error: 'Too many requests from this IP. Try again later.' });
    return;
  }

  try {
    // Add email to waitlist collection
    const docRef = await db.collection('waitlist').add({
      email,
      ip: clientIp,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    logger.info(`Email added to waitlist: ${email}`, { structuredData: true });

    response.status(200).json({
      success: true,
      message: 'Email added to waitlist successfully',
      id: docRef.id,
    });
  } catch (error) {
    logger.error('Error adding email to waitlist:', error);
    response.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});
