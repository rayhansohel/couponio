/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null); // For error handling

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        setError(err.message); // Set error if registration fails
        console.error("Error creating user:", err);
      });
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        setError(err.message); // Set error if login fails
        console.error("Error logging in:", err);
      });
  };

  const logOut = () => {
    return signOut(auth).catch((err) => {
      setError(err.message); // Set error if sign-out fails
      console.error("Error signing out:", err);
    });
  };

  const updateUserProfile = (displayName, photoURL) => {
    if (user) {
      return updateProfile(user, {
        displayName,
        photoURL,
      }).catch((err) => {
        setError(err.message); // Set error if profile update fails
        console.error("Error updating profile:", err);
      });
    }
  };

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    updateUserProfile, // Add updateProfile to the context
    error, // Add error to context so components can access it
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

