import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {

  const { user } = useContext(AuthContext);

  return (
    <div >

      {user && (
      <div className="text-gray-400 text-sm border-b border-gray-900 py-1 px-2  mx-auto bg-[#010409b2] backdrop-blur-md">
      <Marquee pauseOnHover={true} >
        <Link to="/profile" className="mr-8">Hello! <span className="text-lime-400">{user.displayName
        }</span>, Welcome to Couponio. You are logged in via email <span className="text-lime-400">{user.email
        }</span>. Stay with Couponio for best deal.</Link>
        <Link to="/profile" className="mr-8">Hello! <span className="text-lime-400">{user.displayName
        }</span>, Welcome to Couponio. You are logged in via email <span className="text-lime-400">{user.email
        }</span>. Stay with Couponio for best deal.</Link>
        <Link to="/profile" className="mr-8">Hello! <span className="text-lime-400">{user.displayName
        }</span>, Welcome to Couponio. You are logged in via email <span className="text-lime-400">{user.email
        }</span>. Stay with Couponio for best deal.</Link>
      </Marquee>
    </div>
          )}
      {/* load navbar here */}
      <Navbar />
    </div>
  );
};

export default Header;
