import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiReset } from "react-icons/bi";
import { useAuth } from "../contexts/AuthProvider";
import { toast } from "react-toastify"; 

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { resetPassword } = useAuth(); 
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setEmail(params.get("email") || "");
  }, [location]);

  const handleResetPassword = () => {
    if (email) {
      resetPassword(email)
        .then(() => {
          toast.success("Password reset email sent!", {
            position: "bottom-right",
            hideProgressBar: true,
          });

          window.open(`https://mail.google.com/mail/u/0/#inbox`, "_blank");
          navigate("/auth/login");
        })
        .catch((error) => {
          toast.error(`Error: ${error.message}`, {
            position: "bottom-right",
            hideProgressBar: true,
          });
        });
    } else {
      toast.error("Please provide a valid email address", {
        position: "bottom-right",
        hideProgressBar: true,
      });
    }
  };

  return (
    <div>
      <div className="card min-w-[380px] md:w-[500px] shadow-2xl rounded-3xl border border-gray-900 bg-[#010409b2] backdrop-blur-xl flex flex-col items-center justify-center p-8">
        <div className="text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent">
          Reset Your Password
        </div>
        <form className="w-full max-w-sm space-y-4 mt-8">
          <div className="form-control">
            <input
              type="email"
              value={email}
              readOnly
              className="input input-bordered bg-black text-white border-gray-900 focus:outline-none h-11 text-xs font-semibold rounded-full"
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="button"
              onClick={handleResetPassword}
              className="flex justify-center items-center gap-2 text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm min-w-10 min-h-10 md:px-6 text-center"
            >
              <BiReset className="text-xl -ml-1" />
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
