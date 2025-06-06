"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from 'antd';
import logo from '../../app/assets/registation/logo.png';
import { MdDashboard } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";
import { PiBuildings } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('My Discussions');
  const [phone, setPhone] = useState('');
  
  const tabs = ['My Discussions', 'My Resources', 'Account', 'Notification Preferences'];

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="fixed w-80 h-screen border-r border-gray-200 p-8 flex flex-col gap-14 bg-white">
        <Image src={logo} alt="GPDN Logo" width={100} height={40} />
        <div className="flex flex-col gap-5">
          <a href="/forum" className="flex items-center gap-3 text-gray-500 hover:text-[#00A99D] transition-colors">
            <MdDashboard className="text-xl" />
            <span>Forum</span>
          </a>
          <a href="/resource-library" className="flex items-center gap-3 text-gray-500 hover:text-[#00A99D] transition-colors">
            <FaRegFolder className="text-xl" />
            <span>Resource Library</span>
          </a>
          <a href="/members" className="flex items-center gap-3 text-gray-500 hover:text-[#00A99D] transition-colors">
            <TbUsers className="text-xl" />
            <span>Members</span>
          </a>
          <a href="/palliative-units" className="flex items-center gap-3 text-gray-500 hover:text-[#00A99D] transition-colors">
            <PiBuildings className="text-xl" />
            <span>Palliative Units</span>
          </a>
          <a href="/news-blogs" className="flex items-center gap-3 text-gray-500 hover:text-[#00A99D] transition-colors">
            <IoNewspaperOutline className="text-xl" />
            <span>News & Blogs</span>
          </a>
          <a href="/settings" className="flex items-center gap-3 text-[#00A99D]">
            <MdOutlineSettings className="text-xl" />
            <span>Settings</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-80 overflow-y-auto h-screen">
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
        
        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-4 ${activeTab === tab ? 'text-[#00A99D] border-b-2 border-[#00A99D]' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Profile Section */}
        <div className="max-w-3xl">
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-2">Your Profile</h2>
            <p className="text-gray-500 text-sm">Please update your profile settings here</p>
          </div>

          {/* Profile Picture */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Profile Picture</h3>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                {/* Add profile picture here */}
              </div>
              <button className="px-4 py-2 text-sm text-white bg-[#FF3B30] rounded hover:bg-red-600 transition-colors">
                Remove
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <Input 
                placeholder="Enter your full name"
                className="w-full"
                suffix={<span className="cursor-pointer">✏️</span>}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: '100%',
                  height: '40px'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <Input 
                type="email"
                placeholder="Enter your email"
                className="w-full"
                suffix={<span className="cursor-pointer">✏️</span>}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <Input 
                placeholder="Select your country"
                className="w-full"
                suffix={<span className="cursor-pointer">✏️</span>}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Biography
                <span className="ml-1 text-gray-400">(optional)</span>
              </label>
              <Input.TextArea
                placeholder="Write something about yourself"
                className="w-full"
                rows={4}
              />
              <p className="text-sm text-gray-400 mt-2">325 characters remaining</p>
            </div>
          </div>

          {/* Medical Information */}
          <div className="mt-8">
            <div className="mb-6">
              <h2 className="text-lg font-medium">Medical Qualification</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Input 
                placeholder="MBBS, MD"
                className="w-full"
                suffix={<span className="cursor-pointer">✏️</span>}
              />

              <div>
                <label className="block text-sm font-medium mb-2">Year of Graduation/meaning</label>
                <Input 
                  placeholder="2025"
                  className="w-full"
                  suffix={<span className="cursor-pointer">✏️</span>}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Medical Registration Authority</label>
                <Input 
                  placeholder="Medical Council of India"
                  className="w-full"
                  suffix={<span className="cursor-pointer">✏️</span>}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Medical Registration Number</label>
                <Input 
                  placeholder="Enter registration number"
                  className="w-full"
                  suffix={<span className="cursor-pointer">✏️</span>}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Do you have formal training in palliative care?</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="training" className="text-[#00A99D]" />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="training" className="text-[#00A99D]" />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Affiliated Palliative Associations</label>
                <Input 
                  placeholder="Indian Association of Palliative Care (IAPC)"
                  className="w-full"
                  suffix={<span className="cursor-pointer">✏️</span>}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Special Interests in Palliative Care</label>
                <Input 
                  placeholder="End-of-Life Communication"
                  className="w-full"
                  suffix={<span className="cursor-pointer">✏️</span>}
                />
              </div>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="mt-8">
            <div className="mb-6">
              <h2 className="text-lg font-medium">Change Password</h2>
              <p className="text-gray-500 text-sm">Here you can change the password to your account</p>
            </div>
            <button className="px-6 py-2 text-sm text-white bg-[#00A99D] rounded hover:bg-[#008F84] transition-colors">
              Change Password
            </button>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex gap-4 justify-end">
            <button className="px-6 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2 text-sm text-white bg-[#00A99D] rounded hover:bg-[#008F84] transition-colors">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;