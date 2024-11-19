import { Link, NavLink } from "react-router-dom";
import brandLogo from "../assets/couponio-logo.png";
import { TbLogin2, TbLogout2, TbBrandAuth0, TbWriting, TbUserCircle } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { LuSquareCode } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import defaultAvatar from "../assets/default-avatar.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="pt-4">
      <div className="navbar border border-gray-900 bg-[#03071244] rounded-full px-4 w-11/12 mx-auto backdrop-blur-md shadow-2xl">
        <div className="navbar-start flex gap-1 items-center">
          <Link to="/">
            <img className="w-5 md:w-6" src={brandLogo} alt="Site Logo" />
          </Link>
          <Link to="/" className="text-2xl md:text-3xl uppercase">
            Couponio
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-12 text-sm font-light">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-lime-400 flex items-center gap-1" : "hover:text-lime-400 transition flex items-center gap-1"
                }
              > <GoHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  isActive ? "text-lime-400 flex items-center gap-1" : "hover:text-lime-400 transition flex items-center gap-1"
                }
              > <TbBrandAuth0 />
                Brands
              </NavLink>
            </li>
            {/* Conditionally render the Profile link if the user is logged in */}
            {user && user?.email && (
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "text-lime-400 flex items-center gap-1" : "hover:text-lime-400 transition flex items-center gap-1"
                }
              > <TbUserCircle />
                  Profile
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-lime-400 flex items-center gap-1" : "hover:text-lime-400 transition flex items-center gap-1"
                }
              > <LuSquareCode />
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end space-x-2">
          {/* Conditionally hide Register button if user is logged in */}
          {!user && (
            <NavLink
              to="/auth/register"
              type="button"
              className="flex justify-center items-center gap-2 font-medium text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm min-w-10 min-h-10 md:px-6 text-center"
            >
              <TbWriting className="text-xl -ml-1" />
              <span className="hidden md:flex">Register</span>
            </NavLink>
          )}

          <div>
            {user && user?.email ? (
              <>
                {/* Display user's name and photo with logout button if logged in */}
                <div className="flex items-center gap-2">
                  {/* Name displayed before Avatar */}
                  <div className="hidden md:flex text-white text-sm -mb-1">{user.email}</div>
                  <img
                    src={user.photoURL || defaultAvatar}  // Fallback to default avatar if photoURL is not available
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border-2 border-gray-800"
                  />
                  <NavLink
                    to="/"
                    onClick={logOut}
                    type="button"
                    className="flex justify-center items-center gap-1 font-medium text-black bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br rounded-full text-sm min-w-10 min-h-10 md:px-6 text-center"
                  >
                    <TbLogout2 className="text-xl -ml-1" />
                    <span className="hidden md:flex">Logout</span>
                  </NavLink>
                </div>
              </>
            ) : (
              <NavLink
                to="/auth/login"
                type="button"
                className="flex justify-center items-center gap-1 font-medium text-black bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br rounded-full text-sm min-w-10 min-h-10 md:px-6 text-center"
              >
                <TbLogin2 className="text-xl -ml-1" />
                <span className="hidden md:flex">Login</span>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

