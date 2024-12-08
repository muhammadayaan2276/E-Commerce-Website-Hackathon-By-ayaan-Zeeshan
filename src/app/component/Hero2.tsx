import React from "react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="w-full h-[650px] bg-[#FFF9E5] flex items-center relative">
      {/* Left Section - Image */}
      <div className="absolute top-0 left-0 w-[700px] h-[900px]">
        <Image
          src="/Asgaard sofa 1.png"
          alt="Asgaard Sofa"
          width={750}
          height={800}
          className="object-cover"
        />
      </div>

      {/* Right Section - Text and Button */}
      <div className="ml-auto text-left w-[440px] pr-[80px] z-10">
        {/* Centered New Arrivals */}
        <h3 className="w-[146px] h-[39px] font-poppins text-nowrap text-[24px] font-medium text-[#000000] text-center">
          New Arrivals
        </h3>
        <div>
          <h1 className="text-left  text-nowrap font-poppins text-[54px] font-bold text-[#000000] mt-[10px]">
            Asgaard Sofa
          </h1>
        </div>

        {/* Button */}
        <div className="w-[331px] h-[72px] flex flex-col items-start mt-[20px]">
          <button className="font-poppins text-[20px] border-2 border-black w-48 h-14 font-normal text-[#000000]">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
