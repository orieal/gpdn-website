'use client';
import { blogsData } from "@/app/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgArrowRight } from "react-icons/cg";

const RelatedBlogs = ({ blogId, allBlogsData }) => {
  const [relatedBlogs,setRelatedBlogs] = useState(false)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  useEffect(()=>{
    const idMatchedBlog = allBlogsData?.find(data => data._id == blogId);
    if(idMatchedBlog){
      const category = idMatchedBlog.category;
      const categoryMatchedBlogs = allBlogsData.filter(data => data.category == category && data._id !== idMatchedBlog._id);
      setRelatedBlogs(categoryMatchedBlogs)
    }
  },[allBlogsData, blogId])

  useEffect(()=>{
    console.log(relatedBlogs,"'rb");
    
  },[relatedBlogs])

  return (

    !relatedBlogs ?

    (
      <section className="w-full h-auto flex justify-center items-center py-10">
      <div className="text-black text-4xl">Loading...</div> {/* You can add a loading state or skeleton screen */}
    </section>
    )
    

    :

    (
      relatedBlogs.length == 0 ?
      <div>
        <h1>no related blogs</h1>
      </div>
      :
      <section className="w-full h-auto  flex justify-center items-center ">
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="font-semibold text-[2.5rem]">Related Articles</h2>
        <div className="overflow-x-scroll">
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-10 grid-flow-row ">
            {relatedBlogs.slice(0, 3).map((data, index) => (
              <div
                key={index}
                className=" w-full h-auto  flex flex-col justify-between gap-5"
              >
                <div className="w-full h-[25vh] md:h-[40vh]  relative rounded-3xl">
                  <Image
                  fill
                    alt="blog image"
                    src={data.imageURL ? data.imageURL : '/placeholder-image.jpg'}
                    className="w-full aspect-square object-cover object-center rounded-3xl"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center w-full justify-between">
                    <a className="flex items-center justify-center font-poppins font-medium text-sm  text-primary">
                      {data.category}
                    </a>
                    <p className=" text-tertiary text-sm font-normal">
                      {formatDate(data.createdAt)}
                    </p>
                  </div>
                  <h2 className="text-xl font-semibold">{data.title}</h2>
                  <p className="font-normal text-sm  text-tertiary w-full">
                    {data.description.length > 120
                      ? data.description
                          .slice(0, 120)
                          .split(" ")
                          .slice(0, -1)
                          .join(" ") + " ..."
                      : data.description}
                  </p>
                  <Link href={`/blog/${data._id}`}>
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
        </div>
      </div>
    </section>
    )


    
  );
};

export default RelatedBlogs;
