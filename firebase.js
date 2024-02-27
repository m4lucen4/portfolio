import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: 'portfolio-8f229',
  storageBucket: 'portfolio-8f229.appspot.com',
  messagingSenderId: '782035051194',
  appId: '1:782035051194:web:b3131272f19b718bc39883',
  measurementId: 'G-B5ZDL75Q64',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
