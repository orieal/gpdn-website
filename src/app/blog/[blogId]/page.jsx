import Navbar from "@/components/Navbar";
import BlogDetails from "@/pages/Blog/FullBlog/BlogDetails";
import RelatedBlogs from "@/pages/Blog/FullBlog/RelatedBlogs";
import Footer from "@/pages/Home/Footer";
import React from "react";

const page = async ({ params }) => {
  const { blogId } = await params;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="md:p-5 px-7 md:px-16 lg:px-20 2xl:px-40">
        <Navbar />
      </div>
      <BlogDetails blogId={blogId} />
      {/* <RelatedBlogs blogId={blogId} /> */}
      <Footer />
    </main>
  );
};

export default page;
