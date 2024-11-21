import { Link, NavLink } from "react-router-dom";
import brandLogo from "../assets/couponio-logo.png";
import {
  TbLogin2,
  TbLogout2,
  TbBrandAuth0,
  TbWriting,
  TbUserCircle,
} from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { LuSquareCode } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import defaultAvatar from "../assets/default-avatar.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);  // Adding loading state

  if (loading) {
    return (
      <div className="navbar">
        {/* You can add a loading spinner or a placeholder */}
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="pt-1 container mx-auto">
      <div className="navbar border border-gray-900 bg-[#010409b2] rounded-full px-4 w-11/12 mx-auto backdrop-blur-md shadow-2xl">
        {/* Brand Logo */}
        <div className="navbar-start flex gap-1 items-center">
          <Link to="/">
            <img className="w-5 md:w-6" src={brandLogo} alt="Site Logo" />
          </Link>
          <Link to="/" className="text-2xl md:text-3xl uppercase">
            Couponio
          </Link>
        </div>

        {/* Menu Items */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-12 text-sm font-light">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-lime-400 flex items-center gap-1"
                    : "hover:text-lime-400 transition flex items-center gap-1"
                }
              >
                {" "}
                <GoHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  isActive
                    ? "text-lime-400 flex items-center gap-1"
                    : "hover:text-lime-400 transition flex items-center gap-1"
                }
              >
                {" "}
                <TbBrandAuth0 />
                Brands
              </NavLink>
            </li>
            {/* Conditionally render the Profile link if the user is logged in */}
            {user && user?.email && (
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lime-400 flex items-center gap-1"
                      : "hover:text-lime-400 transition flex items-center gap-1"
                  }
                >
                  {" "}
                  <TbUserCircle />
                  Profile
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-lime-400 flex items-center gap-1"
                    : "hover:text-lime-400 transition flex items-center gap-1"
                }
              >
                {" "}
                <LuSquareCode />
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Login or register buttons */}
        <div className="hidden lg:flex navbar-end space-x-2">
          {/* Conditionally hide Register button if user is logged in */}
          {!user && (
            <NavLink
              to="/auth/register"
              type="button"
              className="btn-sm flex justify-center items-center gap-2 font-medium text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm py-5 md:py-4 md:px-4 text-center"
            >
              <TbWriting className="text-lg -ml-1" />
              <span>Register</span>
            </NavLink>
          )}

          <div>
            {user && user?.email ? (
              <>
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className="w-8">
                      <img
                        src={user.photoURL || defaultAvatar}
                        alt="User Avatar"
                        className="rounded-full border-2 border-gray-800"
                      />
                    </div>
                  </div>
                  <NavLink
                    to="/"
                    onClick={logOut}
                    type="button"
                    className="btn-sm flex justify-center items-center gap-1 font-medium text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm p-4 text-center"
                  >
                    <TbLogout2 className="text-lg -ml-1" />
                    <span>Logout</span>
                  </NavLink>
                </div>
              </>
            ) : (
              <NavLink
                to="/auth/login"
                type="button"
                className="btn-sm flex justify-center items-center gap-1 font-medium text-black bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br rounded-full text-sm p-4 text-center"
              >
                <TbLogin2 className="text-lg -ml-1" />
                <span>Login</span>
              </NavLink>
            )}
          </div>
        </div>

        {/* Dropdown Menu Button */}
        <div className="navbar-end flex lg:hidden ml-2">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
