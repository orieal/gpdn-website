"use client";
import { faqData } from "@/app/assets/assets";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  return (
    <section className="w-full h-auto  flex justify-center items-center py-5 lg:py-14">
      <div className="w-full h-full  flex flex-col gap-3">
        <h1 className="text-[2rem] md:text-[2.5rem] xl:text-[4rem] text-secondary font-semibold leading-[1.15]">
          Frequently Asked <br />
          Questions
        </h1>
        <div className="h-full w-full  flex flex-col gap-3">
          {faqData.map((data, index) => (
            <div
              key={index}
              className={`w-full h-auto rounded-lg flex flex-col gap-3 p-5 lg:p-8 ${
                activeFaq == index + 1 ? "shadow-faqActive" : "shadow-faqNormal"
              }`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-[#252525] font-medium font-poppins text-sm md:text-[1rem] lg:text-[1.4rem]">
                  {data.q}
                </h2>
               <div className="flex items-center justify-center">
               <div
                  onClick={() => {
                    if (activeFaq == index + 1) {
                      setActiveFaq(0);
                    } else {
                      setActiveFaq(index + 1);
                    }
                  }}
                  className={`${
                    activeFaq == index + 1 ? "bg-secondary" : "bg-white"
                  } cursor-pointer rounded-full shadow-faqRound w-10 h-10 flex items-center justify-center`}
                >
                  {activeFaq == index + 1 ? (
                    <FaChevronDown className="text-white" />
                  ) : (
                    <FaChevronRight className="text-secondary" />
                  )}
                </div>
               </div>
              </div>
              <motion.p
                initial={{ height: 0 }}
                animate={
                  activeFaq === index + 1 ? { height: "auto" } : { height: 0 }
                }
                transition={{
                  delay: 0.1,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className={`text-tertiary text-[0.65rem] md:text-[0.8rem] lg:text-lg font-sans font-normal transition-all overflow-hidden`}
              >
                {data.a}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
