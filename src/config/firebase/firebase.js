import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from './config';

firebase.initializeApp(config);
firebase.firestore();

export default firebase;