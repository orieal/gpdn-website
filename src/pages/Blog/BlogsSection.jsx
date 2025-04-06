import { blogsData } from "@/app/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowRight } from "react-icons/cg";

const BlogsSection = () => {
  return (
    <section className="w-full h-auto  flex justify-center items-center py-10">
      <div className="w-full h-auto flex flex-col gap-20 md:gap-10 md:grid  md:grid-cols-2 lg:grid-cols-3  grid-flow-row ">
        {blogsData.slice(0, blogsData.length - 1).map((data, index) => (
          <div key={index} className=" w-full h-auto  flex flex-col justify-between gap-5">
            <div className="w-full h-[25vh] md:h-auto relative rounded-3xl">
              <Image
                alt="blog image"
                src={data.image}
                className="w-full h-full md:h-auto md:aspect-square object-cover object-center rounded-3xl"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center w-full justify-between">
                <a className="flex items-center justify-center font-poppins font-medium text-sm  text-primary">
                  Cancer
                </a>
                <p className=" text-tertiary text-sm font-normal">
                  {data.date}
                </p>
              </div>
              <h2 className="text-xl font-semibold">
                {data.heading}
              </h2>
              <p className="font-normal text-sm  text-tertiary w-full">
                {data.description.length > 120 
                ? data.description.slice(0, 120).split(" ").slice(0,-1).join(" ") + " ..."
                : data.description}
              </p>
             <Link href={`/blog/${index}`} >
             <div className="flex justify-start cursor-pointer">
                <div className="border border-neutral-200 text-[#0C0E12] rounded-full flex gap-1 items-center px-4 py-1.5">
                  <p className="text-xs xl:text-base">Read More</p>
                  <CgArrowRight className="text-base xl:text-xl" />
                </div>
              </div>
             </Link>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
