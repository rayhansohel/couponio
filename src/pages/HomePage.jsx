import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import BrandCart from "../components/BrandCart";
import BrandsMarquee from "../components/BrandsMarquee"; // Import BrandMarquee
import { useBrandContext } from "../contexts/BrandProvider"; // Import context

const HomePage = () => {
  const { brands } = useBrandContext(); // Get the brands data from the context

  return (
    <div>
      <Helmet>
        <title>Home - Couponio</title>
      </Helmet>
      <div className="container space-y-6 md:space-y-12">
        {/* Display Hero Slider*/}
        <div>
          <Hero />
        </div>
        {/* Display BrandMarquee*/}
        <div className="w-11/12 mx-auto flex flex-col items-center justify-center">
          <div className="text-3xl md:text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent pb-6">
            Top Brand
          </div>
          <BrandsMarquee brands={brands || []} />
        </div>
        {/* Display Brand cart*/}
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
