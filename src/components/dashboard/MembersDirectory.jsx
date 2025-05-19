"use client"
import React, { useState } from 'react';
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
import { FaWhatsapp } from "react-icons/fa";
import azeem from '../../app/assets/registation/Frame.png'
import Link from 'next/link';

const MembersDirectory = () => {
  const sidebarMenus = [
    {menu : 'Forum', icon : <MdDashboard/>, link: '/forum'},
    {menu : 'Resource Library', icon : <FaRegFolder/>, link: '/resource-library'}, 
    {menu : 'Members', icon : <TbUsers/>, link: '/members'}, 
    {menu : 'Palliative Units', icon : <PiBuildings/>, link: '/palliative-units'}, 
    {menu : 'News & Blogs', icon : <IoNewspaperOutline/>, link: '/news-blogs'}, 
    {menu : 'Settings', icon : <MdOutlineSettings/>, link: '/settings'}
  ];

  const members = [
    {
      fullName: 'Alice Smith',
      qualification: 'MBBS, MD - Palliative Medicine',
      location: 'US',
      email: 'sample@gmail.com'
    },
    {
      fullName: 'Bob Johnson',
      qualification: 'MBBS, MD - Palliative Medicine',
      location: 'UK',
      email: 'sample@gmail.com'
    },
    {
      fullName: 'Clara Garcia',
      qualification: 'MBBS, MD - Palliative Medicine',
      location: 'JP',
      email: 'sample@gmail.com'
    },
    {
      fullName: 'David Brown',
      qualification: 'MBBS, MD - Palliative Medicine',
      location: 'FR',
      email: 'sample@gmail.com'
    },
    {
      fullName: 'Emma Lee',
      qualification: 'MBBS, MD - Palliative Medicine',
      location: 'CA',
      email: 'sample@gmail.com'
    },
    {
      fullName: 'Frank Wong',
      qualification: 'MBBS, MD - Palliative Medicine',
      location: 'DE',
      email: 'sample@gmail.com'
    },
    {
      fullName: 'Grace Taylor',
      qualification: 'MBBS, MD - Palliative Medicine',
      location: 'CA',
      email: 'sample@gmail.com'
    },
    {
      fullName: 'Isabella Clark',
      qualification: 'MBBS, MD - Palliative Medicine',
      location: 'CN',
      email: 'sample@gmail.com'
    }
  ];

  const countryFlags = {
    US: '🇺🇸',
    UK: '🇬🇧',
    JP: '🇯🇵',
    FR: '🇫🇷',
    CA: '🇨🇦',
    DE: '🇩🇪',
    CN: '🇨🇳'
  };

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
          <h1 className="text-xl font-semibold">Members Directory</h1>
          <div className="flex gap-3 relative">
            <Input 
              placeholder="Search Any Members..." 
              className="w-64"
              prefix={<IoSearchOutline className="text-gray-400" />}
            />
            <button 
              onClick={handleFilterClick}
              className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 flex items-center gap-2"
            >
              <IoFilterOutline /> Filter
            </button>

            {/* Main Filter Menu */}
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
                    Location
                    <span>›</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex justify-between items-center">
                    Specialization
                    <span>›</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex justify-between items-center">
                    Expertise
                    <span>›</span>
                  </button>
                </div>
              </div>
            )}

            {/* Location Submenu */}
            {showLocationMenu && (
              <div className="absolute right-0 top-12 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-20">
                <div className="p-3 border-b border-gray-100 flex items-center gap-2">
                  <button
                    onClick={handleBackClick}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    ‹
                  </button>
                  <h3 className="font-medium">Location</h3>
                </div>
                <div className="p-2">
                  <Input
                    placeholder="Find Any Location"
                    className="mb-2"
                    prefix={<IoSearchOutline className="text-gray-400" />}
                  />
                  <div className="py-1">
                    <button className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2 rounded">
                      <span>🇬🇧</span> United Kingdom
                    </button>
                    <button className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2 rounded">
                      <span>🇺🇦</span> Ukraine
                    </button>
                    <button className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2 rounded">
                      <span>🇹🇷</span> Turkey
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Members Table */}
        <div className="pt-20 p-5 mt-10">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-6 text-gray-800">Members</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-sm text-gray-600 tracking-wider">Full Name</th>
                      <th className="text-left py-4 px-6 font-semibold text-sm text-gray-600 tracking-wider">Qualification</th>
                      <th className="text-left py-4 px-6 font-semibold text-sm text-gray-600 tracking-wider">Location</th>
                      <th className="text-left py-4 px-6 font-semibold text-sm text-gray-600 tracking-wider">Email Address</th>
                      <th className="text-left py-4 px-6 font-semibold text-sm text-gray-600 tracking-wider">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {members.map((member, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                              <Image 
                                src={azeem}
                                alt={member.fullName}
                                width={40}
                                height={40}
                                className="object-cover"
                              />
                            </div>
                            <span className="font-medium text-gray-900">{member.fullName}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600">{member.qualification}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{countryFlags[member.location]}</span>
                            <span className="text-sm text-gray-700">{member.location}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-gray-600">{member.email}</span>
                        </td>
                        <td className="py-4 px-6">
                          <button className="px-5 py-2 bg-[#00A99D] text-white rounded-md hover:bg-[#008F84] transition-colors duration-150 flex items-center gap-2 text-sm font-medium shadow-sm hover:shadow">
                            <FaWhatsapp className="text-base" />
                            <span>Connect</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default MembersDirectory;