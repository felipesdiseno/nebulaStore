"use client";
import { useState, useEffect } from "react";
import LandingPageComponent from "./landingPage/page";
import Image from "next/image";
function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/landing/landing1.jpg",
    "/landing/landing2.jpg",
    "/landing/landing3.jpg",
    "/landing/landing4.jpg",
    "/landing/landing6.jpg",
    "/landing/landing7.jpg",
    "/landing/landing8.jpg",
  ];

  // avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-1/2 mx-auto pb-4 pt-4">
      <div className="relative h-96 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute block w-full h-full transition-transform duration-700 ease-in-out ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${100 * (index - currentSlide)}%)`,
            }}
          >
            <Image
              src={slide}
              className="block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      <LandingPageComponent />
    </div>
  );
}

export default LandingPage;
