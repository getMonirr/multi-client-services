import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import { Auth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import {
  ApiKey,
  AppId,
  AuthDomain,
  MessagingSenderId,
  ProjectId,
  StorageBucket,
} from "../env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
<<<<<<< HEAD
// console.log(process.env);
const firebaseConfig = {
=======
console.log(process.env);
const config = {
>>>>>>> ebbeec118cd22384f0bea691f55575cb87c434af
  apiKey: ApiKey,
  authDomain: AuthDomain,
  projectId: ProjectId,
  storageBucket: StorageBucket,
  messagingSenderId: MessagingSenderId,
  appId: AppId,
};

// Initialize Firebase
// loadEnvConfig(app)
const app = initializeApp(config);

export default app


