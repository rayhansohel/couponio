import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {/* welcome massage to user */}
      <div className="h-6 text-center">
        {user && (
          <div className="text-gray-400 text-sm  px-2 border-b border-gray-900 bg-[#010409d3] backdrop-blur-md">
            <Link to="/profile">
              Welcome <span className="text-lime-400">{user.displayName}</span>{" "}
              at couponio.
            </Link>
          </div>
        )}
      </div>
      {/* load navbar here */}
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
