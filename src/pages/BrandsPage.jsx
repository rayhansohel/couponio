import { Helmet } from "react-helmet-async";


const BrandsPage = () => {
    return (
        <div>
        <Helmet>
          <title>Brands - Couponio</title>
        </Helmet>
        <div className="text-6xl font-semibold uppercase bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 bg-clip-text text-transparent">
          Brand
        </div>
      </div>
    );
};

export default BrandsPage;