import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>Error 404 - Couponio</title>
      </Helmet>
      <div className="min-h-screen flex flex-col gap-4 justify-center items-center px-4 text-center text-white bg-[#030712] font-poppins">
        <h1 className="text-[150px] font-semibold bg-gradient-to-r from-[#CAF481] to-[#91D623] bg-clip-text text-transparent">404</h1>
        <p className="text-sm -mt-10">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <button className="text-black font-semibold bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-full text-sm px-5 py-2 text-center">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
