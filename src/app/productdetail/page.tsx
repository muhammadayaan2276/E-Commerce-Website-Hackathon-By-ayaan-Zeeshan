import React from "react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiLock } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillHeart } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const ProductDetail = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Breadcrumb Section */}
      <div className="bg-[#FFFFFF] w-full h-[100px] mb-6">
        <div className="container mx-auto py-4 text-gray-700">
          <div className="flex items-center text-sm">
            <span className="text-[#9F9F9F] font-poppins text-[14px] lg:text-[17px]">Home</span>
            <MdKeyboardArrowRight className="text-[#000000] mx-2 text-xl" />
            <span className="text-[#9F9F9F] font-poppins text-[14px] lg:text-[17px]">Shop</span>
            <MdKeyboardArrowRight className="text-[#000000] mx-2 text-xl" />
            <span className="font-poppins text-[14px] text-[#000000] lg:text-[17px]">Asgaard Sofa</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container flex flex-col lg:flex-row gap-10">
        {/* Left Section - Product Images */}
        <div className="flex flex-col items-center gap-6 lg:mb-52 md:flex md:flex-col md:items-center md:gap-6  lg:flex-row lg:gap-9">
          {/* Thumbnail Images */}
          <div className="flex flex-col gap-4 lg:w-[76px] md:w-[76px]">
            <Image src="/Group 94.png" alt="Thumbnail 1" width={76} height={80} className="rounded-md" />
            <Image src="/Group 98.png" alt="Thumbnail 2" width={76} height={80} className="rounded-md" />
            <Image src="/Group 97.png" alt="Thumbnail 3" width={76} height={80} className="rounded-md" />
            <Image src="/mask96.png" alt="Thumbnail 4" width={76} height={80} className="rounded-md" />
          </div>

          {/* Main Image */}
          <div className="rounded-md bg-[#FFF9E5] w-[223px] h-[300px] flex items-center justify-center  lg:w-[300px] lg:h-[400px]">
            <Image src="/Asgaard sofa 3.png" alt="Asgaard Sofa" width={423} height={500} className="object-contain" />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1 md:lg:pl-8 md:pl-6  md:flex-col  md:gap-10 lg:gap-20 items-center">
          <h1 className="font-poppins text-[24px] lg:text-[42px] text-[#000000]">Asgaard sofa</h1>
          <p className="text-[17px] lg:text-[24px] font-poppins text-[#9F9F9F] mt-2">Rs. 250,000.00</p>

          {/* Rating and Review */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-500 lg:text-xl text-md">★★★★★</div>
            <span className="lg:text-[13px] text-[12px] text-[#9F9F9F]">5 Customer Reviews</span>
          </div>

          {/* Description */}
          <p className="text-[#000000] lg:mt-4 mt-2 text-md">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.
          </p>

          {/* Size Options */}
          <div className="mt-6">
            <h3 className="text-gray-800 font-poppins text-[14px] mb-2">Size</h3>
            <div className="flex items-center gap-2">
              <button className="w-[30px] h-[30px] bg-[#FBEBB5] rounded-[5px]">L</button>
              <button className="w-[30px] h-[30px] bg-gray-100 rounded-[5px]">XL</button>
              <button className="w-[30px] h-[30px] bg-gray-100 rounded-[5px]">XS</button>
            </div>
          </div>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-[#9F9F9F] font-poppins text-[14px] mb-2">Color</h3>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 bg-purple-500 rounded-full"></button>
              <button className="w-8 h-8 bg-black rounded-full"></button>
              <button className="w-8 h-8 bg-[#CDBA7B] rounded-full"></button>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border border-gray-600 rounded-md">
              <button className="px-3 py-3 hover:bg-amber-100">-</button>
              <input type="text" value="1" className="w-10 text-center border-0 focus:outline-none" readOnly />
              <button className="px-3 py-3 hover:bg-amber-100">+</button>
            </div>
            <div>
              <Sheet>
                <SheetTrigger className="border border-black text-[#000000] text-sm hover:bg-amber-200 lg:px-8 lg:py-3 px-4 py-4 rounded-md">
                  Add to Cart
                </SheetTrigger>
                <SheetContent className=" w-80 md:w-96 lg:w-[500px] xl:w-[450px] p-7 bg-white shadow-lg">
                  <SheetHeader className="mb-8">
                    <div className="flex items-center justify-between py-2">
                      <SheetTitle className="text-[24px] font-semibold text-[#000000]">Shopping Cart</SheetTitle>
                      <CiLock className="w-6 h-6 text-gray-500" />
                    </div>
                    <hr className="my-2 border-gray-300" />
                  </SheetHeader>

                  <div className="flex items-start gap-7">
                    <Image src="/Group 146.png" alt="Asgaard Sofa" width={200} height={100} className="w-28 h-28 object-cover rounded-md" />
                    <div className="py-7">
                      <p className="font-normal text-[16px] text-[#000000] text-nowrap">Asgaard sofa 1 X</p>
                      <p className="flex items-center gap-3 mt-1 pl-[1px]">
                        <span className="text-[12px] font-medium text-[#B88E2F]">Rs. 250,000.00</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between items-center">
                      <p className="text-[16px] font-normal text-[#000000] ml-2">Subtotal</p>
                      <p className="text-[16px] font-semibold text-[#B88E2F] mr-10">Rs. 250,000.00</p>
                    </div>
                    <hr className="border-gray-300 my-6" />
                    <div className="flex flex-col sm:flex-row justify-between gap-6 ">

                       <Link href="/ViewCart">
                         <button className="w-full sm:w-32 py-3 text-black  border-2 border-black rounded-md hover:bg-amber-100">
                           View Cart
                         </button>
                         </Link>
                         <Link href="/CheckOut">
                         <button className="w-full sm:w-32 py-3 text-black rounded-md border-2 border-black hover:bg-amber-100">
                           Checkout
                         </button>
                         </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      
 
           {/* Meta Info */}
           <div className="mt-12">
            <div className="lg:grid lg:grid-cols-2 lg:pl-96  lg:mb-60 lg:gap-y-4 md:grid-cols-1 md:gap-x-4 grid-cols-1 gap-x-4">
              <p className="font-semibold text-[16px] lg: text-[#9F9F9F]">SKU:</p>
              <p className="text-[#9F9F9F] lg:text-[16px]"> SS001</p>
              <p className="font-semibold text-[#9F9F9F] lg:text-[16px] py-2">Category:</p>
              <p className="text-[#9F9F9F] lg:text-[16px]"> Sofas</p>
              <p className="font-semibold text-[#9F9F9F] lg:text-[16px] py-2">Tags:</p>
              <p className="text-[#9F9F9F] text-nowrap text-[16px]">Sofa, Chair, Home, Shop</p>
              {/* Share */}
    <p className="font-semibold text-[#9F9F9F] text-[16px] py-2">Share:</p>
    <div className="flex items-center">
      
      <div className="flex items-center gap-4 lg:pl-2 ">
        <FaFacebook className="text-[#000000] text-[19px]" />
        <FaLinkedin className="text-[#000000] text-[19px]" />
        <AiFillTwitterCircle className="text-[#000000] text-[19px]" />
        <AiFillHeart className="text-red-500 text-[19px]" />
      </div>
    </div>
    </div>
  
          
    
       
       {/* Line Above Footer */}
      <div className="w-full bg-[#FFFFFF] py-[15px] border-t border-gray-200 mt-[67px]"></div>

     


     {/* Description */}
     <div className="max-w-5xl mx-auto p-6">
        {/* Tabs Section */}
        <div className="mb-9">
  <ul className="sm:flex-col lg:flex-row md:flex space-x-6 justify-center items-center text-center">
    <li className="pb-2 px-4 text-[#000000] lg:text-[24px] md:text-[20px] text-[17px] font-bold cursor-pointer">Description</li>
    <li className="pb-2 pr-6 text-[#9F9F9F] lg:text-[24px] md:text-[20px] text-[17px] text-nowrap font-bold cursor-pointer">Additional Information</li>
    <li className="pb-2 pr-7 text-[#9F9F9F] lg:text-[24px] md:text-[20px] text-[17px] text-nowrap font-bold cursor-pointer">Reviews [5]</li>
  </ul>
</div>


        {/* Description Content */}
        <div>
          <p className="lg:mb-4  md:mb-4 text-sm mb-2 text-[#9F9F9F]">
            Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and
             sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="lg:mb-6 md:mb-6 text-sm mb-8 text-[#9F9F9F]">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest
             speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and 
             extended highs for a sound.
          </p>
        </div>
         {/* Image Section */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 md:grid md:grid-cols-2 md:gap-10 grid grid-cols-1 gap-10  ">
        <Image
          src="/Group 107.png"
          alt="Product 1"
          width={200}
          height={400}
          className="w-64 h-28 lg:w-full lg:h-72 md:w-60 md:h-44 rounded-lg "
        />
        <Image
          src="/Group 106.png"
          alt="Product 2"
          width={200}
          height={400}
          className="w-64 h-28 lg:w-full lg:h-72  md:w-60 md:h-44 rounded-lg"
        />
      </div>
      </div>
      <div className="w-full bg-[#FFFFFF] py-[15px] border-t border-gray-200 mt-[67px]"></div>
     

      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-center justify-center items-center font-poppins font-medium text-nowrap text-[#000000] mb-14 text-[24px] md:text-[30px]  lg:text-[36px]">Related Products</h2>
        <div className="md:grid md:grid-cols-2 grid-cols-1  lg:grid-cols-4 gap-10">
          {/* Product 1 */}
          <div className=" rounded-lg  ">
            <Image
              src="/Mask group (20).png"
              alt="Product 1"
              width={200}
              height={200}
              className="object-cover w-full h-48"
            />
            <h3 className="mt-7 text-[#000000] font-poppins lg:text-[20px] text-[14px] md:text-[19px] font-normal">Trenton modular sofa_3</h3>
            <p className="text-[#000000] text-md mt-9 font-medium lg:text-[24px] text-[20px] md:text-[20px]">Rs. 25,000.00</p>
            
          </div>

          {/* Product 2 */}
          <div className=" rounded-lg " >
            <Image
              src="/Mask group (21).png"
              alt="Product 2"
              width={200}
              height={200}
              className="object-cover w-full h-48 "
            />
            <h3 className="mt-7 text-[#000000] font-poppins lg:text-[20px] text-[14px] md:text-[19px]  font-normal">Granite dining table with dining chair</h3>
            <p className="text-[#000000]  text-md mt-1  lg:mt-5 font-medium lg:text-[24px] text-[20px] md:text-[20px]">Rs. 25,000.00</p>
        
          </div>

          {/* Product 3 */}
          <div className=" rounded-lg ">
            <Image
              src="/Mask group (22).png"
              alt="Product 3"
              width={200}
              height={200}
              className="object-cover w-full h-48 "
            />
            <h3 className="mt-7 text-[#000000] font-poppins lg:text-[20px] text-[14px] md:text-[19px] font-normal">Outdoor bar table and stool</h3>
            <p className="text-[#000000]  text-md mt-6 font-medium lg:text-[24px] text-[20px] md:text-[20px]">Rs. 25,000.00</p>
            
          </div>

          {/* Product 4 */}
          <div className="rounded-lg ">
            <Image
              src="/Mask group (23).png"
              alt="Product 4"
              width={200}
              height={200}
              className="object-cover w-full h-48"
            />
            <h3 className="mt-7 text-[#000000] font-poppins lg:text-[20px] text-[14px] md:text-[19px] font-normal">Plain console with teak mirror</h3>
            <p className="text-[#000000]  text-md mt-6 font-medium lg:text-[24px] text-[20px] md:text-[20px]">Rs. 25,000.00</p>
           
          </div>
        </div>
</div>

<div className="text-center py-16">
  <button className="text-center font-poppins text-[18px] font-medium text-[#000000] border-b-2 border-[#000000] pb-2">
    View More
  </button>
  </div>
  </div>
           
    </div>

  );
};

export default ProductDetail;
