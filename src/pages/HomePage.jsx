import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import BrandCart from "../components/BrandCart";
import BrandsMarquee from "../components/BrandsMarquee"; // Import BrandMarquee
import { useBrandContext } from "../contexts/BrandProvider"; // Import context
import Faq from "../components/Faq";
import ImageGrid from "../components/ImageGrid";

const HomePage = () => {
  const { brands } = useBrandContext();
  
  return (
    <div>
      <Helmet>
        <title>Home - Couponio</title>
      </Helmet>
      <div className="container space-y-6 md:space-y-20">
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
        {/* Display Image grid*/}
        <div className="flex flex-col items-center justify-center">
        <div className="text-3xl md:text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent pb-6">
            Beast Deals
          </div>
          <ImageGrid />
        </div>
        {/* Display FAQs */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl md:text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent pb-6">
            FAQs About Couponio
          </div>
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
