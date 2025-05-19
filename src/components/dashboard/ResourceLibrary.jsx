"use client"
import React from 'react';
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
import { IoDownloadOutline } from "react-icons/io5";
import azeem from '../../app/assets/registation/Frame.png'
import Link from 'next/link';

const ResourceLibrary = () => {
  const tags = [
    'Pain Management', 'Ethical Issues', 'End-of-Life Care', 'Spiritual Care',
    'Psychosocial Support', 'New Virus', 'Symptom Control', 'Lifestyle',
    'Caregiver Support', 'Pediatric Palliative Care'
  ];

  const sidebarMenus = [
    {menu : 'Forum', icon : <MdDashboard/>, link: '/forum'},
    {menu : 'Resource Library', icon : <FaRegFolder/>, link: '/resource-library'}, 
    {menu : 'Members', icon : <TbUsers/>, link: '/members'}, 
    {menu : 'Palliative Units', icon : <PiBuildings/>, link: '/palliative-units'}, 
    {menu : 'News & Blogs', icon : <IoNewspaperOutline/>, link: '/news-blogs'}, 
    {menu : 'Settings', icon : <MdOutlineSettings/>, link: '/settings'}
  ];

  const posts = [
    {
      id: 1,
      author: 'Vermillion Gray',
      time: '02:22 AM',
      content: 'Varius morbi enim nunc faucibus a pellentesque sit amet. Sit amet facilisis magna etiam. Id faucibus nisi tincidunt eget nullam. Et molestie ac feugiat sed lectus vestibulum.',
      tags: ['Pain Management', 'Cancer'],
      downloadLink: 'Download Link.pdf'
    },
    {
      id: 2,
      author: 'Vermillion Gray',
      time: '02:22 AM',
      content: 'Varius morbi enim nunc faucibus a pellentesque sit amet. Sit amet facilisis magna etiam. Id faucibus nisi tincidunt eget nullam. Et molestie ac feugiat sed lectus vestibulum.',
      tags: ['Pain Management', 'Respire Care', 'Counseling'],
      images: ['/surgery.jpg', '/surgery2.jpg']
    },
    {
      id: 3,
      author: 'Vermillion Gray',
      time: '02:22 AM',
      content: 'Varius morbi enim nunc faucibus a pellentesque sit amet. Sit amet facilisis magna etiam. Id faucibus nisi tincidunt eget nullam. Et molestie ac feugiat sed lectus vestibulum.',
      tags: ['Pain Management', 'Respire Care', 'Counseling'],
      video: '/video.mp4'
    }
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
              <div className='cursor-pointer hover:bg-[#00A99D] hover:text-white duration-300 flex items-center gap-5 px-5 py-3'>
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
          <h1 className="text-xl font-semibold">Resource Library</h1>
          <div className="flex gap-3">
            <Input 
              placeholder="Search Any Resources..." 
              className="w-64"
              prefix={<IoSearchOutline className="text-gray-400" />}
            />
            <button className="px-4 py-2 bg-[#00A99D] text-white rounded-md hover:bg-[#008F84]">
              Create
            </button>
          </div>
        </div>

        <div className="flex pt-20">
          {/* Posts Section */}
          <div className="w-4/5 p-5 border-r border-gray-200">
            <div className="space-y-6">
              {posts.map((post, index) => (
                <div key={index} className="p-5 border border-gray-100 rounded-lg">
                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                      <Image 
                        src={azeem}
                        alt={post.author}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{post.author}</h3>
                      <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-4">{post.content}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-[#E3F5FE] text-[#00A99D] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Download Link */}
                  {post.downloadLink && (
                    <div className="flex w-36 items-center justify-center py-1 border border-gray-500 rounded-lg  gap-2 text-gray-600 hover:text-[#00A99D] cursor-pointer font-semibold">
                      <IoDownloadOutline className="text-lg" />
                      <span >Download</span>
                    </div>
                  )}

                  {/* Images */}
                  {post.images && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {post.images.map((image, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden">
                          <Image 
                            src={azeem} 
                            alt="Resource" 
                            width={300} 
                            height={200} 
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Video */}
                  {post.video && (
                    <div className="mt-4 relative rounded-lg overflow-hidden bg-black aspect-video">
                      <video 
                        controls 
                        className="w-full"
                        poster="/video-thumbnail.jpg"
                      >
                        <source src={post.video} type="video/mp4" />
                      </video>
                    </div>
                  )}

                  {/* Download Button */}
                  {(post.images || post.video) && (
                    <button className="mt-4 flex items-center justify-center py-1 gap-2 border border-gray-500 w-36 rounded-lg font-semibold  text-gray-600 hover:text-[#00A99D]">
                      <IoDownloadOutline className="text-lg" />
                      <span>Download</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="w-64 bg-white p-5 fixed right-0 h-screen overflow-y-auto">
            <h2 className="font-semibold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-50 rounded-full text-sm cursor-pointer hover:bg-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceLibrary;