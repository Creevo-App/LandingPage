// /**
//  * Import function triggers from their respective submodules:
//  *
//  * import {onCall} from "firebase-functions/v2/https";
//  * import {onDocumentWritten} from "firebase-functions/v2/firestore";
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// import * as admin from "firebase-admin";
// import {setGlobalOptions} from "firebase-functions";
// import {onRequest} from "firebase-functions/https";
// import * as logger from "firebase-functions/logger";

// // Initialize Firebase Admin SDK
// if (!admin.apps.length) {
//   admin.initializeApp();
// }

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript

// // For cost control, you can set the maximum number of containers that can be
// // running at the same time. This helps mitigate the impact of unexpected
// // traffic spikes by instead downgrading performance. This limit is a
// // per-function limit. You can override the limit for each function using the
// // `maxInstances` option in the function's options, e.g.
// // `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// // NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// // functions should each use functions.runWith({ maxInstances: 10 }) instead.
// // In the v1 API, each function can only serve one request per container, so
// // this will be the maximum concurrent request count.
// setGlobalOptions({ maxInstances: 10 });

// // export const helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

// export const waitlist = onRequest(async (request, response) => {
//   // Set CORS headers
//   response.set('Access-Control-Allow-Origin', '*');
//   response.set('Access-Control-Allow-Methods', 'GET, POST');
//   response.set('Access-Control-Allow-Headers', 'Content-Type');

//   // Handle preflight requests
//   if (request.method === 'OPTIONS') {
//     response.status(204).send('');
//     return;
//   }

//   // Only allow POST requests
//   if (request.method !== 'POST') {
//     response.status(405).json({ error: 'Method not allowed' });
//     return;
//   }

//   try {
//     const { email } = request.body;

//     // Validate email
//     if (!email || typeof email !== 'string' || !email.includes('@')) {
//       response.status(400).json({ error: 'Valid email is required' });
//       return;
//     }

//     if (!admin.apps.length) {
//       admin.initializeApp();
//     }
//     const db = admin.firestore();

//     // Add email to waitlist collection
//     const docRef = await db.collection('waitlist').add({
//       email: email,
//       timestamp: admin.firestore.FieldValue.serverTimestamp()
//     });

//     logger.info(`Email added to waitlist: ${email}`, { structuredData: true });
    
//     response.status(200).json({ 
//       success: true, 
//       message: 'Email added to waitlist successfully',
//       id: docRef.id 
//     });

//   } catch (error) {
//     logger.error('Error adding email to waitlist:', error);
//     response.status(500).json({ 
//       success: false, 
//       error: 'Internal server error' 
//     });
//   }
// });
