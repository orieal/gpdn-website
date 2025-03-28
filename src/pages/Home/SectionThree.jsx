import React from 'react'
import videoImage from '../../app/assets/HOMEPAGE/SectionThree/video-image.png'
import Image from 'next/image'

const SectionThree = () => {
  return (
    <section className="w-full h-auto lg:h-screen flex justify-center items-center py-5 lg:py-14">
        <div className='flex flex-col gap-3 lg:gap-10 lg:items-center'>
            <h1 className='font-semibold text-[2rem] md:text-[3rem] lg:text-6xl text-secondary lg:text-center'>Bringing Smiles,<br className='hidden md:block lg:hidden'/> Building Connections</h1>
            <p className='text-[#525252] text-sm md:text-base lg:text-center'>Experience the power of a caring community dedicated to well-being, support, and joy.</p>
            <div className='rounded-3xl h-full w-full'>
               <Image src={videoImage} className='w-full h-full object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default SectionThree