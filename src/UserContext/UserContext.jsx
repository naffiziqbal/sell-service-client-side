import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase.init";

export const AuthContext = createContext();
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState([]);
  console.log(user);
  

  //Create User Using Email and Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Log Out User
  const logOut = () => {
    return signOut(auth);
  };

  // Log In Using Google
  const googleLogin = () => {
    return signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const authinfo = { user, createUser, logIn, logOut, googleLogin };
  return (
      <AuthContext.Provider value={authinfo}>
        {children}
      </AuthContext.Provider>
  );
};

export default UserContext;
