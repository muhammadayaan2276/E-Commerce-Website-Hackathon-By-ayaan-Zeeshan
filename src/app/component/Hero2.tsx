import React from "react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="w-full h-auto bg-[#FFF9E5] flex items-center relative flex-col lg:flex-row">
      {/* Left Section - Image */}
      <div className="w-full lg:w-[700px] h-auto sm:h-[400px] md:h-[500px]">
        <Image
          src="/Asgaard sofa 1.png"
          alt="Asgaard Sofa"
          width={750}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Section - Text and Button */}
      <div className="w-full lg:w-[440px] px-4 lg:pr-[80px] text-center lg:text-left z-10 mt-8 lg:mt-0">
        {/* Centered New Arrivals */}
        <h3 className="font-poppins text-[20px] sm:text-[24px] font-medium text-[#000000] mb-[10px]">
          New Arrivals
        </h3>
        <div>
          <h1 className="text-[28px] sm:text-[40px] md:text-[50px] font-poppins font-bold text-[#000000] mb-[20px]">
            Asgaard Sofa
          </h1>
        </div>

        {/* Button */}
        <div className="w-full lg:w-[331px] h-[72px] flex flex-col items-center lg:items-start mt-[20px]">
          <button className="font-poppins text-[18px] sm:text-[20px] lg:text-[20px] border-2 border-black w-48 h-14 font-normal text-[#000000]">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
