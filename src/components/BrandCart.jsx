import { useBrandContext } from "../contexts/BrandProvider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BrandCart = () => {
  const { brands, loading, error } = useBrandContext();

  if (loading) return <div className="text-center">Loading brands...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  const filteredBrands = brands?.filter((brand) => brand.isSaleOn);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 300,
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBrands?.map((brand) => (
        <div
          data-aos="fade-up"
          key={brand.id}
          className="shadow-2xl rounded-3xl border border-gray-900 bg-[#010409b2] text-sm backdrop-blur-xl hover:scale-105 transition-transform"
        >
          <div className="flex gap-6 justify-start items-center p-4">
            <div>
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="mx-auto h-32 w-32 object-contain border border-gray-900 rounded-full bg-gray-200"
              />
            </div>
            <div>
              <h3 className="mt-3 text-white text-2xl font-semibold">
                {brand.brand_name}
              </h3>
              <p className="text-lg text-gray-400">{brand.category}</p>
              <div>
                <p className="text-md text-gray-500 font-semibold">
                  Total Coupons:{" "}
                  <span className="text-lime-400">{brand.coupons.length}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandCart;
