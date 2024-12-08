import React from 'react'
import Image from 'next/image'

const Subhero = () => {
  return (
    <div className='w-full h-[685px] px-[1px] flex flex-col items-center justify-center'>
      
      <div className="subText text-center ">
        <h1 className="font-bold text-2xl text-[#333333] font-poppins">
          Browse The Range
        </h1>
        <p className="text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="imgArea flex justify-center pt-8 gap-6">
        <div className="imgItem flex flex-col">
          <Image
            src="/999.png"
            width={282}
            height={100}
            alt="Picture of the author"
          />
          <h6 className="pt-4 text-center font-semibold">Dining</h6>
        </div>
        <div className="imgItem flex flex-col">
          <Image
            src="/89.png"
            width={282}
            height={100}
            alt="Picture of the author"
          />
          <h6 className="pt-4 text-center font-semibold">Living</h6>
        </div>
        <div className="imgItem flex flex-col">
          <Image
            src="/890.png"
            width={282}
            height={100}
            alt="Picture of the author"
          />
          <h6 className="pt-4 text-center font-semibold">Bedroom</h6>
        </div>
      </div>
    </div>
  )
}

export default Subhero
