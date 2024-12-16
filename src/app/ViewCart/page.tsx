import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const ViewCart = () => {
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
                 <h1 className="text-4xl md:text-6xl text-[#000000] font-medium mb-5">Cart</h1>
       
                 <div className="flex justify-center items-center text-lg pb-16">
                   <h3 className='font-medium text-[14px] md:text-[16px] font-poppins text-[#000000]'>Home</h3>
                   <MdKeyboardArrowRight className="mx-2 w-[16px] md:w-[20px] h-[16px] md:h-[20px] text-[#000000]" />
                   <h3 className='font-poppins text-[14px] md:text-[16px] font-[300] text-[#000000]'>Cart</h3>
                 </div>
               </div>
             </div>

      {/* Main Section */}
      <div className="py-9 px-4 md:px-8 bg-[#FFFFF]">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Section: Cart Items */}
          <div className="flex-1 bg-white rounded-lg py-6 overflow-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#fff5d7]">
                <tr>
                  <th className="p-4 text-[#000000] font-medium">Product</th>
                  <th className="p-4 text-[#000000] font-medium">Price</th>
                  <th className="p-4 text-[#000000] font-medium">Quantity</th>
                  <th className="p-4 text-[#000000] font-medium">Subtotal</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 py-6 flex-col items-center gap-4">
                    <Image
                      src="/Group 137.png"
                      alt="Product"
                      height={79}
                      width={77}
                      className="object-cover rounded-md bg-[#fff5d7]"
                    />
                    <span className="text-[#9F9F9F] text-[17px]">Asgaard sofa</span>
                  </td>
                  <td className="p-4 text-[#9F9F9F] text-[16px]">Rs. 250,000.00</td>
                  <td className="p-4">
                    <input
                      type="number"
                      className="w-16 text-center border rounded-lg"
                      defaultValue="1"
                      min="1"
                    />
                  </td>
                  <td className="p-4 text-[#000000] text-[16px]">Rs. 250,000.00</td>
                  <td className="lg:p-4 md:p-2">
                    <Image
                      src="/ant-design_delete-filled.png"
                      alt="delete"
                      height={34}
                      width={34}
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Section: Cart Totals */}
          <div className="lg:w-96 bg-[#fff5d7] rounded-lg p-6 lg:h-full md:pt-24 shadow-lg">
            <h2 className="text-[30px] font-bold text-[#000000] mb-8 text-center md:py-4">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[#000000] font-semibold">Subtotal</span>
                <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between text-[#000000] font-semibold text-lg">
                <span>Total</span>
                <span className="text-[#e99800]">Rs. 250,000.00</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/CheckOut">
                <button className="w-full border-2 border-[#000000] text-[#000000] py-2 rounded-lg text-lg font-medium hover:bg-gray-300">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
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

export default ViewCart;
