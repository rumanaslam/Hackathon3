
"use client";

import Image from "next/image";
import { useState } from "react";


export default function Inspiration() {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images array
  const images = [
    {
      src: "/Rectangle 24.png",
      title: "Inner Peace",
      description: "01 — Bed Room",
    },
    
    {
      src: "/Rectangle 25.png",
      title: "Classic Touch",
      description: "02 — Dining Room",
    },
    {
        src: "/Rectangle 26.png",
        title: "Modern Aesthetic",
        description: "03 — Living Room",
      },
  ];

  // Function to navigate images
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen flex justify-center items-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-lg text-gray-600">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="bg-[#c1975a] text-white px-6 py-3 text-lg font-medium rounded-md hover:bg-[#a37e49] transition">
            Explore More
          </button>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* Main Image Display */}
          <div className="relative">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              width={700}
              height={500}
              className="rounded-lg shadow-md object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6 bg-white/90 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">
                {images[currentIndex].description}
              </p>
              <h2 className="text-xl font-semibold text-gray-800">
                {images[currentIndex].title}
              </h2>
            </div>
          </div>

          {/* Arrow Buttons */}
          <div className="absolute inset-0 flex justify-between items-center px-4">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="bg-white/90 p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="bg-white/90 p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Sub Room Images */}
        <div className="flex items-center justify-between mt-4">
          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-24 h-24 overflow-hidden rounded-md shadow-md cursor-pointer ${
                  currentIndex === index ? "ring-4 ring-[#c1975a]" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  width={372}
                  height={486}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
