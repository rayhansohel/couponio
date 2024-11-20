import brandLogo from "../assets/couponio-logo.png";
import { Link, NavLink } from "react-router-dom";
import { TbBrandAuth0, TbUserCircle } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { LuSquareCode } from "react-icons/lu";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto">
      {/* footer top */}
      <div className="w-11/12 mx-auto text-sm grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-6 pt-16">
        {/*footer left  Brand Message */}
        <div className="space-y-3 md:col-span-2 lg:col-span-1">
          <div className="flex gap-2 md:w-10">
            <img className="w-8" src={brandLogo} alt="Site Logo" />
            <Link to="/" className="text-4xl uppercase">
              Couponio
            </Link>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg">Your Ultimate Coupon Hub</h3>
            <p className="text-gray-400">
              Couponio is a dynamic web platform where users can find and use the latest discount coupons for a wide variety of stores.
            </p>
          </div>
        </div>

        {/* Footer center container  menu items*/}
        <div className="flex gap-3 flex-col lg:items-center">
          <h2 className="text-xl">Menu Links</h2>
          <div className="text-gray-400">
            <ul className="space-y-1 text-sm font-light">
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
        </div>

        {/* Footer right container Contact information */}
        <div className=" flex flex-col md:items-end">
          <div className="space-y-3">
            <h2 className="text-xl">Contact Information</h2>
            <div className="text-gray-400">
              <p>
                <span className="font-semibold">Location: </span>Uttara, Dhaka, Bangladesh
              </p>
              <p>
                <span className="font-semibold">Phone: </span> +31 35 353 33 221
              </p>

              <p>
                <span className="font-semibold">Email:</span> info@couponio.com
              </p>
            </div>
            {/* social icons  */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/RayhanSohel"
                target="_blank"
                className=" text-xl text-gray-700 hover:text-lime-400"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/rrayhanSohel"
                target="_blank"
                className=" text-xl text-gray-700 hover:text-lime-400"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/arayhansohel/"
                target="_blank"
                className=" text-xl text-gray-700 hover:text-lime-400"
              >
                {" "}
                <FaInstagram />
              </a>
              <a
                href="https://github.com/RayhanSohel"
                target="_blank"
                className=" text-xl text-gray-700 hover:text-lime-400"
              >
                {" "}
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom  */}
      <div className="text-gray-400 text-center border-t border-gray-900 py-4 w-11/12 mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Couponio. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
