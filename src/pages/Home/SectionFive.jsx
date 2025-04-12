"use client"
import { blogsData } from '@/app/assets/assets';
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { CgArrowRight } from "react-icons/cg";
import { fetchBlogs  } from "@/api/blog"; 


const SectionFive = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogData = async () => {
          try {
            const blogs = await fetchBlogs();
        
            if (blogs.data.data) {
              setBlogs(Array.isArray(blogs.data.data) ? blogs.data.data : []);
            }
          } catch (error) {
            console.error("Error fetching Blogs:", error);
          }
        };
        fetchBlogData();
      }, [setBlogs ]); 

  return (
    <section className="w-full h-auto lg:h-screen  flex justify-center items-center py-5 lg:py-14">
        <div className='w-full h-full grid grid-rows-3 justify-between gap-5'>
            {blogs.slice(0,3).map((data,index)=>(
                <div key={index} className=' w-full h-full grid grid-flow-row md:grid-flow-col gap-y-2 md:gap-y-0  md:grid-cols-[0.5fr_1fr_1fr] '>
                    <div className='h-[12rem]  md:h-full w-full rounded-2xl overflow-hidden'>
                        {/* <Image alt='blog image' src={data.imageURL} className='w-full h-full object-cover object-center rounded-2xl'/> */}
                        <Image
            src={data?.imageURL  } // fallback if data is undefined
            alt="Image"
            width={600} 
            height={400}
            className="w-full h-full object-cover object-center rounded-2xl"
            />
                    </div>
                    <div className='flex flex-col justify-between p-0 md:p-2 lg:p-4 gap-2.5 md:gap-0 md:border-t border-neutral-200'>
                        <h2 className='text-[1.125rem] xl:text-[1.875rem] 2xl:text-[2.25rem] font-semibold leading-[1.3]'>{data.title}</h2>
                        <p className='hidden lg:block text-tertiary text-base font-normal'>{data.content}</p>
                    </div>
                    <div className='flex flex-col justify-between p-0 md:p-2 lg:p-4  gap-2.5 md:gap-0   md:border-t border-neutral-200'>
                        <p className='font-normal text-xs xl:text-[1rem] 2xl:text-[1.125rem] text-tertiary w-full leading-[1.6]'>
                        {data.description.length > 300 
                ? data.description.slice(0, 300).split(" ").slice(0,-1).join(" ") + " ..."
                : data.description}
                        </p>
                        <p className=' lg:hidden text-tertiary text-xs font-normal'> {new Date(data.createdAt).toLocaleDateString('en-US', {
                         day: '2-digit',
                         month: 'short',
                         year: 'numeric',
                       })}</p>
                        <div className='flex justify-start'>
                            <a className='border border-neutral-200 bg-white hover:bg-neutral-200 transition-all duration-300 ease-in cursor-pointer  text-[#0C0E12] rounded-full flex gap-1 items-center px-4 py-1.5'>
                                <p className='text-xs xl:text-base'>Read More</p>
                                <CgArrowRight className='text-base xl:text-xl'/>
                            </a>
                        </div>
                    </div> 
                </div> 
            ))}
        </div>
    </section>
  )
}

export default SectionFive