import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins bg-gray-950 text-white ">
      <div className="sticky top-0 z-50">
        {/* Common header */}
        <Header />
      </div>
      <div className="flex items-center justify-center min-h-[calc(100vh-422px)] py-6">
        {/* load Page here */}
        <Outlet />
      </div>
      <div className="min-h-16 flex justify-center items-center border-t border-gray-900 bg-[#010409b2] backdrop-blur-md mt-10">
        {/* Common footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
