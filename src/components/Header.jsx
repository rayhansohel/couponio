// import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div >
      {/* <div className="text-gray-300 text-sm border-b border-gray-900 py-2 px-2  mx-auto backdrop-blur-lg">
        <Marquee pauseOnHover={true} >
          <Link to="/profile" className="mr-4">Hello! <span className="text-lime-400">Rayhan</span>, Welcome to my website </Link>
          <Link to="/profile" className="mr-4">Hello! <span className="text-lime-400">Rayhan</span>, Welcome to my website </Link>
          <Link to="/profile" className="mr-4">Hello! <span className="text-lime-400">Rayhan</span>, Welcome to my website </Link>
          <Link to="/profile" className="mr-4">Hello! <span className="text-lime-400">Rayhan</span>, Welcome to my website </Link>
          <Link to="/profile" className="mr-4">Hello! <span className="text-lime-400">Rayhan</span>, Welcome to my website </Link>
          <Link to="/profile" className="mr-4">Hello! <span className="text-lime-400">Rayhan</span>, Welcome to my website </Link>
          <Link to="/profile" className="mr-4">Hello! <span className="text-lime-400">Rayhan</span>, Welcome to my website </Link>
          <Link to="/profile" className="mr-4">Hello! <span className="text-lime-400">Rayhan</span>, Welcome to my website </Link>
        </Marquee>
      </div> */}
      {/* load navbar here */}
      <Navbar />
    </div>
  );
};

export default Header;
