import { Helmet } from "react-helmet-async";
import BrandsPageContent from "../components/BrandsPageContent";


const BrandsPage = () => {
    return (
        <div>
        <Helmet>
          <title>Brands - Couponio</title>
        </Helmet>
        <div className="container mx-auto"> 
          <BrandsPageContent/>
        </div>
      </div>
    );
};

export default BrandsPage;