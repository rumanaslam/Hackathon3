import React from "react";
import FilterBar from "../components/FilterBar";
import ProductsGrid from "../components/ProductsGrid";
import Image from "next/image";

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/Rectangle 1.png"
          alt="Banner"
          width={1440}
          height={316}
          className="w-full h-[316px] object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#000000] bg-opacity-40">
          {/* Logo */}
          <Image
            src="/uio.png"
            alt="Logo"
            width={77}
            height={77}
            className="mb-2" // Adds spacing between logo and text
          />
          <h1 className="text-5xl fontsemi-bold font-poppins">Shop</h1>
          <p className="text-sm mt-2">
            <span className="opacity-80 font-bold text-[#000000]">Home</span> &gt; <span>Shop</span>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter Bar */}
        <FilterBar />

        {/* Products Grid */}
        <ProductsGrid />
      </div>
    </div>
  );
};

export default ShopPage;
