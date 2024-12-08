import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-auto pt-[80px] bg-[#FBEBB5] flex flex-col md:flex-row items-center justify-between relative mb-0"> {/* Use flex-col on small screens */}

      {/* Left Section - Text and Button */}
      <div className="w-full md:w-[440px] text-center md:text-left z-10 mb-5 px-4 md:ml-[80px]">
        <h1 className="font-poppins text-[48px] md:text-[64px] font-semibold text-[#000000] mb-4">
          Rocket Single Seater
        </h1>
        
        {/* Button Box with Text and Underline */}
        <div className="w-[250px] h-[80px] flex flex-col items-center md:items-start mt-9 mx-auto md:mx-0">
          <button className="font-poppins text-[24px] font-medium text-[#000000] ">
            Shop Now
          </button>
          <div className="w-28 h-[2px] bg-[#000000] mt-2"></div>
        </div>
      </div>

      {/* Right Section - Rocket Image */}
      <div className="w-full md:w-[750px] h-[400px] md:h-[900px] relative mb-4 md:mb-0">
        <Image
          src="/Rocket single seater 1.png"
          alt="Rocket Single Seater"
          layout="fill" // Makes the image responsive while preserving aspect ratio
          objectFit="cover" // Ensures the image covers the area
        />
      </div>
    </div>
  );
};

export default Hero;
