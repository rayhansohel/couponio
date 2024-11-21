import { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);
  const sliderRef = useRef(null);

  // Fetch slider data
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch("/slider.json");
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSlides();
  }, []);

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const totalSlides = slides.length;
      const nextIndex = (index + totalSlides) % totalSlides;
      const targetSlide = sliderRef.current.querySelector(`#slide${nextIndex + 1}`);
      targetSlide?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleButtonClick = (index) => (event) => {
    event.preventDefault();
    event.currentTarget.blur(); // Prevent focus-related scroll
    scrollToSlide(index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <div
      ref={sliderRef}
      className="carousel w-full min-h-[200px] rounded-3xl border border-gray-900 bg-[#010409b2] overflow-hidden"
      data-aos="fade-up"
    >
      {slides.map((slide, index) => (
        <div
          id={`slide${index + 1}`}
          key={slide.id}
          className="carousel-item relative w-full"
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              type="button"
              onClick={handleButtonClick(index - 1)}
              className="btn btn-circle text-lime-400"
              aria-label="Previous Slide"
            >
              ❮
            </button>
            <button
              type="button"
              onClick={handleButtonClick(index + 1)}
              className="btn btn-circle text-lime-400"
              aria-label="Next Slide"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;

