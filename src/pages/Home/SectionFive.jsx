"use client"
 import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { CgArrowRight } from "react-icons/cg";
import { fetchBlogs  } from "@/api/blog"; 
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setAllBlogs } from "@/redux/slices/blogsSlice";
import Link from "next/link";


const SectionFive = () => {

  const allBlogsData = useSelector((state) => state.blogs.allBlogsData);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  useEffect(()=>{
    console.log(allBlogsData,'hjk');
    
  },[allBlogsData])
  return (
    <section className="w-full h-auto lg:min-h-screen  flex justify-center items-center py-5 lg:py-14">
        <div className='w-full h-full grid grid-rows-3 justify-between gap-5'>
            {allBlogsData.slice(0,3).map((data,index)=>(
                <div key={index} className=' w-full h-full grid grid-flow-row md:grid-flow-col gap-y-2 md:gap-y-0  md:grid-cols-[0.5fr_1fr_1fr] '>
                    <div className='h-[12rem] md:h-[15rem] w-full rounded-2xl overflow-hidden relative'>
                        <Image 
                            alt='blog image' 
                            src={data.imageURL} 
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className='w-full h-full object-cover object-center rounded-2xl'
                            priority={index === 0}
                        />
                    </div>
                    <div className='flex flex-col justify-between p-0 md:p-2 lg:p-4 gap-2.5 md:gap-0 md:border-t border-neutral-200'>
                        <h2 className='text-[1.125rem] xl:text-[1.875rem] 2xl:text-[2.25rem] font-semibold leading-[1.3]'>{data.title}</h2>
                        <p className='hidden lg:block text-tertiary text-base font-normal'>{formatDate(data.createdAt)}</p>
                    </div>
                    <div className='flex flex-col justify-between p-0 md:p-2 lg:p-4  gap-2.5 md:gap-0   md:border-t border-neutral-200'>
                        <p className='font-normal text-xs xl:text-[1rem] 2xl:text-[1.125rem] text-tertiary w-full leading-[1.6]'>
                        {data.description.length > 300 
                ? data.description.slice(0, 300).split(" ").slice(0,-1).join(" ") + " ..."
                : data.description}
                        </p>
                        <p className=' lg:hidden text-tertiary text-xs font-normal'>{formatDate(data.createdAt)}</p>
                        <Link href={`/blog/${data._id}`} className='flex justify-start'>
                            <div className='border border-neutral-200 bg-white hover:bg-neutral-200 transition-all duration-300 ease-in cursor-pointer  text-[#0C0E12] rounded-full flex gap-1 items-center px-4 py-1.5'>
                                <p className='text-xs xl:text-base'>Read More</p>
                                <CgArrowRight className='text-base xl:text-xl'/>
                            </div>
                        </Link>
                    </div> 
                </div> 
            ))}
        </div>
    </section>
  )
}

export default SectionFive