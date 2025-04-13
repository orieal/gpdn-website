'use client';
import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../../api/blog";
import { blogsData } from "@/app/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

const BlogsSection = ( {blogs}) => {
  useEffect(() => {

  }, [blogs]);  
  return (

      !blogs || !Array.isArray(blogs)  ?

      (
        <section className="w-full h-auto flex justify-center items-center py-10">
        <div className="text-black text-4xl">Loading...</div> {/* You can add a loading state or skeleton screen */}
      </section>
      )
      

      :

      (
        <section className="w-full h-auto  flex justify-center items-center py-10">
      <div className="w-full h-auto flex flex-col gap-20 md:gap-10 md:grid  md:grid-cols-2 lg:grid-cols-3  grid-flow-row ">
        {blogs.map((data, index) => (
          <div key={index} className=" w-full h-auto  flex flex-col justify-between gap-5">
            <div className="w-full h-[25vh] md:h-[40vh] relative rounded-3xl">
                <Image
                    src={data.imageURL ? data.imageURL : '/placeholder-image.jpg'}
                    alt={`Blog image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-3xl"
                    priority={index < 2}
                />
            </div>
            <div className="flex flex-col gap-6">
             <div className="flex flex-col gap-1.5">
             <div className="flex items-center w-full justify-between">
                <a className="flex items-center justify-center font-poppins font-medium text-sm  text-primary">
                  {data.category}
                </a>
                
              </div>
              <h2 className="text-xl lg:h-[4rem] font-semibold text-black">
                {data.title}
              </h2>
              <p className="font-normal lg:h-[4rem] text-sm  text-tertiary w-full">
               {data.description && data.description.length > 120 
               ? data.description.slice(0, 120).split(" ").slice(0, -1).join(" ") + " ..."
               : data.description
               }
              </p>
             </div>
             <Link href={`/blog/${index}`} >
             <div className="flex justify-start cursor-pointer">
                <div className="border border-neutral-200 bg-white hover:bg-neutral-200 transition-all duration-300 ease-in cursor-pointer text-[#0C0E12] rounded-full flex gap-1 items-center px-4 py-1.5">
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
      )
      

    
  );
};

export default BlogsSection;
