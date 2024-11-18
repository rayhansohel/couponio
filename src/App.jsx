import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins">
      {/* Common header for every page */}
      <Header />
      <div>
        {/* Body section for every Page */}
        <Outlet />
      </div>
      {/* Common footer for every page  */}
      <Footer />
    </div>
  );
}

export default App;
