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

// Custom Hook for Using Auth Context
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // Handle Errors
  const handleError = (err) => {
    setError(err.message);
    console.error("Auth Error:", err.message);
  };

  // Sign In with Google
  const signInWithGoogle = async () => {
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);

      // Get the ID token and store it in localStorage
      const idToken = await result.user.getIdToken();
      localStorage.setItem("authToken", idToken);  // Save the token in localStorage

      return result.user;
    } catch (err) {
      handleError(err);
    }
  };

  // Register New User
  const createNewUser = async (email, password) => {
    setError(null);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setUser(result.user);

      // Get the ID token and store it in localStorage
      const idToken = await result.user.getIdToken();
      localStorage.setItem("authToken", idToken);  // Save the token in localStorage

      return result.user;
    } catch (err) {
      handleError(err);
      throw err;
    }
  };

  // Log In User
  const userLogin = async (email, password) => {
    setError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);

      // Get the ID token and store it in localStorage
      const idToken = await result.user.getIdToken();
      localStorage.setItem("authToken", idToken);  // Save the token in localStorage

      return result.user;
    } catch (err) {
      handleError(err);
    }
  };

  // Log Out
  const logOut = async () => {
    setError(null);
    try {
      await signOut(auth);
      setUser(null);

      // Clear the auth token from localStorage
      localStorage.removeItem("authToken");
    } catch (err) {
      handleError(err);
    }
  };

  // Update User Profile
  const updateUserProfile = async (displayName, photoURL) => {
    setError(null);
    if (user) {
      try {
        await updateProfile(auth.currentUser, { displayName, photoURL });
        setUser({ ...auth.currentUser, displayName, photoURL });
      } catch (err) {
        handleError(err);
      }
    }
  };

  // Reset Password
  const resetPassword = async (email) => {
    setError(null);
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      handleError(err);
    }
  };

  // Monitor Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // If there's a user, store the token in localStorage
      if (currentUser) {
        currentUser.getIdToken().then((idToken) => {
          localStorage.setItem("authToken", idToken);
        });
      } else {
        localStorage.removeItem("authToken");
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    logOut,
    updateUserProfile,
    resetPassword,
    signInWithGoogle,
    error,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
