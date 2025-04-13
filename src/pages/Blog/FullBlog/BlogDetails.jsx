"use client";
import { blogsData } from "@/app/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import blogImage from '../../../app/assets/HOMEPAGE/SectionFive/blog-image-4.png'
import { useSelector } from "react-redux";

const BlogDetails = ({ blogId }) => {
  
  const allBlogsData = useSelector((state) => state.blogs.allBlogsData);
  const [currentBlog,setCurrentBlog] = useState(false)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  useEffect(()=>{
    const matchedBlog = allBlogsData.find(data => data._id == blogId);
  setCurrentBlog(matchedBlog);
  },[allBlogsData])

  // const currentBlog = {
  //     heading: "Cancer Cases in Indonesia Predicted to Increase 70% by 2050",
  //     date: "3 Dec 2022",
  //     description:
  //       "COVID-19 vaccines have proven to be highly effective in not only preventing infections but also in significantly alleviating the symptoms associated with the virus. These vaccines work by training the immune system to recognize and combat the virus, thereby reducing the severity of illness in those who do contract.",
  //     image: blogImage,
  //   }
  return (

    !currentBlog ?

    (
      <section className="w-full h-auto flex justify-center items-center py-10">
      <div className="text-black text-4xl">Loading...</div> {/* You can add a loading state or skeleton screen */}
    </section>
    )
    

    :

    (
      <section className="w-full h-auto  flex justify-center items-center">
      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col gap-8 md:gap-10 h-auto items-center">
        <div className="flex flex-col gap-5 w-full h-auto px-4">
          <div className="w-full flex justify-center">
          <div className="flex items-center gap-5 ">
            <a className="flex items-center justify-center font-poppins font-medium text-sm md:text-base  text-secondary border border-secondary rounded-3xl px-2.5 py-1">
              {currentBlog.category}
            </a>
            <p className=" text-tertiary text-sm md:text-base font-normal">
              {formatDate(currentBlog.createdAt)}
            </p>
          </div>
          </div>
          <h2 className="text-[1.8rem] md:text-[2.9rem] leading-tight font-semibold w-full text-center">{currentBlog.title}</h2>
        </div>

        <div className="w-full h-[20rem] md:h-[33rem] relative">
            <Image
            fill
                alt="blog image"
                src={currentBlog.imageURL ? currentBlog.imageURL : '/placeholder-image.jpg'}
                className="w-full h-full object-cover object-center rounded-2xl"
            />
        </div>

        <div className="w-full">
            <p className="font-normal text-sm md:text-base">{currentBlog.description}</p>
        </div>
      </div>
    </section>
    )


    
  );
};

export default BlogDetails;
