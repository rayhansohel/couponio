import { TbWriting } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {
  return (
    <div>
      <div className="card min-w-[380px] md:w-[600px] shadow-2xl rounded-3xl border border-gray-900 bg-[#03071265] backdrop-blur-xl flex flex-col items-center justify-center pt-8">
        <div className="text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent">
          Register Here
        </div>
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
        <div className="flex w-full flex-col border-opacity-50 px-9 mt-4 -mb-4">
          <div className="divider">OR</div>
        </div>
        <form className="card-body w-full space-y-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered border-gray-900 bg-gray-950 h-11 text-xs font-semibold focus:outline-none rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered border-gray-900 bg-gray-950 h-11 text-xs font-semibold focus:outline-none rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered border-gray-900 bg-gray-950 h-11 text-xs font-semibold focus:outline-none rounded-full"
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered border-gray-900 bg-gray-950 h-11 text-xs font-semibold focus:outline-none rounded-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <NavLink
              to="/"
              type="button"
              className="flex justify-center items-center gap-2 text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm min-w-10 min-h-10 md:px-6 text-center"
            >
              <TbWriting className="text-xl -ml-1" />
              <span>Register</span>
            </NavLink>
          </div>
          <div className="text-sm text-center">
            <p>
              You Have An Account ?{" "}
              <Link
                to="/auth/login"
                className="font-semibold text-red-700 hover:text-red-600"
              >
                Login
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
