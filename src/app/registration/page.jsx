import React from "react";
import bg from "../assets/signin/registrationBg.png";
import Image from "next/image";
import Step from "@/components/registration/steps/page";
import { UserOutlined } from "@ant-design/icons";
import { MdOutlineEmail } from "react-icons/md";
import { Input } from "antd";

function page() {
  return (
    <div className=" w-full flex  h-screen">
      <div className=" w-1/2 h-screen ">
        <Image alt="" src={bg} className=" w-full h-full " />
      </div>
      <div className=" w-1/2 h-screen flex flex-col items-center justify-between px-5 py-5">
        <div className=" w-full">
          <Step />
        </div>
        <div className=" w-full flex flex-col gap-5 justify-center items-center">
          <div className=" w-24 h-24 rounded-full flex items-center justify-center bg-gray-200">
            <UserOutlined className=" text-5xl text-[#00A99D]" />
          </div>
          <div className=" flex flex-col gap-2 items-center">
            <h1 className=" text-3xl font-semibold">Welcome to GPDN</h1>
            <h1>Start by entering your Personal Information</h1>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" flex flex-col gap-2 ">
              <label className=" text-sm font-semibold">Full Name</label>
              <Input
                size="large"
                type="text"
                className="w-96 text-sm"
                placeholder="Full Name"
                prefix={<UserOutlined className="text-lg mr-1" />}
              />
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
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default page;
