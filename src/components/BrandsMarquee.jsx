import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const BrandsMarquee = ({ brands }) => {

  return (
    <div className="overflow-hidden py-2 md:py-4 border rounded-3xl border-gray-900 bg-[#010409b2] backdrop-blur-md">
      <Marquee pauseOnHover={true} speed={100}>
        <div className="flex items-center">
          {brands.map((brand) => (
            <Link key={brand.id} to="/brands">
              <div>
                <img
                  src={brand.brand_logo}
                  alt={brand.brand_name}
                  className="w-32 md:w-60 object-contain rounded-3xl"
                />
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BrandsMarquee;
