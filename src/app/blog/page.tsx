import React from 'react';
import Image from 'next/image';

const Page = () => {
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

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
          {/* Logo */}
          <Image
            src="/uio.png"
            alt="Logo"
            width={77}
            height={77}
            className="mb-2" // Adds spacing between logo and text
          />
          {/* Heading */}
          <h1 className="text-5xl font-semibold font-poppins text-[#000000]">Blog</h1>
          {/* Breadcrumb */}
          <p className="text-sm mt-2 text-[#000000]">
            <span className="opacity-80 font-bold text-[#000000]">Blog</span> &gt; <span className="text-[#000000]">Blog</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
