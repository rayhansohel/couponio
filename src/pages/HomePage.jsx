import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import BrandCart from "../components/BrandCart";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Couponio</title>
      </Helmet>
      <div className="container space-y-16">
        <div>
          <Hero />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl md:text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent pb-6">
            Brands on Sell
          </div>
          <BrandCart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
