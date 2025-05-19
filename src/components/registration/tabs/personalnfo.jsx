"use client"
import React, { useState } from 'react'
import { ArrowRightOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { MdOutlineEmail } from "react-icons/md";
import { Input } from "antd";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


function Personalnfo({ onContinue }) {
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    onContinue(); // Remove validation, just call onContinue directly
  };

  return (
    <div className=" w-full flex flex-col gap-5 justify-center items-center">
    <div className=" w-24 h-24 rounded-full flex items-center justify-center bg-gray-200">
      <UserOutlined className=" text-5xl text-[#00A99D]" />
    </div>
    <div className=" flex flex-col gap-2 items-center">
      <h1 className=" text-3xl font-semibold">Welcome to GPDN</h1>
      <h1 className=" text-gray-500">Start by entering your Personal Information</h1>
    </div>
    <div className=" flex flex-col gap-4">
      <div className=" flex flex-col gap-2 ">
        <label className=" text-sm font-semibold">Full Name</label>
        <Input
          size="large"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-96 text-sm"
          placeholder="Full Name"
          prefix={<UserOutlined className="text-lg mr-1" />}
        />
        {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
      </div>
      <div className=" flex flex-col gap-2 ">
        <label className=" text-sm font-semibold">Email Address</label>
        <Input
          size="large"
          type="email"
          className="w-96 text-sm"
          placeholder="example@gmail.com"
          prefix={<MdOutlineEmail className="text-lg mr-1" />}
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
      </div>
      <div className=" flex flex-col gap-2 ">
        <label className=" text-sm font-semibold">Phone number</label>
        <PhoneInput
        inputStyle={{width: '100%'}}
        country={'us'}
        value={phone}
        onChange={phone => setPhone(phone)}
      />
        {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
      </div>
      <div className=" flex flex-col gap-2 ">
        <label className=" text-sm font-semibold">Password</label>
        <Input
          size="large"
          type="password"
          className="w-96 text-sm"
          placeholder="password"
          prefix={<LockOutlined  className="text-lg mr-1" />}
        />
        {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
      </div>
      <div className=" flex flex-col gap-2 ">
        <label className=" text-sm font-semibold">Confirm Password</label>
        <Input
          size="large"
          type="password"
          className="w-96 text-sm"
          placeholder="password"
          prefix={<LockOutlined  className="text-lg mr-1" />}
        />
        {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword}</span>}
      </div>
      <button
        onClick={handleSubmit}
        className="w-full  h-10 rounded-lg font-semibold bg-[#00A99D] flex items-center justify-center text-white cursor-pointer hover:bg-[#008F84] transition-colors"
      >
        <h1 className="flex items-center gap-2 cursor-pointer">Continue <ArrowRightOutlined/></h1>
      </button>
    </div>
  </div>
  )
}

export default Personalnfo
