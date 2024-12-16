import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CiLock } from "react-icons/ci"; 
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

export const Header = () => {
  return (
    
    <div className="border-2 pb-4 border-[#d6c9c9e8] bg-[#FBEBB5]">
      {/* Header Container */}
      <div className="flex flex-wrap items-center justify-between w-full max-w-[1170px] mx-auto mt-[19px] px-4">

        {/* Centered Navigation Items */}
        <ul className="flex flex-wrap items-center gap-[50px] mx-auto pl-56">
          <li className="font-poppins font-normal text-[16px]">
            <Link href="/">Home</Link>
          </li>
          <li className="font-poppins font-normal text-[16px]">
            <Link href="/Shop">Shop</Link>
          </li>
          <li className="font-poppins font-normal text-[16px]">
            <Link href="/Blog">Blog</Link>
          </li>
          <li className="font-poppins font-normal text-[16px]">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 sm:gap-10 mt-4 sm:mt-0">
          <Link href="/Account">
          <CgProfile className="h-[24px] w-[24px]" />
          </Link>
          <CiSearch className="h-[24px] w-[24px]" />
          <CiHeart className="h-[24px] w-[24px]" />
          
      <div>
                  <Sheet>
                   <SheetTrigger className="pt-2">
                   <MdOutlineShoppingCart className="h-[24px] w-[24px]" />
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
  );
};

export default Header;
