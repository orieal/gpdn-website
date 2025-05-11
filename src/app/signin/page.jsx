import React from "react";
import bg from "../../app/assets/signin/bg.png";
import Image from "next/image";
import { Input } from "antd";
import { PiSignInBold } from "react-icons/pi";

import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";

function page() {
  return (
    <div className=" w-full h-screen bg-white flex items-center">
      <div className=" w-1/2 h-screen bg-gray-100 relative ">
        <Image alt="" src={bg} className=" w-full h-full" />
      </div>
      <div className=" w-1/2 h-screen flex items-center justify-center">
        <div className=" flex flex-col gap-5">
          <div className=" flex flex-col">
            <h1 className=" text-xl font-semibold">Sign In To Your Account</h1>
            <h1 className=" text-gray-400 text-sm">
              Let’s sign in to your account and get started.
            </h1>
          </div>
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col w-full">
              <label className=" text-sm font-semibold">Email Address</label>
              <Input
                size="large"
                className="w-96 text-sm"
                type="email"
                placeholder="large size"
                prefix={<MdOutlineEmail className="text-lg mr-1" />}
              />
            </div>
            <div className=" flex flex-col w-full">
              <label className=" text-sm font-semibold">Password</label>
              <Input
                size="large"
                type="password"
                className="w-96 text-sm"
                placeholder="large size"
                prefix={<FiLock className="text-lg mr-1" />}
              />
            </div>
            <div className=" rounded-md text-white w-full h-10 flex items-center justify-center bg-[#00A99D] gap-2 hover:bg-[#197364] ">
              <h1>Sign In</h1>
              <PiSignInBold className=" text-lg" />
            </div>
            <div className=" flex justify-center w-full font-medium text-sm">
              <div className=" flex flex-col items-center">
                <h1>
                  Don’t have an account?
                  <span className=" text-blue-600"> Register Now</span>
                </h1>
                <h1 className=" text-blue-600">Forgot Password</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
