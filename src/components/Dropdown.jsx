import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
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

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="btn-sm flex justify-center items-center font-medium text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm w-10 h-10 text-center"
      >
        {isOpen ? (
          <span className="text-lg">
            <IoClose />
          </span>
        ) : (
          <span className="text-lg">
            <HiMenu />
          </span>
        )}
      </button>

      {isOpen && (
        <div className="text-sm absolute top-14 -right-4 bg-[#010409b2]">
          <div className="flex p-5 shadow-lg backdrop-blur-xl  border border-gray-900 rounded-xl">
            <div>
              <ul className="flex flex-col gap-3">
                <li>
                  <NavLink
                    to="/"
                    onClick={closeDropdown}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lime-400 flex items-center gap-1"
                        : "hover:text-lime-400 transition flex items-center gap-1"
                    }
                  >
                    <GoHome />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/brands"
                    onClick={closeDropdown}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lime-400 flex items-center gap-1"
                        : "hover:text-lime-400 transition flex items-center gap-1"
                    }
                  >
                    <TbBrandAuth0 />
                    Brands
                  </NavLink>
                </li>
                {user && user?.email && (
                  <li>
                    <NavLink
                      to="/profile"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        isActive
                          ? "text-lime-400 flex items-center gap-1"
                          : "hover:text-lime-400 transition flex items-center gap-1"
                      }
                    >
                      <TbUserCircle />
                      Profile
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink
                    to="/about"
                    onClick={closeDropdown}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lime-400 flex items-center gap-1"
                        : "hover:text-lime-400 transition flex items-center gap-1"
                    }
                  >
                    <LuSquareCode />
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="divider divider-horizontal"></div>
            <div>
              <div className="space-y-2 grid items-center">
                {!user && (
                  <NavLink
                    to="/auth/register"
                    type="button"
                    onClick={closeDropdown}
                    className="btn-sm flex justify-center items-center gap-2 font-medium text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm py-5 md:py-4 md:px-4 text-center"
                  >
                    <TbWriting className="text-xl -ml-1" />
                    <span>Register</span>
                  </NavLink>
                )}

                <div>
                  {user && user?.email ? (
                    <>
                      <div className="flex flex-col items-center gap-5">
                        <div className="avatar">
                          <div className="w-16">
                            <img
                              src={user.photoURL || defaultAvatar}
                              alt="User Avatar"
                              className="rounded-full border-2 border-gray-800"
                            />
                          </div>
                        </div>

                        <NavLink
                          to="/"
                          onClick={() => {
                            logOut();
                            closeDropdown();
                          }}
                          type="button"
                          className="btn-sm flex justify-center items-center gap-1 font-medium text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm py-5 md:py-4 md:px-4 text-center"
                        >
                          <TbLogout2 className="text-xl -ml-1" />
                          <span>Logout</span>
                        </NavLink>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to="/auth/login"
                      type="button"
                      onClick={closeDropdown}
                      className="btn-sm flex justify-center items-center gap-1 font-medium text-black bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br rounded-full text-sm py-5 md:py-4 md:px-4 text-center"
                    >
                      <TbLogin2 className="text-xl -ml-1" />
                      <span>Login</span>
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
