import React from 'react';
import Image from 'next/image';

const Subhero = () => {
  return (
    <div className="w-full px-4 py-10 flex flex-col items-center justify-center">
      {/* Text Section */}
      <div className="subText text-center mb-6">
        <h1 className="font-bold text-xl md:text-2xl text-[#333333] font-poppins">
          Browse The Range
        </h1>
        <p className="text-sm md:text-base text-[#666666] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Section */}
      <div className="imgArea grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8">
        {/* Dining */}
        <div className="imgItem flex flex-col items-center">
          <Image
            src="/999.png"
            width={381}
            height={480}
            alt="Dining"
            className="w-full max-w-[300px] h-auto"
          />
          <h6 className="pt-4 text-center font-semibold text-sm md:text-base">
            Dining
          </h6>
        </div>

        {/* Living */}
        <div className="imgItem flex flex-col items-center">
          <Image
            src="/89.png"
            width={381}
            height={480}
            alt="Living"
            className="w-full max-w-[300px] h-auto"
          />
          <h6 className="pt-4 text-center font-semibold text-sm md:text-base">
            Living
          </h6>
        </div>

        {/* Bedroom */}
        <div className="imgItem flex flex-col items-center">
          <Image
            src="/890.png"
            width={381}
            height={480}
            alt="Bedroom"
            className="w-full max-w-[300px] h-auto"
          />
          <h6 className="pt-4 text-center font-semibold text-sm md:text-base">
            Bedroom
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Subhero;