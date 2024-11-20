import sliderOne from "../assets/hero-slider (1).png";
import sliderTwo from "../assets/hero-slider (2).png";
import sliderThree from "../assets/hero-slider (3).png";
import sliderFour from "../assets/hero-slider (4).png";

const HeroSlider = () => {
  return (
    <div className="carousel w-full min-h-[200px] rounded-3xl border border-gray-900 bg-[#010409b2]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={sliderOne}
          alt="Slide 1"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={sliderTwo}
          alt="Slide 2"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={sliderThree}
          alt="Slide 3"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={sliderFour}
          alt="Slide 4"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
