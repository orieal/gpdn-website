import Image from "next/image";
import React from "react";
import slideImage1 from "../../app/assets/HOMEPAGE/SectionOne/slide-image-1.png";
import doctorImage1 from "../../app/assets/HOMEPAGE/SectionOne/doctor-image-1.png";
import doctorImage2 from "../../app/assets/HOMEPAGE/SectionOne/doctor-image-2.png";
import doctorImage3 from "../../app/assets/HOMEPAGE/SectionOne/doctor-image-3.png";
import connectionsImage from "../../app/assets/HOMEPAGE/SectionOne/connection.png";
import { PiArrowUpRightLight } from "react-icons/pi";

const SectionOne = () => {
  return (
    <div className="w-full h-full flex justify-center items-center py-5 md:py-10">
      <div className="w-full h-full flex flex-col md:grid md:grid-cols-[75%_25%]">
        {/* -----Left Side----- */}
        <div className=" w-full h-full flex flex-col-reverse md:grid md:grid-cols-[50%_50%]">
          <div className="relative w-full h-full">
            <div className="md:absolute flex md:items-center top-0 left-0 w-full h-full">
              <div className="flex flex-col md:justify-between">
                <h1 className="text-4xl md:text-[6.6vw] font-light leading-[1.1] w-full md:w-[125%] text-[#1E1E1E]">
                  Global Care for a{" "}
                  <span className="font-medium">Brighter Tomorrow</span>
                </h1>
                <div className="flex flex-col w-full gap-4">
                  <p className="font-normal">
                    Our global network of dedicated palliative care doctors
                    fosters collaboration, knowledge-sharing, and peer support
                    to enhance patient care across borders.
                  </p>
                  <div>
                    <button className="bg-primary  text-white text-base font-poppins py-3.5 px-5 rounded-md ">
                      Join the Network
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---Desktop Slider---- */}
          <div className="hidden md:flex w-full h-full justify-center relative ">
            <svg
              preserveAspectRatio="none"
              viewBox="0 0 505 680"
              className="absolute w-full h-full object-cover"
            >
              <defs>
                <clipPath id="custom-shape">
                  <path d="M0 30C0 13.4315 13.4315 0 30 0H475C491.569 0 505 13.4315 505 30V650C505 666.569 491.569 680 475 680H30C13.4314 680 0 666.569 0 650V358.247C0 341.389 13.8853 327.841 30.7375 328.256L91.2625 329.744C108.115 330.159 122 316.611 122 299.753V111.5C122 94.9315 108.569 81.5 92 81.5H30C13.4315 81.5 0 68.0685 0 51.5V30Z" />
                </clipPath>
              </defs>
              <foreignObject
                clipPath="url(#custom-shape)"
                className="w-full h-full"
              >
                <div className="w-full h-full ">
                  <Image
                    src={slideImage1}
                    alt="Caring"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </foreignObject>
            </svg>
          </div>

          {/* ---Mobile Slider---  */}
          <div className=" md:hidden w-full h-[70vh] justify-center relative ">
            <div className="w-full h-full rounded-2xl">
              <Image
                src={slideImage1}
                alt="Caring"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* -----Right Side----- */}
        <div className="w-full md:h-full md:grid md:grid-rows-[40%_60%] md:pl-4">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col justify-around h-full">
              <div className="flex flex-col">
                <h2 className="text-secondary text-base font-bold">
                  468{" "}
                  <span className="text-[#252525] font-medium uppercase">
                    Expert Doctors
                  </span>
                </h2>
                <h2 className="text-secondary text-base font-bold">
                  83+{" "}
                  <span className="text-[#252525] font-medium uppercase">
                    Countries
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                <div className=" h-full flex justify-center items-center">
                  <Image
                    alt="Doctor profile image"
                    className="rounded-full w-full h-full"
                    src={doctorImage1}
                  />
                </div>
                <div className="h-full flex justify-center items-center">
                  <Image
                    alt="Doctor profile image"
                    className="rounded-full w-full h-full"
                    src={doctorImage2}
                  />
                </div>
                <div className="h-full flex justify-center items-center">
                  <Image
                    alt="Doctor profile image"
                    className="rounded-full w-full h-full"
                    src={doctorImage3}
                  />
                </div>
                <div className="rounded-full border border-[#CACACA] w-full h-full flex justify-center justify-self-end items-center">
                  <PiArrowUpRightLight className="text-[#CACACA] text-2xl" />
                </div>
              </div>

              <p className="font-normal text-sm w-full">
                Our dedicated network of palliative care doctors collaborates
                globally to enhance patient care, share expertise, and support
                one another in complex cases.
              </p>
            </div>
          </div>

          <div className="hidden md:block h-full w-full relative rounded-[2rem]">
            <Image
              layout="fill"
              objectFit="cover"
              className="w-full rounded-[2rem]"
              src={connectionsImage}
              alt="connections"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
