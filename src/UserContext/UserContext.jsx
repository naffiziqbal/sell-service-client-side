import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.init";

export const AuthContext = createContext();
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  //Create User Using Email and Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Log Out User
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Log In Using Google
  const googleLogin = () => {
    setLoading(true);

    return signInWithRedirect(auth, provider);
  };
  const updateUser = (profile) => {

    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    setLoading(false)

    });
    return () => unsubscribe();
  }, []);
  const authinfo = { user, createUser, logIn, logOut, googleLogin, updateUser,loading, setLoading };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
