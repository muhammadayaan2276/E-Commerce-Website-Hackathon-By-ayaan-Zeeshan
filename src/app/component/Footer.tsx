import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-auto bg-[#FAFAFA] py-[50px] mt-0'>
      <div className='w-full max-w-[1240px] mx-auto px-[20px] sm:px-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]'>
        {/* Address Section */}
        <div className='flex flex-col justify-start items-start w-full px-[30px]'>
          <ul>
            <li className='text-[16px] font-normal leading-[24px] font-poppins text-[#9F9F9F]'>
              400 University Drive Suite 200 Coral
            </li>
            <li className='text-[16px] font-normal leading-[24px] font-poppins text-[#9F9F9F]'>
              Gables, FL 33134 USA
            </li>
          </ul>
        </div>

        {/* Links Section */}
        <div className='px-[30px] sm:px-[50px]'>
          <h5 className='text-[16px] font-medium leading-[24px] font-poppins text-[#9F9F9F] mb-[30px]'>
            Links
          </h5>
          <ul className='space-y-[20px]'>
            <li className='text-[16px] font-medium font-poppins text-[#000000]'>Home</li>
            <li className='text-[16px] font-medium font-poppins text-[#000000]'>Shop</li>
            <li className='text-[16px] font-medium font-poppins text-[#000000]'>About</li>
            <li className='text-[16px] font-medium font-poppins text-[#000000]'>Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className='px-[30px] sm:px-[50px]'>
          <h5 className='text-[16px] font-medium leading-[24px] font-poppins text-[#9F9F9F] mb-[30px]'>
            Help
          </h5>
          <ul className='space-y-[20px]'>
            <li className='text-[16px] font-medium text-nowrap font-poppins text-[#000000]'>
              Payment Options
            </li>
            <li className='text-[16px] font-medium font-poppins text-[#000000]'>Returns</li>
            <li className='text-[16px] font-medium font-poppins text-[#000000]'>
              Privacy Policies
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className='px-[30px] sm:px-[50px]'>
          <h5 className='text-[16px] font-medium leading-[24px] font-poppins text-[#9F9F9F] mb-[30px]'>
            Newsletter
          </h5>
          <div className='flex flex-wrap items-center gap-[10px]'>
            <div className='flex-1 border-b-2 border-[#000000] pb-[5px]'>
              <input
                type='email'
                placeholder='Enter Your Email Address'
                className='w-[100%] sm:w-[175px] text-[14px] font-normal font-poppins text-[#9F9F9F] bg-transparent focus:outline-none'
              />
            </div>
            <span className='text-[17px] font-medium font-poppins text-[#000000] underline underline-offset-[5px]'>
              Subscribe
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className='w-full bg-[#FFFFFF] py-[15px] mt-[20px]'>
        <div className='max-w-[1240px] mx-auto text-center sm:text-left px-[20px] sm:px-[50px]'>
          <p className='text-[#000000] font-poppins font-normal text-[14px] sm:text-[16px]'>
            2022 Meubel House. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
