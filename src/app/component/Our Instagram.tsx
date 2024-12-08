import React from 'react'
import Image from 'next/image';

const OurInstagram = () => {
  return (
    <div className='relative w-full h-[450px] md:h-[550px] bg-[#FAF4F4]'>
      {/* Background Image */}
      <Image 
        src="/Rectangle 17.png" 
        alt="background" 
        layout="fill" // Makes the image fill the container
        objectFit="cover" // Ensures the image covers the entire div
      />

      {/* Text and Button container */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-[#000000] z-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Instagram</h1>
        <h3 className="text-lg md:text-2xl mb-6">Follow our store on Instagram</h3>
        <button className="px-6 py-3 md:px-8 md:py-4 border-2 border-[#FAF4F4] bg-gray-200 rounded-[50px] text-[#000000] text-lg font-semibold transition duration-300 hover:bg-gray-300">
          Follow Us
        </button>
      </div>
    </div>
  )
}

export default OurInstagram;
