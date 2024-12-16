import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Shop = () => {
  const products = [
    { name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', image: '/Mask group (4).png' },
    { name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', image: '/Mask group (5).png' },
    { name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', image: '/Mask group (6).png' },
    { name: 'Plain console with teak mirror', price: 'Rs. 25,000.00', image: '/Mask group (7).png' },
    { name: 'Grain coffee table', price: 'Rs. 15,000.00', image: '/Mask group (8).png' },
    { name: 'Kent coffee table', price: 'Rs. 225,000.00', image: '/Mask group (9).png' },
    { name: 'Round coffee table_color 2', price: 'Rs. 25,000.00', image: '/Mask group (10).png' },
    { name: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00', image: '/Mask group (11).png' },
    { name: 'Plain console', price: 'Rs. 258,200.00', image: '/Mask group (12).png' },
    { name: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00', image: '/Mask group (13).png' },
    { name: 'SJP_0825', price: 'Rs. 200,000.00', image: '/Mask group (14).png' },
    { name: 'Bela chair and table', price: 'Rs. 100,000.00', image: '/Mask group (15).png' },
    { name: 'Granite square table set', price: 'Rs. 258,200.00', image: '/Mask group (16).png' },
    { name: 'Aasgand sofa', price: 'Rs. 250,000.00', image: '/Mask group (17).png' },
    { name: 'Meya sofa three seater', price: 'Rs. 115,000.00', image: '/Mask group (18).png' },
    { name: 'Outdoor sofa set', price: 'Rs. 244,000.00', image: '/Mask group (19).png' },
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Background Section */}
      {/* Background Section */}
               <div className="relative w-full h-[300px] md:h-[390px] overflow-hidden">
                 {/* Background Image */}
                 <Image src="/Rectangle 1.png" alt="shop background" layout="fill" objectFit="cover" />
         
                 {/* Centered Content */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                   {/* Logo */}
                   <Image src="/Meubel House_Logos-05.png" alt="logo" height={46} width={140} className="mx-auto -mb-4" />
         
                   {/* Shop Text */}
                   <h1 className="text-4xl md:text-6xl text-[#000000] font-medium mb-5">Shop</h1>
         
                   <div className="flex justify-center items-center text-lg pb-16">
                     <h3 className='font-medium text-[14px] md:text-[16px] font-poppins text-[#000000]'>Shop</h3>
                     <MdKeyboardArrowRight className="mx-2 w-[16px] md:w-[20px] h-[16px] md:h-[20px] text-[#000000]" />
                     <h3 className='font-poppins text-[14px] md:text-[16px] font-[300] text-[#000000]'>Shop</h3>
                   </div>
                 </div>
               </div>

    {/* Filter Section */}
<div className="bg-[#FAF4F4] px-8 py-3">
  <div className="container mx-auto">
    {/* Responsive Layout */}
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      {/* Icons and Controls */}
      <div className="flex items-center justify-center  flex-wrap space-y-3 sm:space-y-0 sm:space-x-5 w-full sm:w-auto">
        {/* Filter Button */}
        <button className="flex items-center  lg:px-4 md:px-4 py-2  bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
          <FiFilter className="lg:mr-2 lg:mb-3 lg:text-xl mt-3 mr-2 md:mr-4 md:mb-3" />
          <span className="lg:text-[#000000] lg:mb-3 mt-3 md:mb-3">Filter</span>
        </button>
        {/* Icon Buttons */}
        <div className="flex items-center space-x-5">
          <button className="p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            <FiGrid className="text-lg" />
          </button>
          <button className="p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            <FiList className="text-lg" />
          </button>
        </div>
        {/* Vertical Divider (hidden for sm and below) */}
        <div className="sm:block border-l-2 h-6 border-gray-400"></div>
        {/* Results Text */}
        <span className="text-[#000000] font-medium pl-5 hidden sm:block">
          Showing 1-16 of 32 results
        </span>
      </div>

      {/* Show and Sort Buttons */}
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5 w-full sm:w-auto">
        <div className="flex items-center">
          <label className="text-[#000000] font-medium text-md mr-4">Show</label>
          <button className="px-4 py-2 bg-[#FFFFFF] text-[#9F9F9F] rounded-sm">16</button>
        </div>
        <div className="flex items-center">
          <label className="text-[#000000] md:text-nowrap font-medium text-md mr-4">Sort by</label>
          <button className="px-6 py-2 bg-[#FFFFFF] text-[#9F9F9F] rounded-sm">Default</button>
        </div>
      </div>
    </div>

    {/* Divider and Text Section for sm and md */}
    <div className="block sm:hidden mt-4">
      <hr className="border-gray-300 mb-3" />
      <div className="flex items-center justify-between">
        <span className="text-[#000000] font-medium">Showing 1-16 of 32 results</span>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
          Apply
        </button>
      </div>
    </div>
  </div>
</div>


      {/* Products Section */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
              <Link href="/productdetail">
                <div>
                  <Image src={product.image} alt={product.name} width={300} height={300} className="rounded-t-lg object-cover" />
                  <h2 className="text-lg font-medium text-center mt-2">{product.name}</h2>
                  <p className="text-center text-xl font-bold">{product.price}</p>
                </div>
              </Link>
            </div>
          ))}
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

export default Shop;
