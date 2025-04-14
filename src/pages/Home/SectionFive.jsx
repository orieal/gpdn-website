"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { CgArrowRight } from "react-icons/cg";
import Link from "next/link";
import blogRoutes from "@/services/endPoints/blogEndpoints";
import Api from "@/services/axios";  // Add this import

const SectionFive = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await Api.get(blogRoutes.FetchNewsAndBlogs);
        // Add debugging log to see the response structure
        console.log('API Response:', response);
        
        // Check if data is in response.data.blogs or similar structure
        const blogsData = response.data.blogs || response.data.data || response.data;
        setBlogs(Array.isArray(blogsData) ? blogsData.slice(-3) : []);
      } catch (error) {
        console.error("Error fetching blogs:", {
          message: error.message,
          endpoint: blogRoutes.FetchNewsAndBlogs,
          timestamp: new Date().toISOString(),
          response: error.response?.data // Log the error response data
        });
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return ''; // Return empty string for invalid dates
      
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'short' });
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    } catch (error) {
      console.error("Date formatting error:", error);
      return '';
    }
  };

  const SkeletonBlog = () => (
    <div className='w-full h-full grid grid-flow-row md:grid-flow-col gap-y-2 md:gap-y-0 md:grid-cols-[0.5fr_1fr_1fr]'>
      {/* Image placeholder */}
      <div className='h-48 md:h-60 w-full rounded-2xl overflow-hidden relative bg-gray-200 animate-pulse'></div>
      
      {/* Title and date section */}
      <div className='flex flex-col justify-between p-0 md:p-2 lg:p-4 gap-2.5 md:gap-0 md:border-t border-neutral-200'>
        {/* Title placeholder - taller and multiple lines */}
        <div className='space-y-2'>
          <div className='h-6 bg-gray-200 rounded animate-pulse w-full'></div>
          <div className='h-6 bg-gray-200 rounded animate-pulse w-4/5'></div>
        </div>
        {/* Date placeholder - hidden on mobile as in the real component */}
        <div className='hidden lg:block h-4 w-24 bg-gray-200 rounded animate-pulse mt-2'></div>
      </div>
      
      {/* Description and CTA section */}
      <div className='flex flex-col justify-between p-0 md:p-2 lg:p-4 gap-2.5 md:gap-0 md:border-t border-neutral-200'>
        {/* Description placeholder - multiple lines */}
        <div className='space-y-2'>
          <div className='h-4 bg-gray-200 rounded animate-pulse w-full'></div>
          <div className='h-4 bg-gray-200 rounded animate-pulse w-full'></div>
          <div className='h-4 bg-gray-200 rounded animate-pulse w-3/4'></div>
        </div>
        
        {/* Mobile date placeholder */}
        <div className='lg:hidden h-4 w-24 bg-gray-200 rounded animate-pulse my-2'></div>
        
        {/* Read More button placeholder */}
        <div className='h-8 w-28 bg-gray-200 rounded-full animate-pulse mt-2'></div>
      </div>
    </div>
  );

  return (
    <section className="w-full h-auto lg:min-h-screen flex justify-center items-center py-5 lg:py-14">
      <div className='w-full h-full grid grid-rows-[auto_auto_auto] justify-between gap-5'>
        {isLoading ? (
          <>
            <SkeletonBlog />
            <SkeletonBlog />
            <SkeletonBlog />
          </>
        ) : blogs && blogs.length > 0 ? (
          blogs.map((data, index) => (
            <div key={data._id || index} className='w-full h-full grid grid-flow-row md:grid-flow-col gap-y-2 md:gap-y-0 md:grid-cols-[0.5fr_1fr_1fr]'>
              <div className='h-48 md:h-60 w-full rounded-2xl overflow-hidden relative'>
                {data.imageURL && (
                  <Image
                    alt={data.title || 'Blog image'}
                    src={data.imageURL}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='w-full h-full object-cover object-center rounded-2xl'
                    priority={index === 0}
                  />
                )}
              </div>
              <div className='flex flex-col justify-between p-0 md:p-2 lg:p-4 gap-2.5 md:gap-0 md:border-t border-neutral-200'>
                <h2 className='text-lg xl:text-3xl 2xl:text-4xl font-semibold leading-snug'>{data.title || 'Untitled Blog'}</h2>
                <p className='hidden lg:block text-tertiary text-base font-normal'>{formatDate(data.createdAt)}</p>
              </div>
              <div className='flex flex-col justify-between p-0 md:p-2 lg:p-4 gap-2.5 md:gap-0 md:border-t border-neutral-200'>
                <p className='font-normal text-xs xl:text-base 2xl:text-lg text-tertiary w-full leading-relaxed'>
                  {data.description && data.description.length > 300
                    ? data.description.slice(0, 300).split(" ").slice(0, -1).join(" ") + " ..."
                    : data.description || 'No description available'}
                </p>
                <p className='lg:hidden text-tertiary text-xs font-normal'>{formatDate(data.createdAt)}</p>
                <Link href={`/blog/${data._id}`} className='flex justify-start'>
                  <div className='border border-neutral-200 bg-white hover:bg-neutral-200 transition-all duration-300 ease-in cursor-pointer text-[#0C0E12] rounded-full flex gap-1 items-center px-4 py-1.5'>
                    <p className='text-xs xl:text-base'>Read More</p>
                    <CgArrowRight className='text-base xl:text-xl' />
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <p>No blogs available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionFive;