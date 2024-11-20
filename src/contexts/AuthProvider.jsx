/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider).catch((err) => {
      setError(err.message);
    });
  };

  const createNewUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).catch((err) => {
      setError(err.message);
    });
  };

  const logOut = () => {
    return signOut(auth).catch((err) => {
      setError(err.message);
    });
  };

  const updateUserProfile = (displayName, photoURL) => {
    if (user) {
      return updateProfile(user, { displayName, photoURL }).catch((err) => {
        setError(err.message);
      });
    }
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email).catch((err) => {
      setError(err.message);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    updateUserProfile,
    resetPassword,
    signInWithGoogle,
    error,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
