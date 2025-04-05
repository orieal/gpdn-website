import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ContactInfo = () => {
  return (
    <section
      className={`w-full h-full flex justify-center items-center bg-[#F1F1F1] ${inter.className}`}
    >
      <div className="h-full w-full grid grid-cols-2 gap-x-10 py-16 md:px-16 lg:px-20">
        <div className={`flex flex-col items-start `}>
          <h4 className="text-[1.5rem] font-normal">Contact Info</h4>
          <h2 className="font-bold text-[3.5rem]">
            We are always
            <br /> happy to assist you
          </h2>
        </div>
       <div className="grid grid-cols-2 gap-x-7">
       <div className="flex flex-col gap-5">
          <h3 className="text-[1.4rem] font-semibold">Email Address</h3>
          <hr className="bg-black h-1 rounded-xl w-[10%]" />
          <h4 className="text-[1.4rem] font-semibold">help@info.com</h4>
          <p className="font-normal text-[1.2rem]">
            Assistance hours:
            <br />
            Monday - Friday 6 am to 8 pm EST
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[1.4rem] font-semibold">Contact Number</h3>
          <hr className="bg-black h-1 rounded-xl w-[10%]" />
          <h4 className="text-[1.4rem] font-semibold">(808) 998-34256</h4>
          <p className="font-normal text-[1.2rem]">
            Assistance hours:
            <br />
            Monday - Friday 6 am to 8 pm EST
          </p>
        </div>
       </div>
      </div>
    </section>
  );
};

export default ContactInfo;
