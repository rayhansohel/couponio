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

  // Redirect to login if user is not authenticated
  return user ? children : <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
