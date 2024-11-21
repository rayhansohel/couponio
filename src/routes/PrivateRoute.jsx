/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // Show a loading spinner or placeholder while determining auth state
    return <div className="text-center">Loading...</div>;
  }

  // If user is authenticated, allow them to view the children (protected content)
  if (user) {
    return children;
  }

  // If user is not authenticated, redirect to login with the current location
  return (
    <Navigate
      to="/auth/login"
      state={{ from: location }} // Store the current location for redirection after login
      replace
    />
  );
};

export default PrivateRoute;
