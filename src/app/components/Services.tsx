import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <div className="bg-[#FAF3EA] py-10">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="text-center flex flex-col items-center md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex justify-center mb-2">
            <Image src={"/Vector (9).png"} alt='trophy' width={60} height={60} ></Image>
          </div>
          <div className='flex-row'>
            <h3 className="text-xl font-semibold text-gray-900 ">High Quality</h3>
            <p className="text-sm text-gray-600 mt-2 ">crafted from top materials</p>
          </div>
        </div>
        <div className="text-center flex flex-col items-center md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex justify-center mb-2">
            <Image src={"/guarantee.png"} alt='trophy' width={60} height={60} ></Image>
          </div>
          <div className='flex-row'>
            <h3 className="text-xl font-semibold text-gray-900 ml-2">Warranty Protection</h3>
            <p className="text-sm text-gray-600 mt-2">Over 2 years</p>
          </div>
        </div>
        <div className="text-center flex flex-col items-center md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex justify-center mb-2">
            <Image src={"/shipping.png"} alt='trophy' width={60} height={60} ></Image>
          </div>
          <div className='flex-row'>
            <h3 className="text-lg font-semibold text-gray-900">Free Shipping</h3>
            <p className="text-sm text-gray-600 mt-2">Order over 150 $</p>
          </div>
        </div>
        <div className="text-center flex flex-col items-center md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex items-center mb-2">
            <Image src="/customer-support.png" alt="support" width={60} height={60} />
          </div>
          <div className='flex-row'>
            <h3 className="text-lg font-semibold text-gray-900 ml-2">24 / 7 Support</h3>
            <p className="text-sm text-gray-600 mt-2">Dedicated support</p>
          </div>
        </div>
      </div>
      </div>
  );
};

export default FeaturesSection;
