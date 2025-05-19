"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from 'antd';
import logo from '../../app/assets/registation/logo.png'
import { IoSearchOutline } from 'react-icons/io5';
import { MdDashboard } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";
import { PiBuildings } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import azeem from '../../app/assets/registation/Frame.png'
import Link from 'next/link';

const NewsAndBlogs = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showLocationMenu, setShowLocationMenu] = useState(false);

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
    setShowLocationMenu(false);
  };
  
  const handleLocationClick = () => {
    setShowLocationMenu(true);
    setShowFilter(false);
  };
  
  const handleBackClick = () => {
    setShowLocationMenu(false);
    setShowFilter(true);
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest('.filter-container')) {
      setShowFilter(false);
      setShowLocationMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sidebarMenus = [
    {menu : 'Forum', icon : <MdDashboard/>, link: '/forum'},
    {menu : 'Resource Library', icon : <FaRegFolder/>, link: '/resource-library'}, 
    {menu : 'Members', icon : <TbUsers/>, link: '/members'}, 
    {menu : 'Palliative Units', icon : <PiBuildings/>, link: '/palliative-units'}, 
    {menu : 'News & Blogs', icon : <IoNewspaperOutline/>, link: '/news-blogs'}, 
    {menu : 'Settings', icon : <MdOutlineSettings/>, link: '/settings'}
  ];

  const blogPosts = [
    {
      id: 1,
      author: {
        name: 'Mai Sakurajima Senpai',
        avatar: '/path/to/avatar.jpg',
        date: '3 Dec 2022'
      },
      image: '/path/to/blog-image.jpg',
      category: 'Category',
      title: 'Blog post title',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U...',
      likes: 12,
      comments: 25
    },
    {
      id: 2,
      author: {
        name: 'Mai Sakurajima Senpai',
        avatar: '/path/to/avatar.jpg',
        date: '3 Dec 2022'
      },
      image: '/path/to/blog-image.jpg',
      category: 'Category',
      title: 'Blog post title',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U...',
      likes: 12,
      comments: 25
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 fixed h-screen overflow-y-auto">
        <div className="p-5">
          <Image alt='' src={logo} width={100}/>
        </div>
        
        <nav className="mt-5">
          {sidebarMenus.map((item, index) => (
            <Link key={index} href={item.link} className='block'>
              <div className={`cursor-pointer hover:bg-[#00A99D] hover:text-white duration-300 flex items-center gap-5 px-5 py-3 ${item.menu === 'News & Blogs' ? 'bg-[#00A99D] text-white' : ''}`}>
                <h1 className='text-xl'>{item.icon}</h1>
                <h1 className=''>{item.menu}</h1>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="p-5 flex justify-between items-center border-b border-gray-200 bg-white fixed w-[calc(100%-256px)] z-10">
          <h1 className="text-xl font-semibold">Blogs</h1>
          <div className="flex gap-3 relative filter-container">
            <Input 
              placeholder="Search..." 
              className="w-64"
              prefix={<IoSearchOutline className="text-gray-400" />}
            />
            <button 
              onClick={handleFilterClick}
              className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 flex items-center gap-2"
            >
              <IoFilterOutline /> Filter
            </button>

            {/* Filter Dropdown */}
            {showFilter && (
              <div className="absolute right-0 top-12 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-20">
                <div className="p-3 border-b border-gray-100">
                  <h3 className="font-medium">Add Filters</h3>
                </div>
                <div className="py-1">
                  <button
                    onClick={handleLocationClick}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex justify-between items-center"
                  >
                    Category
                    <span>›</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex justify-between items-center">
                    Date
                    <span>›</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex justify-between items-center">
                    Author
                    <span>›</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="pt-20 p-5 mt-10">
          <div className="grid grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer">
                  <Link href={`/news-blogs/${post.id}`}>
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image 
                    src={azeem} 
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center h-10 w-10 rounded-full gap-3 mb-4">
                    <Image 
                      src={azeem}
                      alt={post.author.name}
                      className="rounded-full w-full h-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium w-96">{post.author.name}</h3>
                      <p className="text-sm text-gray-500">{post.author.date}</p>
                    </div>
                  </div>
                  <div className=' w-full h-60  rounded-xl mb-2'>
                    <Image alt='' src={azeem} className=' w-full h-full object-cover rounded-2xl'/>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-[#00A99D]">{post.category}</span>
                    <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
                    <p className="text-gray-500 mt-2">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500">
                    <div className="flex items-center gap-2">
                      <FaRegHeart />
                      <span>{post.likes} Likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegComment />
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>
                </div>
                  </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndBlogs;