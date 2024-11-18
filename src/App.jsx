import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins bg-gray-950 min-h-screen text-white">
      <div className="min-h-16">
        {/* Common header */}
        <Header />
      </div>
      <div className="p-20 flex items-center justify-center min-h-[calc(100vh-144px)] ">
        {/* load Page here */}
        <Outlet />
      </div>
      <div className="min-h-16 flex justify-center items-center border-t border-gray-900">
        {/* Common footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
