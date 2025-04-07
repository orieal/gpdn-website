import Image from 'next/image'
import React from 'react'
import aboutBanner from '../../app/assets/ABOUT/SectionTwo/about-banner.png'

const SectionTwo = () => {
  return (
    <section className="w-full h-auto  flex justify-center items-center py-10">
      <div className='w-full h-full flex flex-col gap-24'>
        <div className='w-full flex flex-col gap-10 md:gap-0 md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-5'>
          <div className='w-full h-full flex flex-col justify-between gap-8'>
            <h3 className='text-4xl md:text-5xl text-secondary font-semibold'>Why GPDN?</h3>
            <p className='text-tertiary font-normal text-base md:text-lg'>GPDN is more than just a network—it’s a global support system for palliative care physicians dedicated to improving patient care. Our platform fosters collaboration by connecting doctors across countries, enabling seamless referrals and interdisciplinary teamwork. Through expert case discussions, shared best practices, and continuous education, we empower physicians with the latest advancements in palliative medicine. Additionally, GPDN provides a strong peer support system, offering guidance, mentorship, and emotional support to help doctors navigate complex cases.  </p>
          </div>

          <div className='flex flex-col gap-5 lg:gap-0 lg:grid lg:grid-cols-[0.9fr_1fr] lg:gap-x-8'>
            <div className='h-[25vh] md:h-full w-full relative rounded-2xl'>
              <Image src={aboutBanner} alt='about banner' layout='fill' className='object-cover h-full w-full rounded-2xl'/>
            </div>
            <div className='flex flex-col gap-5 md:gap-0 justify-between'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                  <h6 className='font-poppins text-primary text-2xl md:text-3xl lg:text-4xl font-semibold w-[50%]'>468+</h6>
                  <p className='font-normal text-lg lg:text-xl text-[#525252] w-[50%]'>Dedicated <br /> palliative care</p>
                </div>
                <div className='flex items-center justify-between'>
                  <h6 className='font-poppins text-primary text-2xl md:text-3xl lg:text-4xl font-semibold w-[50%]'>80+</h6>
                  <p className='font-normal text-lg lg:text-xl text-[#525252] w-[50%]'>Countries <br /> represented</p>
                </div>
                <div className='flex items-center justify-between'>
                  <h6 className='font-poppins text-primary text-2xl md:text-3xl lg:text-4xl font-semibold w-[50%]'>1000+</h6>
                  <p className='font-normal text-lg lg:text-xl text-[#525252] w-[50%]'>Case <br />discussions</p>
                </div>
              </div>
              <p className='font-normal text-lg text-tertiary'>Connecting palliative care doctors worldwide to enhance collaboration, knowledge-sharing.</p>
            </div>
          </div>
        </div>

        <div className='w-full h-auto md:py-10 flex flex-col gap-20'>
          <div className='flex flex-col gap-3 md:gap-0 md:grid md:grid-cols-2'>
            <div className='w-full h-full flex items-start justify-start'>
              <h3 className='text-4xl md:text-5xl font-semibold text-secondary'>Our Mission</h3>
            </div>
            <p className='font-normal text-base md:text-lg text-[#8E8E8E]'>To create a global network of palliative care physicians dedicated to collaboration, knowledge-sharing, and professional support. We aim to enhance patient care through seamless transitions, interdisciplinary teamwork, and ongoing education, empowering doctors to provide compassionate, patient-centered care. <br /> <br />Our mission is to bridge gaps in palliative care by fostering a supportive community where physicians can exchange expertise, access the latest medical advancements, and consult on complex cases. By promoting education, mentorship, and international cooperation, we strive to improve the quality of life for patients and their families, ensuring that compassionate and holistic care is accessible worldwide.</p>
          </div>
          <div className='flex flex-col gap-3 md:gap-0 md:grid md:grid-cols-2'>
            <div className='w-full h-full flex items-start justify-start'>
              <h3 className='text-4xl md:text-5xl font-semibold text-secondary'>Our Vision</h3>
            </div>
            <p className='font-normal text-base md:text-lg text-[#8E8E8E]'>To create a global network of palliative care physicians dedicated to collaboration, knowledge-sharing, and professional support. We aim to enhance patient care through seamless transitions, interdisciplinary teamwork, and ongoing education, empowering doctors to provide compassionate, patient-centered care.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default SectionTwo