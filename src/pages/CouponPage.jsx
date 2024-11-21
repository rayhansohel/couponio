import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../contexts/AuthProvider"; // Import AuthContext
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

const CouponPage = () => {
  const { id } = useParams(); // Get the brand ID from the URL
  const navigate = useNavigate(); // useNavigate instead of useHistory
  const { user } = useAuth(); // Get the logged-in user from context
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }

    // Fetch the brand and coupons data from a static JSON file
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/coupons.json"); // Fetch the entire coupons.json file
        if (!response.ok) {
          throw new Error("Failed to fetch brand data");
        }
        const data = await response.json();

        // Find the brand by id
        const selectedBrand = data.find((brand) => brand.id === id); // Assuming your structure has a brand object

        if (selectedBrand) {
          setBrand(selectedBrand); // Set the brand data
        } else {
          setError("Brand not found");
        }
      } catch (error) {
        setError(error.message); // Handle error
        toast.error("Error fetching brand data");
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();
  }, [id, user, navigate]); // Include navigate in the dependency array

  const handleUseNow = (link) => {
    window.open(link, "_blank"); // Open the shop link in a new tab
  };

  if (loading) {
    return (
      <div className="text-center text-white">
        <p className="text-xl">Loading brand details...</p>
        <div className="spinner"></div>{" "}
        {/* You can add a spinner animation here */}
      </div>
    ); // Show loading text while fetching data
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p className="text-xl">{error}</p>{" "}
        {/* Show error message if fetching fails */}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="text-xl md:text-3xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent mb-6 text-center">
        Coupons by Brand
      </div>
      {brand && (
        <>
          <div className="p-6 flex text-center md:text-start items-center justify-center gap-4">
            <div>
              {" "}
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="mx-auto w-24 h-24 object-contain border border-gray-900 rounded-full bg-white "
              />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-white">
                {brand.brand_name}
              </h1>
              <div className="flex gap-2 items-center text-white">
                <span>⭐</span>
                <span>{brand.rating}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {brand.coupons?.length > 0 ? (
              brand.coupons.map((coupon) => (
                <div
                  key={coupon.id}
                  className="bg-gray-950 p-6 border border-gray-900 rounded-3xl shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <p className="text-xl mb-4">
                      Coupon Code:{" "}
                      <span className="text-lime-400">
                        {coupon.coupon_code}
                      </span>
                    </p>
                    <p className="text-gray-400">{coupon.description}</p>
                    <p>
                      Condition:{" "}
                      <span className="text-gray-400">{coupon.condition}</span>{" "}
                    </p>
                    <p>
                      Condition:{" "}
                      <span className="text-gray-400">
                        {coupon.expiry_date}
                      </span>{" "}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <CopyToClipboard
                      text={coupon.coupon_code}
                      onCopy={() => toast.success("Coupon code copied!")}
                    >
                      <button className="flex justify-center items-center gap-2 bg-gray-900 hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm py-2 px-6 text-center text-lime-400 hover:text-black">
                        <MdOutlineContentCopy className="text-lg -ml-1" />
                        Copy Code
                      </button>
                    </CopyToClipboard>
                    <button
                      className="flex justify-center items-center gap-2 bg-gray-900 hover:hover:bg-gradient-to-br from-lime-200 via-lime-400 to-lime-500 rounded-full text-sm py-2 px-6 text-center text-white hover:text-black"
                      onClick={() => handleUseNow(brand.link)}
                    >
                      <FaExternalLinkAlt className="text-lg -ml-1" />
                      Use Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white">
                No coupons available for this brand.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CouponPage;
