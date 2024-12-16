import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] py-[50px] sm:py-[40px] lg:py-[60px]  -mt-8">
      <div className="w-full max-w-[1240px] mx-auto px-[20px] lg:px-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-[20px] md:gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[60px]">
        {/* Address Section */}
        <div className="flex flex-col justify-start items-center sm:items-start pt-14 w-full">
          <ul>
            <li className="text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[24px] font-poppins text-[#9F9F9F]">
              400 University Drive Suite 200 Coral
            </li>
            <li className="text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[24px] font-poppins text-[#9F9F9F]">
              Gables, FL 33134 USA
            </li>
          </ul>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:px-[20px] md:px-[30px] lg:px-[40px] justify-start">
          <h5 className="text-[14px] sm:text-[16px] font-medium leading-[22px] sm:leading-[24px] font-poppins text-[#9F9F9F] mb-[40px] sm:mb-[50px]">
            Links
          </h5>
          <ul className="space-y-[15px] sm:space-y-[20px] md:space-y-[25px]">
            <li className="text-[14px] sm:text-[16px] font-medium font-poppins text-[#000000]">Home</li>
            <li className="text-[14px] sm:text-[16px] font-medium font-poppins text-[#000000]">Shop</li>
            <li className="text-[14px] sm:text-[16px] font-medium font-poppins text-[#000000]">Blog</li>
            <li className="text-[14px] sm:text-[16px] font-medium font-poppins text-[#000000]">Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex flex-col sm:px-[20px] md:px-[30px] lg:px-[40px] justify-start">
          <h5 className="text-[14px] sm:text-[16px] font-medium leading-[22px] sm:leading-[24px] font-poppins text-[#9F9F9F] mb-[40px] sm:mb-[50px]">
            Help
          </h5>
          <ul className="space-y-[15px] sm:space-y-[20px] md:space-y-[25px]">
            <li className="text-[14px] sm:text-[16px] font-medium text-nowrap font-poppins text-[#000000]">
              Payment Options
            </li>
            <li className="text-[14px] sm:text-[16px] font-medium font-poppins text-[#000000]">Returns</li>
            <li className="text-[14px] sm:text-[16px] font-medium font-poppins text-[#000000]">
              Privacy Policies
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col sm:px-[20px] md:px-[30px] lg:px-[40px] justify-start">
          <h5 className="text-[14px] sm:text-[16px] font-medium leading-[22px] sm:leading-[24px] font-poppins text-[#9F9F9F] mb-[40px] sm:mb-[50px]">
            Newsletter
          </h5>
          <div className="flex-col sm:flex-row sm:flex-nowrap items-center gap-[8px] sm:gap-[10px] w-full">
            <div className="flex-1 border-b-[1px] sm:border-b-2 border-[#000000] pb-[3px] sm:pb-[5px]">
              <input
                type="email"
                placeholder="Enter Your Email "
                className="w-full text-[12px] sm:text-[14px] font-normal font-poppins text-[#9F9F9F] bg-transparent focus:outline-none"
              />
            </div>
            <span className="text-[14px] sm:text-[16px] font-medium font-poppins text-[#000000] underline pb-[16px] sm:mt-0 sm:ml-[10px] cursor-pointer">
              Subscribe
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full bg-[#FFFFFF] py-[10px] sm:py-[15px] mt-[30px] sm:mt-[40px] border-t border-gray-200">
        <div className="max-w-[1240px] mx-auto text-center sm:text-left px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
          <p className="text-[#000000] font-poppins font-normal text-[12px] sm:text-[14px] md:text-[16px]">
            2022 Meubel House. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
