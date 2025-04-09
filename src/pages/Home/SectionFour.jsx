import Image from "next/image";
import React from "react";
import careImage from "../../app/assets/HOMEPAGE/SectionFour/care-image.png";
import icon1 from "../../app/assets/HOMEPAGE/SectionFour/icon-1.png";
import icon2 from "../../app/assets/HOMEPAGE/SectionFour/icon-2.png";

const SectionFour = () => {
  return (
    <section className="w-full h-auto lg:h-screen flex justify-center items-center py-5 lg:py-14">
      <div className="grid lg:grid-cols-[1fr_0.6fr] grid-flow-row lg:grid-flow-col lg:gap-28">
        <div className="w-full h-full rounded-3xl hidden lg:block">
          <Image
            src={careImage}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-2 justify-between">
         <div className="flex flex-col gap-4 2xl:gap-8">
         <h1 className="text-[2rem] md:text-[2.5rem] xl:text-[4rem] text-secondary font-semibold leading-[1]">
            Empowering <br className="hidden md:block lg:hidden"/>Compassionate Care
          </h1>
          <p className="text-xs md:text-sm lg:text-base 2xl:text-xl text-tertiary w-full">
            Connecting healthcare professionals to enhance palliative care
            worldwide with knowledge, collaboration, and support. Connecting
            healthcare professionals to enhance{" "}
          </p>
         </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 border border-primary rounded-xl p-4">
              <div className="flex items-start justify-center">
                <div className="w-6 h-6 md:w-8 md:h-8">
                  <Image src={icon1} className="w-full h-full" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-base md:text-lg font-poppins font-medium text-[#252525]">Global Knowledge Exchange</h2>
                <p className="text-xs md:text-sm font-poppins font-normal text-tertiary">Access the latest advancements, research, and best practices to improve patient care.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border border-primary rounded-xl p-4">
              <div className="flex items-start justify-center">
                <div className="w-5 h-5 md:w-7 md:h-7">
                  <Image src={icon2} className="w-full h-full" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-base md:text-lg font-poppins font-medium text-[#252525]">Stronger Together</h2>
                <p className="text-xs md:text-sm font-poppins font-normal text-tertiary">Join a community of experts, share insights, and support one another in making a lasting impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
