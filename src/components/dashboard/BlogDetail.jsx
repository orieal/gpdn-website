"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdDashboard } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";
import { PiBuildings } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import logo from '../../app/assets/registation/logo.png';
import azeem from '../../app/assets/registation/Frame.png';
import { IoSend } from "react-icons/io5";

const BlogDetail = ({ id }) => {
  const sidebarMenus = [
    {menu : 'Forum', icon : <MdDashboard/>, link: '/forum'},
    {menu : 'Resource Library', icon : <FaRegFolder/>, link: '/resource-library'}, 
    {menu : 'Members', icon : <TbUsers/>, link: '/members'}, 
    {menu : 'Palliative Units', icon : <PiBuildings/>, link: '/palliative-units'}, 
    {menu : 'News & Blogs', icon : <IoNewspaperOutline/>, link: '/news-blogs'}, 
    {menu : 'Settings', icon : <MdOutlineSettings/>, link: '/settings'}
  ];

  const comments = [
    {
      id: 1,
      author: {
        name: 'Mai Sakurajima',
        avatar: '/path/to/avatar.jpg',
        time: '02:22 AM'
      },
      content: 'Leo in vitae turpis massa sed elementum.'
    },
    {
      id: 2,
      author: {
        name: 'Allan D. Blue',
        avatar: '/path/to/avatar.jpg',
        time: '02:22 AM'
      },
      content: 'Sed odio morbi quis commodo odio. Dictum at tempor commodo ullamcorper a lacus vestibulum. Leo in vitae turpis massa sed elementum.'
    },
    {
      id: 3,
      author: {
        name: 'Isotope 221b',
        avatar: '/path/to/avatar.jpg',
        time: '02:22 AM'
      },
      content: 'Uma neque viverra justo nec!'
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
              <div className={`cursor-pointer hover:bg-[#00A99D] hover:text-white duration-300 flex items-center gap-5 px-5 py-3 ${item.menu === 'News & Blogs' ? 'bg-[#00A99D] text-white' : ''}`}>
                <h1 className='text-xl'>{item.icon}</h1>
                <h1 className=''>{item.menu}</h1>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-10 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Category and Date */}
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-[#E8F8F7] text-[#00A99D] rounded-full text-sm">Cancer</span>
            <span className="text-gray-500">October 23,2023</span>
          </div>

          {/* Blog Title */}
          <h1 className="text-3xl font-bold mb-6">COVID-19 vaccines prevent infection and reduce symptoms.</h1>

          {/* Featured Image */}
          <div className="mb-8 rounded-lg w-full h-80 overflow-hidden">
            <Image 
              src={azeem} 
              alt="COVID-19 Prevention"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              COVID-19, caused by the SARS-CoV-2 virus, emerged in late 2019 in Wuhan, China, rapidly spreading across the globe and leading to an unprecedented pandemic. Characterized by symptoms ranging from mild fever and cough to severe respiratory failure, the virus primarily spreads through respiratory droplets and close contact. Its impact on global health was catastrophic, overwhelming healthcare systems, leading to millions of deaths, and prompting governments to implement lockdowns, travel restrictions, and strict safety measures such as social distancing and mask mandates.
            </p>

            <h2 className="text-xl font-semibold mb-4">1. Prevention of Severe Illness</h2>
            <p className="text-gray-700 mb-6">
              COVID-19 vaccines significantly reduce the risk of severe illness, hospitalization, and death. Even if an individual gets infected, the symptoms are usually milder compared to those who are unvaccinated.
            </p>

            <h2 className="text-xl font-semibold mb-4">2. Herd Immunity Contribution</h2>
            <p className="text-gray-700 mb-6">
              When a large percentage of the population is vaccinated, the spread of the virus slows down, protecting those who cannot get vaccinated, such as individuals with medical conditions.
            </p>

            <h2 className="text-xl font-semibold mb-4">3. Reduction in Virus Mutation</h2>
            <p className="text-gray-700 mb-6">
              Vaccination helps minimize the chances of the virus mutating into more dangerous variants by reducing the number of infections, making it harder for the virus to evolve.
            </p>

            <p className="text-gray-700 mb-6">
              Despite significant advancements in treatment and preventive measures, the pandemic underscored the importance of global cooperation, scientific innovation, and healthcare preparedness. COVID-19 not only reshaped daily life but also highlighted vulnerabilities in public health systems, reinforcing the need for continued vigilance to prevent future outbreaks. While the world has made progress, the pandemic remains a reminder of how interconnected and fragile global health can be.
            </p>
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Comments</h2>
            <div className="space-y-6 ">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                <div className=' w-10 h-10'>               
                 <Image 
                    src={azeem}
                    alt={comment.author.name}
                    className="rounded-full w-full h-full object-cover"
                />
                </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{comment.author.name}</h3>
                      <span className="text-sm text-gray-500">{comment.author.time}</span>
                    </div>
                    <p className="text-gray-700 mt-1">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comment Input */}
            <div className="mt-6 relative">
              <input
                type="text"
                placeholder="Comments"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A99D] focus:border-transparent pr-12"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00A99D] hover:text-[#008F84] transition-colors">
                <IoSend size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

