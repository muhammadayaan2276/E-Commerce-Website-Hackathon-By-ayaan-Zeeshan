import Link from "next/link";
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
        <ul className="flex flex-wrap items-center gap-[30px] mx-auto sm:gap-[50px] sm:px-0">
          <li className="font-poppins font-normal text-[16px]">
            <Link href="/">Home</Link>
          </li>
          <li className="font-poppins font-normal text-[16px]">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="font-poppins font-normal text-[16px]">
            <Link href="/">About</Link>
          </li>
          <li className="font-poppins font-normal text-[16px]">
            <Link href="/">Contact</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 sm:gap-10 mt-4 sm:mt-0">
          <CgProfile className="h-[24px] w-[24px]" />
          <CiSearch className="h-[24px] w-[24px]" />
          <CiHeart className="h-[24px] w-[24px]" />
          <MdOutlineShoppingCart className="h-[24px] w-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
