import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageGrid = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      offset: 300, 
    });
  }, []);

  return (
    <section id="image-grid" className="py-16">
      <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Large image */}
        <div
          className="h-full rounded-3xl col-span-2 row-span-2"
          data-aos="fade-up"
        >
          <img
            src="https://i.ibb.co/94715yd/4.png"
            alt=""
            className="w-full object-cover border border-gray-900 rounded-3xl"
          />
        </div>

        {/* Wide image */}
        <div className="col-span-2" data-aos="fade-down">
          <img
            src="https://i.ibb.co/Ytn4CDv/3.jpg"
            alt=""
            className="w-full object-cover border border-gray-900 rounded-3xl"
          />
        </div>

        {/* Single images */}
        <div data-aos="fade-up">
          <img
            src="https://i.ibb.co/CKDjCmD/2.jpg"
            alt=""
            className="w-full object-cover border border-gray-900 rounded-3xl"
          />
        </div>
        <div data-aos="fade-left">
          <img
            src="https://i.ibb.co/gjQWRc2/1.jpg"
            alt=""
            className="w-full object-cover border border-gray-900 rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
