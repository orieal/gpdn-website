import React from "react";
import teamImage from '../../app/assets/HOMEPAGE/SectionTwo/team.png'
import Image from "next/image";
import { excellenceData } from "@/app/assets/assets";

const SectionTwo = () => {
  return (
    <section className="w-full h-auto lg:h-screen flex justify-center items-center py-5 lg:py-14">
      <div className="w-full h-auto lg:h-full flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:gap-28">
        {/* ---Left Side---  */}
        <div className="flex flex-col justify-between gap-3 lg:gap-0 w-full h-full">
          <h1 className="text-secondary font-semibold text-[2rem] md:text-[2.5rem] xl:text-[4rem] leading-tight">
            Why Join GPDN? A Global Network of Excellence
          </h1>
          <p className="text-[#0C0E12] font-normal text-sm md:text-xl 2xl:text-4xl">Discover the key benefits of being part of the Global Palliative Doctors Network, where collaboration, learning, and support come together to advance palliative care worldwide.</p>
          <div className="w-full rounded-3xl ">
            <Image src={teamImage} alt="team"   className="rounded-3xl object-cover"/>
          </div>
        </div>

        {/* --Right Side--  */}
        <div className="h-full w-full grid grid-flow-row  md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-5">
            {excellenceData.map((item,index)=>(
                <div key={index} className="flex flex-col justify-start">
                    <div >
                        <div className="w-14 2xl:w-20 h-14 2xl:h-20">
                            <Image src={item.icon} alt="icon" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <h2 className="text-[#0C0E12] font-semibold text-xl md:text-lg xl:text-xl 2xl:text-2xl">{item.heading}</h2>
                    <p className="text-tertiary text-sm md:text-xs xl:text-sm 2xl:text-lg font-normal">{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
