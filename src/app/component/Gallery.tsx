import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div className='w-full h-full pt-[3px] gap-[30px] flex flex-row justify-center'>
      
      {/* Left Image and Heading for Granite Square Side Table */}
      <div className='flex flex-col items-center'>
        <Image src="/Granite square side table 1.png" alt="Granite Square Side Table" width={500} height={500} />
        <h3 className='font-poppins text-[30px] font-medium text-[#000000] mt-[-80px] mb-[-10px] w-[182px] h-[54px] '>Side Table</h3>
        <span className='font-poppins text-[20px] w-[125px] h-[36px] font-medium text-[#000000] underline cursor-pointer mb-[80px]'>
          View More
        </span>
      </div>

      {/* Right Image and Heading for Cloud Sofa Three Seater */}
      <div className='flex flex-col items-center'>
        <Image src="/Cloud sofa three seater + ottoman_3 1.png" alt="Cloud Sofa Three Seater" width={500} height={500} />
        <h3 className=' text-nowrap font-poppins text-[30px] w-[182px] h-[54px] font-medium text-[#000000] mt-[-57px] mb-[-10px]'>Cloud Sofa Three Seater</h3>
        <span className=' font-poppins text-[20px] w-[125px] h-[36px] font-medium text-[#000000] underline cursor-pointer'>
          View More
        </span>
      </div>
      
    </div>
  )
}

export default Gallery;
