import { BiLogIn } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      navigate(`/forgot-password?email=${email}`);
    } else {
      toast.error("Please provide a valid email address", {
        position: "bottom-right",
        hideProgressBar: true,
      });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login with Google successful!", {
          position: "bottom-right",
          hideProgressBar: true,
        });
        navigate("/");
      })
      .catch(() => {
        toast.error("Google sign-in failed. Try again!", {
          position: "bottom-right",
          hideProgressBar: true,
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful!", {
          position: "bottom-right",
          hideProgressBar: true,
        });
        navigate("/");
      })
      .catch(() => {
        toast.error("Put valid email and password", {
          position: "bottom-right",
          hideProgressBar: true,
        });
      });
  };

  return (
    <div>
      <div className="card min-w-[380px] md:w-[500px] shadow-2xl rounded-3xl border border-gray-900 bg-[#010409b2] backdrop-blur-xl flex flex-col items-center justify-center pt-8">
        <div className="text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent">
          Login Here
        </div>
        <div className="mt-10">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex justify-center items-center gap-2 text-white hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm min-w-10 min-h-10 px-6 text-center"
          >
            <FcGoogle className="text-xl" />
            <span>Login with Google</span>
          </button>
        </div>
        <div className="flex w-full flex-col border-opacity-50 px-9 mt-4 -mb-4">
          <div className="divider">OR</div>
        </div>
        <form onSubmit={handleSubmit} className="card-body w-full space-y-2">
          <div className="form-control">
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter your email address"
              className="input input-bordered border-gray-900 bg-black h-11 text-xs font-semibold focus:outline-none rounded-full"
              required
            />
          </div>
          <div className="form-control relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered border-gray-900 bg-black h-11 text-xs font-semibold focus:outline-none rounded-full pr-10"
              required
            />
            <span
              className="absolute right-4 top-3 cursor-pointer text-gray-400 hover:text-lime-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </span>
            <div
              onClick={handleForgetPassword}
              className="text-gray-400 hover:text-lime-400 ml-4"
            >
              <a href="#" className="text-xs">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="flex justify-center items-center gap-2 text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm min-w-10 min-h-10 md:px-6 text-center"
            >
              <BiLogIn className="text-xl -ml-1" />
              <span>Login</span>
            </button>
          </div>
          <div className="text-sm text-center">
            <p>
              Don't Have An Account?{" "}
              <Link
                to="/auth/register"
                className="font-semibold text-red-700 hover:text-red-600"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
