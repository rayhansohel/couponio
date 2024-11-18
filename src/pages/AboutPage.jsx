import { Helmet } from "react-helmet-async";

const AboutPage = () => {
    return (
        <div>
        <Helmet>
          <title>About - Couponio</title>
        </Helmet>
        <div className="text-6xl font-semibold uppercase bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent">
          About
        </div>
      </div>
    );
};

export default AboutPage;