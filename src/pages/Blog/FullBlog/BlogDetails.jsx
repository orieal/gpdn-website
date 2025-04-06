import { blogsData } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";

const BlogDetails = ({ blogId }) => {
  const currentBlog = blogsData[blogId];
  return (
    <section className="w-full h-auto  flex justify-center items-center">
      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col gap-8 md:gap-10 h-auto items-center">
        <div className="flex flex-col gap-5 w-full h-auto px-4">
          <div className="w-full flex justify-center">
          <div className="flex items-center gap-5 ">
            <a className="flex items-center justify-center font-poppins font-medium text-sm md:text-base  text-secondary border border-secondary rounded-3xl px-2.5 py-1">
              Cancer
            </a>
            <p className=" text-tertiary text-sm md:text-base font-normal">
              {currentBlog.date}
            </p>
          </div>
          </div>
          <h2 className="text-[1.8rem] md:text-[2.9rem] leading-tight font-semibold w-full text-center">{currentBlog.heading}</h2>
        </div>

        <div className="w-full h-[20rem] md:h-[33rem]">
            <Image
                alt="blog image"
                src={currentBlog.image}
                className="w-full h-full object-cover object-center rounded-2xl"
            />
        </div>

        <div className="w-full">
            <p className="font-normal text-sm md:text-base">{currentBlog.description}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
