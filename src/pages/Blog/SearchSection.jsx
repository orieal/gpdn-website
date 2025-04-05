import { blogsData } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";
import { CgArrowRight } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";

const SearchSection = () => {
  const topics = ["All","Diabetes", "Cancer", "Virus", "Healthy Food", "Lifestyle"];

  const latestBlogData = blogsData[blogsData.length - 1];

  return (
    <section className="w-full h-full  flex justify-center items-center">
      <div className="w-full h-full flex flex-col items-center justify-around">
        {/* ---SEARCH SECT---- */}
        <div className="w-full flex items-center justify-center h-[40vh]">
          <div className="flex flex-col items-center gap-3 lg:gap-4 xl:gap-8 w-full lg:w-[40%]">
            <h2 className="text-secondary font-semibold text-[2rem] md:text-[2.5rem] lg:text-5xl leading-none">
              GPDN Blog
            </h2>
            <p className="font-medium text-sm lg:text-base leading-normal text-[#525252] text-center">
              Read updates on GPDN Blog , corporate initiatives, and
              partnerships to get insight into the world’s work marketplace.
            </p>
            <div className="flex items-center w-full border-2 border-secondary rounded-3xl py-2.5 px-2 cursor-text">
              <label
                className="flex justify-center items-center px-7 cursor-text"
                htmlFor="searchText"
              >
                <LuSearch className="text-tertiary text-xl" />
              </label>
              <input
                className="outline-none w-full text-base placeholder:text-base placeholder:text-tertiary text-tertiary placeholder:font-poppins font-poppins placeholder:font-normal font-normal"
                type="text"
                name=""
                id="searchText"
                placeholder="search..."
              />
            </div>
            <div className="flex w-full items-center justify-between">
              {topics.map((topic, index) => (
                <a
                  key={index}
                  className="flex items-center justify-center font-poppins font-medium text-xs lg:text-sm text-nowrap text-[#797979]"
                >
                  {topic}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---FIRST BLOG SECT---- */}
        <div className="w-full flex flex-col justify-around h-[40vh]">
          <div className="w-full h-full">
            <div className=" w-full h-full grid grid-flow-row md:grid-flow-col gap-y-2 md:gap-y-0 gap-x-6  md:grid-cols-[0.8fr_1fr] ">
              <div className="h-full w-full flex justify-center items-center  rounded-2xl relative">
                <Image
                  alt="blog image"
                  src={latestBlogData.image}
                  layout="fill"
                  className="h-full w-full object-cover object-center rounded-2xl"
                />
              </div>
              <div className="flex flex-col  h-full">
                <div className="flex flex-col lg:w-[80%]  h-full p-0 md:p-2 lg:p-4 gap-3">
                <div className="flex items-center gap-3">
                    <a className="flex items-center justify-center font-poppins font-medium text-sm  text-primary">
                      Cancer
                    </a>
                    <p className=" text-tertiary text-base font-normal">
                      {latestBlogData.date}
                    </p>
                  </div>
                  <h2 className="text-lg xl:text-3xl 2xl:text-4xl font-semibold">
                    {latestBlogData.heading}
                  </h2>
                  <p className="font-normal text-xs xl:text-base 2xl:text-lg text-tertiary w-full">
                    {latestBlogData.description}
                  </p>
                 
                  <div className="flex justify-start">
                    <a className="border border-neutral-200 text-[#0C0E12] rounded-full flex gap-1 items-center px-4 py-1.5">
                      <p className="text-xs xl:text-base">Read More</p>
                      <CgArrowRight className="text-base xl:text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
