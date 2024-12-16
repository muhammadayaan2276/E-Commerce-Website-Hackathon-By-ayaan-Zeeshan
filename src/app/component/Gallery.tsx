import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div className='w-full h-full pt-[3px] gap-[30px] flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center'>
      
      {/* Left Image and Heading for Granite Square Side Table */}
      <div className='flex flex-col items-center'>
        <Image 
          src="/Granite square side table 1.png" 
          alt="Granite Square Side Table" 
          width={500} 
          height={500} 
          className="object-cover"
        />
        <h3 className='font-poppins text-[30px] font-medium text-[#000000] mt-[-80px] mb-[-10px] w-[182px] h-[54px] text-center'>
          Side Table
        </h3>
        <span className='font-poppins text-[20px] w-[125px] h-[36px] font-medium text-[#000000] underline cursor-pointer mb-[80px] text-center'>
          View More
        </span>
      </div>

      {/* Right Image and Heading for Cloud Sofa Three Seater */}
      <div className='flex flex-col items-center'>
        <Image 
          src="/Cloud sofa three seater + ottoman_3 1.png" 
          alt="Cloud Sofa Three Seater" 
          width={500} 
          height={500} 
          className="object-cover mr-20"
        />
        <h3 className='font-poppins text-[30px] w-[182px] text-nowrap h-[54px] font-medium text-[#000000] mt-[-57px] mb-[-10px] text-center'>
          Cloud Sofa Three Seater
        </h3>
        <span className='font-poppins text-[20px] w-[125px] h-[36px] font-medium text-[#000000] underline cursor-pointer text-center'>
          View More
        </span>
      </div>
      
    </div>
  )
}

export default Gallery;
