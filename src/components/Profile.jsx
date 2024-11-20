import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "../assets/default-avatar.png";
import { RxUpdate } from "react-icons/rx";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-10 gap-8 shadow-2xl rounded-3xl border border-gray-900 bg-[#010409b2] backdrop-blur-xl">
      {/* Cover Section */}
      <div className="text-xl md:text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent">
          Welcome, {user?.displayName || "User"}!
      </div>
      {/* Profile View */}
      <div className="min-w-[200px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Profile Photo  */}
          <div className="avatar">
            <div className="w-32">
              <img
                src={user.photoURL || defaultAvatar}
                alt="User Avatar"
                className="rounded-full border-2 border-gray-800"
              />
            </div>
          </div>
          {/* Profile detail */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold">
              {user?.displayName || "User"}
            </h3>
            <p className="text-gray-400">{user?.email}</p>
            <button
              onClick={() => navigate("/profile/update")}
              className="flex justify-center items-center gap-2 text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm py-2 px-6 mt-4 text-center"
            >
              <RxUpdate className="text-lg -ml-1" />
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
