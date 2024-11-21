import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBrandContext } from "../contexts/BrandProvider";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const BrandsPageContent = () => {
  const { brands } = useBrandContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBrands, setFilteredBrands] = useState([]);
  const navigate = useNavigate();

  // Handle search functionality
  useEffect(() => {
    const filtered = brands?.filter((brand) =>
      brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBrands(filtered);
  }, [searchTerm, brands]);

  const handleViewCoupons = (brand) => {
    const isLoggedIn = !!localStorage.getItem("authToken"); // Example auth check
    if (isLoggedIn) {
      navigate(`/brands/${brand.id}`);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });
  }, []);

  return (
    <div>
      <div className="p-8 flex flex-col items-center">
        <div className="text-xl md:text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent mb-6">
          All Brands
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-1/2 mx-auto mb-6">
          <input
            type="text"
            placeholder="Search brands..."
            className="w-full px-4 py-3 rounded-full bg-gray-900 text-gray-200 focus:outline-none text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 gap-6">
          {filteredBrands?.map((brand) => (
            <div
              data-aos="fade-up"
              key={brand.id}
              className="p-6 shadow-2xl rounded-3xl border border-gray-900 bg-[#010409b2] backdrop-blur-xl  flex flex-col md:flex-row text-center md:text-start justify-between items-center gap-4"
            >
              <div className="md:flex space-y-4 space-x-6 items-center">
                {/* Brand Logo */}
                <img
                  src={brand.brand_logo}
                  alt={brand.brand_name}
                  className="mx-auto h-32 w-32 object-contain border border-gray-900 rounded-full bg-gray-200"
                />
                {/* Brand Info */}
                <div className="flex flex-col items-center md:items-start w-full md:w-80 xl:w-full">
                  <h2 className="text-2xl font-semibold">{brand.brand_name}</h2>
                  <p className="text-gray-400">{brand.description}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <FaStar className="text-lime-400" />
                    <span>{brand.rating}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-center">
                {brand.isSaleOn && (
                  <p className="animate-bounce mb-2">Sale is On!</p>
                )}
                <button
                  onClick={() => handleViewCoupons(brand)}
                  className="flex justify-center items-center gap-2 text-lime-400 hover:text-black bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm px-6 py-2 text-center"
                >
                  View Coupons
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPageContent;
