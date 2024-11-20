import { Helmet } from "react-helmet-async";
import ProfileUpdate from "../components/ProfileUpdate";

const ProfileUpdatePage = () => {
  return (
    <div>
      <Helmet>
        <title>Profile - Couponio</title>
      </Helmet>
      <div>
        <ProfileUpdate/>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
