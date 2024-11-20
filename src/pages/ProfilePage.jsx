import { Helmet } from "react-helmet-async";
import Profile from "../components/Profile";

const ProfilePage = () => {
  return (
    <div>
      <Helmet>
        <title>Profile - Couponio</title>
      </Helmet>
      <div>
        <Profile/>
      </div>
    </div>
  );
};

export default ProfilePage;