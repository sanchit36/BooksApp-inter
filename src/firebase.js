import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjwVQVQF3JCV_d9Rm32MuWb3mMa5BfFjM",
  authDomain: "auth-b7600.firebaseapp.com",
  projectId: "auth-b7600",
  storageBucket: "auth-b7600.appspot.com",
  messagingSenderId: "835420310894",
  appId: "1:835420310894:web:60018613ff07431d50457f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const registerUser = async (email, password) => {
  let user = null;
  let error = null;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    user = userCredential.user;
  } catch (err) {
    error = err.message;
  }
  return [user, error];
};

export const loginUser = async (email, password) => {
  let user = null;
  let error = null;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    user = userCredential.user;
  } catch (err) {
    error = err.message;
  }

  return [user, error];
};

export const logoutUser = async (cb) => {
  let error = null;
  try {
    await signOut(auth);
    cb();
  } catch (err) {
    error = err.message;
  }
  return [null, error];
};

export default app;
