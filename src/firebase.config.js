import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBu00awMNupO-oviUMJQUAAcErRSvS2ME0",
    authDomain: "foodiez-3b552.firebaseapp.com",
    databaseURL: "https://foodiez-3b552-default-rtdb.firebaseio.com",
    projectId: "foodiez-3b552",
    storageBucket: "foodiez-3b552.appspot.com",
    messagingSenderId: "213060089221",
    appId: "1:213060089221:web:34662c63f999d9309d00ec"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage =getStorage(app)

  export {app, firestore, storage};