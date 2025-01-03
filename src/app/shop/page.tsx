import React from "react";
import FilterBar from "../components/FilterBar";
import ProductsGrid from "../components/ProductsGrid";
import Image from "next/image";
import Link from "next/link";

import Services from "../components/Services";
const ShopPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
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
      <div className="flex-col items-center text-center mb-8 mt-10 font-semi-bold text-xl ">
      <button className="rounded-[10px] h-[60px] w-[60px] mt-[30px] bg-[#B88E2F]"> 1</button>
      <button className="rounded-[10px] h-[60px] w-[60px] mt-[30px] bg-[#F9F1E7] ml-[40px]">2</button>
      <button className="rounded-[10px] h-[60px] w-[60px] mt-[30px] bg-[#F9F1E7] ml-[40px]">3</button>
      <Link href="/asgard-sofa">
      <button className="rounded-[10px] h-[60px] w-[98px] mt-[30px] bg-[#F9F1E7] ml-[40px]">
        Next
      </button>
    </Link>


    </div>
   <div>
    <Services/>
   </div>
    </div>
    
    
  );
};

export default ShopPage;
