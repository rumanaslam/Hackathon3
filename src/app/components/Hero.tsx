import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* w90rem h 63 */}
      <div className="flex relative">
        <Image
          src={"/bg.png"}
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        <div
          className="w-[643px] h-[443px] heroText absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFF3E3] p-5 ml-80"
        >
          <div className="w-[561px] h-[344px]">
            <h6 className="font-poppins text-600 text-16px leading-24px text-[#333333] font-bold ml-1">
              New Arrival
            </h6>
            <h1 className="font-poppins font-700 text-52px leading-[65px] text-[#B88E2F] font-bold text-6xl ml-780px">
              Discover Our <br /> New Collection
            </h1>
            <br />
            <p
              className="w-[546px] h-[52px] font-poppins font-500 text-[18px] leading-[24px] text-[#333333] font-semibold"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> 
              elit tellus, luctus nec ullamcorper mattis.
            </p>
            <br />
            <br />
            <button className="bg-[#B88E2F] pt-4 pr-12 pb-4 pl-12 text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
