import { TbWriting } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { updateProfile } from "firebase/auth";

const RegisterForm = () => {
  const { createNewUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null); // For handling errors
  const navigate = useNavigate(); // Hook for navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const displayName = form.get("displayName");
    const email = form.get("email");
    const photoURL = form.get("photoURL") || ""; // Default empty if not provided
    const password = form.get("password");

    // Reset errors
    setError(null);

    // Register user
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update user profile in Firebase
        return updateProfile(user, {
          displayName,
          photoURL,
        }).then(() => {
          // Update local context with the updated user
          const updatedUser = { ...user, displayName, photoURL };
          setUser(updatedUser);
          // Navigate to home or desired page
          navigate("/");
        });
      })
      .catch((err) => {
        // Handle errors during registration
        setError(err.message);
        console.error("Error during registration:", err);
      });
  };

  return (
    <div>
      <div className="card min-w-[380px] md:w-[600px] shadow-2xl rounded-3xl border border-gray-900 bg-[#03071265] backdrop-blur-xl flex flex-col items-center justify-center pt-8">
        <div className="text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent">
          Register Here
        </div>
        {/* Google Register Button */}
        <div className="mt-10">
          <NavLink
            to="/"
            type="button"
            className="flex justify-center items-center gap-2 text-white hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm min-w-10 min-h-10 px-6 text-center"
          >
            <FcGoogle className="text-xl" />
            <span>Register with Google</span>
          </NavLink>
        </div>
        {/* Divider */}
        <div className="flex w-full flex-col border-opacity-50 px-9 mt-4 -mb-4">
          <div className="divider">OR</div>
        </div>
        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="card-body w-full space-y-2">
          <div className="form-control">
            <input
              type="text"
              name="displayName"
              placeholder="Enter your name"
              className="input input-bordered border-gray-900 bg-gray-950 h-11 text-xs font-semibold focus:outline-none rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered border-gray-900 bg-gray-950 h-11 text-xs font-semibold focus:outline-none rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL (optional)"
              className="input input-bordered border-gray-900 bg-gray-950 h-11 text-xs font-semibold focus:outline-none rounded-full"
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered border-gray-900 bg-gray-950 h-11 text-xs font-semibold focus:outline-none rounded-full"
              required
            />
          </div>
          {/* Error Display */}
          {error && (
            <div className="text-sm text-red-500 text-center mt-2">{error}</div>
          )}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="flex justify-center items-center gap-2 text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm min-w-10 min-h-10 md:px-6 text-center"
            >
              <TbWriting className="text-xl -ml-1" />
              <span>Register</span>
            </button>
          </div>
          <div className="text-sm text-center">
            <p>
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="font-semibold text-red-700 hover:text-red-600"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
