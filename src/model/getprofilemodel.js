const admin = require('firebase-admin');
const serviceAccount = require('../path/to/your/serviceAccountKey.json');

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const fetchProfileByEmail = async (email) => {
  try {
    const userSnapshot = await db.collection('Users').where('email', '==', email).get();
    if (userSnapshot.empty) {
      throw new Error('No user found with the provided email');
    }
    
    const userDoc = userSnapshot.docs[0];
    const userData = userDoc.data();

    const riwayatSnapshot = await userDoc.ref.collection('riwayat').get();
    const riwayat = riwayatSnapshot.docs.map(doc => doc.data());

    return {
      ...userData,
      riwayat
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  fetchProfileByEmail,
};
