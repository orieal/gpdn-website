import React from "react";
import teamImage from '../../app/assets/HOMEPAGE/SectionTwo/team.png'
import Image from "next/image";
import { excellenceData } from "@/app/assets/HOMEPAGE/assets";

const SectionTwo = () => {
  return (
    <div className="w-full h-auto lg:h-screen flex justify-center items-center py-5 lg:py-14">
      <div className="w-full h-auto lg:h-full flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:gap-28">
        {/* ---Left Side---  */}
        <div className="flex flex-col gap-5 w-full h-full">
          <h1 className="text-secondary font-semibold text-[2rem] md:text-[4rem] leading-tight">
            Why Join GPDN? A Global Network of Excellence
          </h1>
          <p className="text-[#0C0E12] font-normal text-sm md:text-xl">Discover the key benefits of being part of the Global Palliative Doctors Network, where collaboration, learning, and support come together to advance palliative care worldwide.</p>
          <div className="w-full rounded-3xl ">
            <Image src={teamImage} alt="team"   className="rounded-3xl object-cover"/>
          </div>
        </div>

        {/* --Right Side--  */}
        <div className="grid grid-flow-row md:auto-rows-auto md:grid-cols-2 gap-10 md:gap-12">
            {excellenceData.map((item,index)=>(
                <div key={index} className="flex flex-col gap-2">
                    <div >
                        <div className="w-14 h-14">
                            <Image src={item.icon} alt="icon" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <h2 className="text-[#0C0E12] font-semibold text-xl">{item.heading}</h2>
                    <p className="text-[#8E8E8E] text-sm font-normal">{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
