import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins bg-fixed bg-[radial-gradient(circle_at_bottom,_#84cc16,_#030712,_#030712,_#030712)] min-h-screen text-white">
      <div className="min-h-16 sticky top-0 z-50">
        {/* Common header */}
        <Header />
      </div>
      <div className="flex items-center justify-center min-h-[calc(100vh-144px)] ">
        {/* load Page here */}
        <Outlet />
      </div>
      <div className="min-h-16 flex justify-center items-center border-t border-gray-900 bg-gray-950">
        {/* Common footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
