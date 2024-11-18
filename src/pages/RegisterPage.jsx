import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
    return (
        <div>
        <Helmet>
          <title>Register - Couponio</title>
        </Helmet>
        <div className="text-6xl font-semibold uppercase bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent">Register</div>
      </div>
    );
};

export default RegisterPage;