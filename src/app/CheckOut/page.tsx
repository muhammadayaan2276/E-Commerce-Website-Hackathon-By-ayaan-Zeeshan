import React from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const Checkout = () => {
  return (
    <div className="bg-[#FFFFFF]">
       {/* Background Section */}
                <div className="relative w-full h-[300px] md:h-[390px] overflow-hidden">
                  {/* Background Image */}
                  <Image src="/Rectangle 1.png" alt="shop background" layout="fill" objectFit="cover" />
          
                  {/* Centered Content */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    {/* Logo */}
                    <Image src="/Meubel House_Logos-05.png" alt="logo" height={46} width={140} className="mx-auto -mb-4" />
          
                    {/* Shop Text */}
                    <h1 className="text-4xl md:text-6xl text-[#000000] font-medium mb-5">Checkout</h1>
          
                    <div className="flex justify-center items-center text-lg pb-16">
                      <h3 className='font-medium text-[14px] md:text-[16px] font-poppins text-[#000000]'>Home</h3>
                      <MdKeyboardArrowRight className="mx-2 w-[16px] md:w-[20px] h-[16px] md:h-[20px] text-[#000000]" />
                      <h3 className='font-poppins text-[14px] md:text-[16px] font-[300] text-[#000000]'>Checkout</h3>
                    </div>
                  </div>
                </div>
      

      <div className="bg-white h-full flex justify-center py-20">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-6 lg:ml-2">
          {/* Left Section: Billing Details Form */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#000000] mb-10 mt-7">Billing details</h2>
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-md font-medium text-[#000000] mb-4">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full border border-gray-400 rounded-lg p-4"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-md font-medium  text-[#000000] mb-4">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full border border-gray-400 rounded-lg p-4"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company-name" className="block text-md font-medium text-[#000000] mb-4 mt-9">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="w-full border border-gray-400 rounded-lg p-4"
                />
              </div>

              {/* Country / Region */}
              <div>
                <label htmlFor="country" className="block text-md font-medium text-[#000000] mb-4 mt-9">
                  Country / Region
                </label>
                <div className="relative">
                  <select
                    id="country"
                    className="w-full text-sm text-[#9F9F9F] border border-gray-400 rounded-lg p-5 appearance-none"
                  >
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                  </select>
                  <IoIosArrowDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="street-address" className="block text-md font-medium text-[#000000] mb-4 mt-9">
                  Street address
                </label>
                <input
                  type="text"
                  id="street-address"
                  className="w-full border border-gray-400 rounded-lg p-4"
                />
              </div>

              {/* Town / City */}
              <div>
                <label htmlFor="city" className="block text-md font-medium text-[#000000] mb-4 mt-9">
                  Town / City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full border border-gray-400 rounded-lg p-4"
                />
              </div>

              {/* Province */}
              <div className="mt-6">
                <label htmlFor="province" className="block text-md font-medium text-[#000000] mb-4 mt-9">
                  Province
                </label>
                <div className="relative">
                  <select
                    id="province"
                    className="w-full text-sm text-[#9F9F9F] border border-gray-400 rounded-lg p-5 appearance-none"
                  >
                    <option value="Western Province">Western Province</option>
                    <option value="Eastern Province">Eastern Province</option>
                  </select>
                  <IoIosArrowDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black" />
                </div>
              </div>

              {/* ZIP Code */}
              <div>
                <label htmlFor="zip-code" className="block text-md font-medium text-[#000000] mb-4 mt-9">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip-code"
                  className="w-full border border-gray-400 rounded-lg p-4"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-md font-medium text-[#000000] mb-4 mt-9">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full border border-gray-400 rounded-lg p-4"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-md font-medium text-[#000000] mb-4 mt-9">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-400 rounded-lg p-4"
                />
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additional-info" className="block text-md font-medium text-[#000000] mb-4 mt-9">
                  Additional Information
                </label>
                <textarea
                  id="additional-info"
                  placeholder="Additional information"
                  className="w-full pl-6 pt-5 text-sm border lg:pl-3 border-gray-400 rounded-lg"
                ></textarea>
              </div>
            </form>
          </div>

          <div className="gap-12 lg:gap-60"></div>

          {/* Right Section: Product Summary and Payment */}
          <div className="flex-1 bg-white rounded-lg p-8">
            {/* Product Summary */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-black mt-12">Product</h1>
                <span className="text-[#000000] font-semibold text-xl mt-12">Subtotal</span>
              </div>
              <div className="flex">
                <p className="text-[#9F9F9F] py-5">
                  Asgaard sofa <span className="font-bold text-black">x 1</span>
                </p>
                <p className="text-black font-medium ml-14 mt-5 md:ml-[480px]">Rs. 250,000.00</p>
              </div>

              {/* Total Section */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-0">
                <p className="font-semibold text-lg text-black">Subtotal</p>
                <p className="text-gray-700">Rs. 250,000.00</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-4">
                <p className="font-semibold text-black text-lg">Total</p>
                <p className="text-[#b08500] font-bold text-lg">Rs. 250,000.00</p>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="mt-6">
              <h2 className="flex font-semibold text-black mr-3 mb-2">
                <GoDotFill className="text-[22px] mr-1" />
                Direct Bank Transfer
              </h2>

              <p className="text-[#9F9F9F] text-md mb-4">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                Your order will not be shipped until the funds have cleared in our account.
              </p>
              <div className="mb-4">
                {/* Radio Buttons */}
                <label className="flex items-center space-x-2 mb-3 mt-6">
                  <input
                    type="radio"
                    name="paymentMethod"
                    defaultChecked
                    className="h-4 w-4 border-gray-400 text-[#9F9F9F] focus:ring-[#9F9F9F]"
                  />
                  <span className="text-[#9F9F9F]">Direct Bank Transfer</span>
                </label>
                <label className="flex items-center space-x-2 mb-6">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="h-4 w-4 border-gray-400 text-[#9F9F9F] focus:ring-[#9F9F9F]"
                  />
                  <span className="text-[#9F9F9F]">Cash On Delivery</span>
                </label>
              </div>
              <p className="text-gray-600 text-md mb-6">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
                <a href="#" className="text-black font-bold">privacy policy.</a>
              </p>
            </div>

            {/* Place Order Button */}
            <div className="flex justify-center">
              <button className="mt-10 w-60 border-[2px] rounded-[15px] border-[#000000] text-[#000000] py-3 text-lg font-medium hover:bg-amber-100">
                Place order
              </button>
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
};

export default Checkout;
