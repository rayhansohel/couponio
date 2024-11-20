import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { MdSystemUpdateAlt } from "react-icons/md";
import defaultAvatar from "../assets/default-avatar.png";
import { TiCancel } from "react-icons/ti";

const ProfileUpdate = () => {
  const { user, updateUserProfile, setUser } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await updateUserProfile(displayName, photoURL);
      setUser({ ...user, displayName, photoURL });
      navigate("/profile");
    } catch (err) {
      setError("Failed to update profile. Please try again.");
      console.error("Error updating profile:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/profile");
  };


  const handleImageError = () => {
    setPhotoURL(defaultAvatar);
  };


  const handlePhotoURLChange = (e) => {
    const newURL = e.target.value;
    setPhotoURL(newURL);


    const img = new Image();
    img.onload = () => {}; // No action needed, URL is valid
    img.onerror = () => setPhotoURL(defaultAvatar);
    img.src = newURL;
  };

  return (
    <div className="flex flex-col items-center p-6 gap-8 shadow-2xl rounded-3xl border border-gray-900 bg-[#010409b2] backdrop-blur-xl">
      <div className="text-xl md:text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent">
        Update Your Profile
      </div>

      <div className="flex flex-col md:flex-row mt-4 gap-4 items-start justify-center">
        {/* Profile details */}
        <div className="w-full md:min-w-[200px]">
          <div className="flex flex-col items-center">
            <div className="avatar mb-4">
              <div className="w-24">
                <img
                  src={photoURL || defaultAvatar}
                  alt="User Avatar"
                  className="rounded-full border-2 border-gray-800"
                  onError={handleImageError}
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold">{displayName || "User"}</h3>
            <p className="text-gray-400">{user?.email}</p>
          </div>
        </div>

        <div className="divider md:divider-horizontal"></div>

        <div className="md:min-w-[350px]">
          <form onSubmit={handleUpdate}>
            <div className="form-control mb-4">
              <input
                type="text"
                placeholder="Update your name"
                className="input input-bordered border-gray-900 bg-black h-10 text-xs font-semibold focus:outline-none rounded-full"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
            </div>
            <div className="form-control mb-4">
              <input
                placeholder="Update photo using URL"
                type="text"
                className="input input-bordered border-gray-900 bg-black h-10 text-xs font-semibold focus:outline-none rounded-full"
                value={photoURL}
                onChange={handlePhotoURLChange}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="grid grid-cols-2 gap-4 form-control mt-6">
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex justify-center items-center gap-2 ${
                    loading ? "bg-gray-500 cursor-not-allowed" : "bg-gray-900"
                  } hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm w-full py-2 px-6 text-center text-lime-400 hover:text-black`}
                >
                  {loading ? (
                    <span>Updating...</span>
                  ) : (
                    <>
                      <MdSystemUpdateAlt className="text-lg -ml-1" />
                      <span>Update</span>
                    </>
                  )}
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex justify-center items-center gap-2 bg-gray-900 hover:hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm w-full py-2 px-6 text-center text-white hover:text-black"
                >
                  <TiCancel className="text-lg -ml-1" />
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
