import { Helmet } from "react-helmet-async";
import LoginForm from "../components/loginForm";


const LoginPage = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center p-4">
      <Helmet>
        <title>Login - Couponio</title>
      </Helmet>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
