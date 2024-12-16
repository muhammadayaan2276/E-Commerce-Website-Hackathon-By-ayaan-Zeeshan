import React from 'react';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Account = () => {
  return (
    <div>
      {/* Background Section */}
      <div className='bg-[#FFFFFF]'>
         {/* Background Section */}
                  <div className="relative w-full h-[300px] md:h-[390px] overflow-hidden">
                    {/* Background Image */}
                    <Image src="/Rectangle 1.png" alt="shop background" layout="fill" objectFit="cover" />
            
                    {/* Centered Content */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      {/* Logo */}
                      <Image src="/Meubel House_Logos-05.png" alt="logo" height={46} width={140} className="mx-auto -mb-4" />
            
                      {/* Shop Text */}
                      <h1 className="text-4xl md:text-6xl text-[#000000] font-medium mb-5">Account</h1>
            
                      <div className="flex justify-center items-center text-lg pb-16">
                        <h3 className='font-medium text-[14px] md:text-[16px] font-poppins text-[#000000]'>Home</h3>
                        <MdKeyboardArrowRight className="mx-2 w-[16px] md:w-[20px] h-[16px] md:h-[20px] text-[#000000]" />
                        <h3 className='font-poppins text-[14px] md:text-[16px] font-[300] text-[#000000]'>Account</h3>
                      </div>
                    </div>
                  </div>

        {/* Main Form Section */}
        <div className="bg-white flex items-center justify-center py-16 px-4">
          <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col md:flex md:flex-col lg:flex lg:flex-row lg:space-x-16 md:items-center space-y-8 md:space-y-16 md:space-x-8">
              {/* Login Section */}
              <div className="w-full md:w-1/2">
                <form className="space-y-8">
                  <h2 className="text-3xl md:text-4xl text-[#000000] font-bold mb-4">Log In</h2>
                  <div>
                    <label className="block text-lg font-medium mb-3 text-nowrap">
                      Username or email address
                    </label>
                    <input
                      type="text"
                      className="w-full md:w-96 border-2 border-gray-300 rounded-[10px] p-4"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium mb-3">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full md:w-96 border-2 border-gray-300 rounded-[10px] p-5"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 w-[27px] h-[25px] rounded-[5px]"
                    />
                    <label className="text-lg text-[#000000] font-normal">
                      Remember me
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="px-[72px] py-3 border-[2px] text-[12px] text-nowrap hover:bg-amber-100 border-gray-500 text-[#000000] font-medium rounded-[15px]"
                    >
                      Log In
                    </button>
                    <div className="text-md  ml-3 lg:ml-20 text-[#9F9F9F] font-medium">
                      Lost Your Password?
                    </div>
                  </div>
                </form>
              </div>

              {/* Register Section */}
              <div className="w-full md:w-1/2 mt-16 md:mt-0">
                <form className="space-y-4 pb-12">
                  <h2 className="text-3xl md:text-4xl text-[#000000] font-bold mb-10">Register</h2>
                  <div>
                    <label className="block text-lg font-medium mb-3">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="w-full md:w-96 border-2 border-gray-300 rounded-[10px] pb-7 p-1"
                    />
                  </div>
                  <div className="text-md text-[#000000] mt-4 mb-2">
                    A link to set a new password will be sent to your email address.
                  </div>
                  <div className="text-md text-[#000000] pb-1">
                    Your personal data will be used to support your experience throughout
                    this website, to manage access to your account, and for other
                    purposes described in our{" "}
                    <a href="#" className="font-bold">
                      privacy policy
                    </a>
                    .
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="px-[72px] py-3 border-[2px] hover:bg-amber-100 border-gray-500 text-[#000000] font-medium rounded-[15px]"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Additional Information Section */}
        <div className="bg-[#FAF4F4] w-full py-[40px] mb-8 md:mb-8 md:py-[80px] border-t border-b border-gray-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6">
          <div className="max-w-xs mx-auto">
            <h3 className="font-poppins text-[#000000] text-lg md:text-[26px] text-nowrap font-semibold mb-2">Free Delivery</h3>
            <p className="text-[#9F9F9F] font-poppins text-sm md:text-[20px] font-normal leading-tight">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="max-w-xs mx-auto">
            <h3 className="font-poppins text-[#000000] text-lg md:text-[26px] text-nowrap font-semibold mb-2">90 Days Return</h3>
            <p className="text-[#9F9F9F] font-poppins text-sm md:text-[20px] text-wrap font-normal leading-tight">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="max-w-xs mx-auto">
            <h3 className="font-poppins text-[#000000] text-lg md:text-[26px] text-nowrap font-semibold mb-2">Secure Payment</h3>
            <p className="text-[#9F9F9F] font-poppins text-sm md:text-[20px] font-normal leading-tight">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
