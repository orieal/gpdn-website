import Image from 'next/image'
import React from 'react'
import bannerImg1 from '../../app/assets/ABOUT/SectionOne/banner-1.png'
import bannerImg2 from '../../app/assets/ABOUT/SectionOne/banner-2.png'

const SectionOne = () => {
  return (
    <section className="w-full h-auto lg:h-full flex justify-center items-center pt-10 pb-1">
        <div className='h-full w-full flex flex-col items-center gap-5'>
            <h1 className='font-medium text-[4rem] xl:text-[5rem] 2xl:text-[6.2rem] leading-tight'>Connecting Palliative Care Physicians for Better Patient </h1>
            <div className='h-full w-full  grid grid-cols-[1fr_0.6fr] gap-x-5'>
                <div className='h-full w-full relative rounded-2xl'>
                    <Image layout='fill'  src={bannerImg1} className='w-full object-cover rounded-2xl' alt='banner image'/>
                </div>
                <div className='grid grid-rows-[0.4fr_1fr] gap-y-5'>
                   <div className='w-full h-full pt-1'>
                   <h5 className='font-normal text-lg text-tertiary w-[90%]'>
                    At GPDN, we unite palliative care physicians worldwide to enhance patient care through collaboration, knowledge-sharing, and professional support.
                    </h5>
                   </div>
                   <div className='h-full w-full relative rounded-2xl'>
                    <Image  layout='fill'  src={bannerImg2} className='w-full object-cover rounded-2xl' alt='banner image'/>
                   </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default SectionOne