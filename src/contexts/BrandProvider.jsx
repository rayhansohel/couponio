import { createContext, useState, useContext, useEffect } from "react";

// Create a context for brands
const BrandContext = createContext();

// Custom hook to use the BrandContext
export const useBrandContext = () => {
  return useContext(BrandContext);
};

// Provider component to wrap your app and provide brand data
const BrandProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("/public/coupons.json");
        if (!response.ok) {
          throw new Error("Failed to fetch brands");
        }
        const data = await response.json();
        setBrands(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return (
    <BrandContext.Provider value={{ brands, loading, error }}>
      {children}
    </BrandContext.Provider>
  );
};

export default BrandProvider;
