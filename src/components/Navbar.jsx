import { Link, NavLink } from "react-router-dom";
import brandLogo from "../assets/couponio-logo.png";
import { BiLogIn } from "react-icons/bi";
import { TbWriting } from "react-icons/tb";

const Navbar = () => {
  // Active menu Item //
  const isActiveLink = (path) => location.pathname === path;
  return (
    <div className="pt-4">
      <div className="navbar border border-gray-900 rounded-full px-4 w-11/12 mx-auto backdrop-blur-lg">
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
                  isActive ? "text-lime-400" : "hover:text-lime-400 transition"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  isActive ? "text-lime-400" : "hover:text-lime-400 transition"
                }
              >
                Brands
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "text-lime-400 " : "hover:text-lime-400 transition"
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-lime-400" : "hover:text-lime-400 transition"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <NavLink
            to="/register"
            type="button"
            className="flex justify-center items-center gap-2 font-medium text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm min-w-10 min-h-10 md:px-6 text-center"
          >

            <TbWriting className="text-xl -ml-1" />
            <span className="hidden md:flex">Register</span>
          </NavLink>
          <NavLink
            to="/login"
            type="button"
            className="flex justify-center items-center gap-1 text-black font-medium bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br rounded-full text-sm min-w-10 min-h-10 md:px-6 text-center"
          >

            <BiLogIn className="text-xl -ml-1" />
            <span className="hidden md:flex">Login</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
