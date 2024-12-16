import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* w90rem h 63 */}
      <div className="flex relative w-full">
        <Image
          src={"/bg.png"}
          width={1440}
          height={100}
          alt="Picture"
        />
        <div
          className="absolute top-[20%] left-[20%] md:top-[20%] md:left-[45%] bg-[#FFF3E3] p-6 md:p-10 
        w-[90%] max-w-[643px] rounded-lg shadow-lg"
        >
          <div className="w-[500px] h-[320px] ml-5">
            <h6 className="font-poppins text-600 text-16px leading-24px text-[#333333] font-bold ml-1 mt-8">
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
