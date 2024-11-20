import { TbWriting } from "react-icons/tb";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc"; 

const RegisterForm = () => {
  const { createNewUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validatePassword = (password) => {
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const minLength = password.length >= 6;
    
    if (!uppercase.test(password)) {
      return "Password at least one uppercase letter!";
    }
    if (!lowercase.test(password)) {
      return "Password at least one lowercase letter!";
    }
    if (!minLength) {
      return "Password at least 6 characters long!";
    }
    return "";
  };


  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address!";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const displayName = form.get("displayName");
    const email = form.get("email");
    const photoURL = form.get("photoURL") || "";
    const password = form.get("password");


    const emailValidationError = validateEmail(email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
      return; 
    }
    
    setEmailError(""); 

    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }
    
    setPasswordError("");
    toast.dismiss();

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;

        return updateProfile(user, {
          displayName,
          photoURL,
        }).then(() => {
          const updatedUser = { ...user, displayName, photoURL };
          setUser(updatedUser);
          toast.success("Registration successful!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
          });
          navigate("/");
        });
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          toast.error("This email is already registered. Please log in.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
          });
        } else {
          toast.error(`Registration failed: ${err.message}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
          });
        }
        console.error("Error during registration:", err);
      });
  };

  const handleGoogleRegister = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Registration with Google successful!", {
          position: "bottom-right",
          hideProgressBar: true,
        });
        navigate("/");
      })
      .catch(() => {
        toast.error("Google registration failed. Try again!", {
          position: "bottom-right",
          hideProgressBar: true,
        });
      });
  };

  return (
    <div>
      <div className="card min-w-[380px] md:w-[500px] shadow-2xl rounded-3xl border border-gray-900 bg-[#010409b2] backdrop-blur-xl flex flex-col items-center justify-center pt-8">
        <div className="text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent">
          Register Here
        </div>

        {/* Google Register Button */}
        <div className="mt-10">
          <button
            onClick={handleGoogleRegister}
            type="button"
            className="flex justify-center items-center gap-2 text-white hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm min-w-10 min-h-10 px-6 text-center"
          >
            <FcGoogle className="text-xl" />
            <span>Register with Google</span>
          </button>
        </div>

        <div className="flex w-full flex-col border-opacity-50 px-9 mt-4 -mb-4">
          <div className="divider">OR</div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card-body w-full space-y-2">
          <div className="form-control">
            <input
              type="text"
              name="displayName"
              placeholder="Enter your name"
              className="input input-bordered border-gray-900 bg-black h-11 text-xs font-semibold focus:outline-none rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered border-gray-900 bg-black h-11 text-xs font-semibold focus:outline-none rounded-full"
              required
            />
          </div>
          {emailError && (
            <div className="text-sm text-red-500 mt-2 ml-4">
              <p>{emailError}</p>
            </div>
          )}
          <div className="form-control">
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL (optional)"
              className="input input-bordered border-gray-900 bg-black h-11 text-xs font-semibold focus:outline-none rounded-full"
            />
          </div>
          <div className="form-control relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered border-gray-900 bg-black h-11 text-xs font-semibold focus:outline-none rounded-full"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-400 hover:text-lime-400 cursor-pointer"
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>

          {passwordError && (
            <div className="text-sm text-red-500 mt-2 ml-4">
              <p>{passwordError}</p>
            </div>
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

