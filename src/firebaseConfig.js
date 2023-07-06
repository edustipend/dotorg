import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAz8A0kaP_R28q_2z1k9joBoUy9rg6seWk',
  authDomain: 'edustipenddotorg.firebaseapp.com',
  projectId: 'edustipenddotorg',
  storageBucket: 'edustipenddotorg.appspot.com',
  messagingSenderId: '456593826633',
  appId: '1:456593826633:web:ea71527c3d1cf7382ff098',
  measurementId: 'G-JWRMDDZXMW'
};

let app;

export const initFirebaseApp = () => {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return app;
};

export default initFirebaseApp;
