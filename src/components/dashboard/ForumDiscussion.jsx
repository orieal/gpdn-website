"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from 'antd';
import logo from '../../app/assets/registation/logo.png'
import azeem from '../../app/assets/registation/Frame.png'
import { ArrowUpOutlined, SearchOutlined, ShareAltOutlined } from '@ant-design/icons';
import { MdChatBubbleOutline } from 'react-icons/md';

import { MdDashboard } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";
import { PiBuildings } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import Link from 'next/link';


const ForumDiscussion = () => {
    const [openCommentId, setOpenCommentId] = useState(null);
    const [commentText, setCommentText] = useState('');

  const tags = [
    'Pain Management', 'Ethical Issues', 'End-of-Life Care', 'Spiritual Care',
    'Psychosocial Support', 'New Virus', 'Symptom Control', 'Lifestyle',
    'Caregiver Support', 'Pediatric Palliative Care'
  ];


  const posts = [
    {
      id: 1,
      author: 'Vermillion Gray',
      time: '02:22 AM',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tags: ['Pain Management', 'Cancer'],
      upvotes: '8.2K',
      comments: '198',
      hasImage: false
    },
    {
      id: 2,
      author: 'Vermillion Gray',
      time: '02:22 AM',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tags: ['Pain Management', 'Cancer'],
      upvotes: '8.2K',
      comments: '198',
      hasImage: true,
      image: '/surgery.jpg'
    },
    {
      id: 3,
      author: 'Aznyan',
      time: '02:22 AM',
      content: 'Lorem ipsum dolor sit amet,',
      tags: ['Pain Management', 'Cancer'],
      upvotes: '8.2K',
      comments: '198',
      verified: true
    },
    {
      id: 1,
      author: 'Vermillion Gray',
      time: '02:22 AM',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tags: ['Pain Management', 'Cancer'],
      upvotes: '8.2K',
      comments: '198',
      hasImage: false
    },
    {
      id: 2,
      author: 'Vermillion Gray',
      time: '02:22 AM',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tags: ['Pain Management', 'Cancer'],
      upvotes: '8.2K',
      comments: '198',
      hasImage: true,
      image: '/surgery.jpg'
    },
    {
      id: 3,
      author: 'Aznyan',
      time: '02:22 AM',
      content: 'Lorem ipsum dolor sit amet,',
      tags: ['Pain Management', 'Cancer'],
      upvotes: '8.2K',
      comments: '198',
      verified: true
    },
    {
      id: 4,
      author: 'Vermillion Gray',
      time: '02:22 AM',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tags: ['Pain Management', 'Cancer'],
      upvotes: '8.2K',
      comments: '198',
      hasImage: false
    },
    {
      id: 5,
      author: 'Vermillion Gray',
      time: '02:22 AM',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tags: ['Pain Management', 'Cancer'],
      upvotes: '8.2K',
      comments: '198',
      hasImage: true,
      image: '/surgery.jpg'
    },
    {
      id: 6,
      author: 'Aznyan',
      time: '02:22 AM',
      content: 'Lorem ipsum dolor sit amet,',
      tags: ['Pain Management', 'Cancer'],
      upvotes: '8.2K',
      comments: '198',
      verified: true
    }
  ];

  const sidebarMenus = [
    {menu : 'Forum', icon : <MdDashboard/>, link: '/forum'},
    {menu : 'Resource Library', icon : <FaRegFolder/>, link: '/resource-library'}, 
    {menu : 'Members', icon : <TbUsers/>, link: '/members'}, 
    {menu : 'Palliative Units', icon : <PiBuildings/>, link: '/palliative-units'}, 
    {menu : 'News & Blogs', icon : <IoNewspaperOutline/>, link: '/news-blogs'}, 
    {menu : 'Settings', icon : <MdOutlineSettings/>, link: '/settings'}
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar - Made fixed */}
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

      {/* Main Content - Adjusted margin to account for fixed sidebar */}
      <div className="flex-1 ml-64">
        {/* Header - Made fixed */}
        <div className="p-5 flex justify-between items-center border-b border-gray-200 bg-white fixed w-[calc(100%-256px)] z-10">
          <h1 className="text-xl font-semibold">Forum Discussion</h1>
          <div className="flex gap-3">
            <Input 
              placeholder="Search..." 
              className="w-64"
              prefix={<span className="material-icons text-gray-400"><SearchOutlined/></span>}
            />
            <button className="px-4 py-2 bg-[#00A99D] text-white rounded-md hover:bg-[#008F84]">
              Create
            </button>
          </div>
        </div>

        <div className="flex pt-20">
          {/* Posts Section - Scrollable */}
          <div className=" w-4/5 p-5 border-r border-gray-200">
            {posts.map((post, index) => (
              <div key={index} className="mb-6 p-5 border border-gray-100 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  {/* <img src={`/avatar-${post.id}.jpg`} alt="" className="w-10 h-10 rounded-full" /> */}
                  <Image alt='' src={azeem} className=' w-10 h-10 rounded-full object-cover'/>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{post.author}</h3>
                      {post.verified && <span className="text-[#00A99D] text-sm">(Verified)</span>}
                    </div>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3">{post.content}</p>
                
                {post.hasImage && (
                  <div className="mb-3">
                    <img src={post.image} alt="" className="rounded-lg w-full" />
                  </div>
                )}

                <div className="flex gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#E3F5FE] text-[#00A99D] rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-gray-500 text-sm">
                  <button className="flex items-center gap-1 border border-gray-200 px-2 py-1 rounded-lg">
                    <span className="material-icons text-sm"><ArrowUpOutlined/></span>
                    Upvote · {post.upvotes}
                  </button>
                  <button 
                    onClick={() => setOpenCommentId(openCommentId === index ? null : index)}
                    className="flex items-center gap-1 border border-gray-200 px-2 py-1 rounded-lg"
                  >
                    <span className="material-icons text-sm"><MdChatBubbleOutline/></span>
                    Comments · {post.comments}
                  </button>
                  <button className="flex items-center gap-1 border border-gray-200 px-2 py-1 rounded-lg">
                    <span className="material-icons text-sm"><ShareAltOutlined/></span>
                    Share
                  </button>
                </div>

                {openCommentId === index && (
                  <div className="mt-4">
                    <div className="flex gap-3 items-start">
                      <Image 
                        alt='user' 
                        src={azeem} 
                        className='w-8 h-8 rounded-full object-cover'
                      />
                      <div className="flex-1">
                        <Input.TextArea
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          placeholder="Write a comment..."
                          autoSize={{ minRows: 1, maxRows: 6 }}
                          className="w-full rounded-lg border border-gray-200"
                        />
                        <div className="flex justify-end mt-2">
                          <button 
                            className="px-4 py-1.5 bg-[#00A99D] text-white rounded-lg text-sm hover:bg-[#008F84]"
                            onClick={() => {
                              // Handle comment submission here
                              setCommentText('');
                            }}
                          >
                            Comment
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Display comments */}
                    <div className="mt-4 space-y-10">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex gap-3">
                          <Image 
                            alt='user' 
                            src={azeem} 
                            className='w-8 h-8 rounded-full object-cover'
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-sm">Mei Sakurajima</h4>
                              <span className="text-xs text-gray-500">02:22 AM</span>
                            </div>
                            <p className="text-sm text-gray-700">Leo in vitae turpis massa sed elementum.</p>
                            <button className="font-semibold flex items-center gap-1 text-sm mt-2 border border-gray-500 px-2 py-1 rounded-lg text-gray-500 ">
                              <span className="material-icons "><ArrowUpOutlined/></span>
                              Upvote · 8.2K
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tags Section - Made fixed */}
          <div className="w-64 bg-white p-5 fixed right-0 h-screen overflow-y-auto">
            <h2 className="font-semibold mb-4">Tags</h2>
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

export default ForumDiscussion;