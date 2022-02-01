/* =======================================================
 *
 * Created by anele on 2022/01/31.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { initializeApp } from "firebase/app";
import { serverTimestamp } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG3qptuHm-2s66JjsT4YZ_Wenn2Kt9wik",
  authDomain: "firegram-b396f.firebaseapp.com",
  projectId: "firegram-b396f",
  storageBucket: "firegram-b396f.appspot.com",
  messagingSenderId: "108510069525",
  appId: "1:108510069525:web:9878efb611078189751f1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const projStorage = getStorage(app);
//const storageRef = ref(projStorage);
const timeStamp = serverTimestamp();
//const projFirestore = getFirestore(app);

export {
	app,
	timeStamp
	//projFirestore,
	//projStorage,
	//storageRef,
}