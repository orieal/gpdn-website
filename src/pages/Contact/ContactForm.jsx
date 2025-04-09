import React from "react";
import { FiArrowRight } from "react-icons/fi";


const ContactForm = () => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="h-full w-full">
        <div className="h-full w-full flex flex-col items-start justify-between">
          <div className="w-full h-auto lg:h-[50vh] flex justify-start items-center py-5 lg:py-0">
          <h1 className="font-semibold text-[1.9rem] md:text-[3rem] xl:text-[4rem] leading-tight text-secondary">
            Get in touch with us.
            <br />
            We're here to assist you.
          </h1>
          </div>
          <div className="h-auto lg:h-full w-full flex justify-center items-center">
            <form action="" className="flex flex-col justify-around  w-full h-[50vh] lg:h-full">
              <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center gap-7">
                <div className="w-full h-auto flex justify-between items-center gap-7">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full text-black text-base md:text-xl outline-none  border-b border-tertiary pb-3 lg:pb-5"
                />
                 <input
                 required
                  type="email"
                  placeholder="Email Address"
                  className="w-full text-black text-base md:text-xl outline-none  border-b border-tertiary pb-3 lg:pb-5"
                />
                 <input
                 type="number"
                  placeholder="Phone Number (optional)"
                  className="hidden lg:block w-full text-black text-base md:text-xl outline-none  border-b border-tertiary pb-3 lg:pb-5"
                />
                </div>
                 <input
                 type="number"
                  placeholder="Phone Number (optional)"
                  className="lg:hidden w-full text-black text-base md:text-xl outline-none  border-b border-tertiary pb-3 lg:pb-5"
                />
              </div>
              <textarea
              className="w-full text-black text-base md:text-xl outline-none  border-b border-tertiary pb-4 lg:pb-8 "
                id=""
                placeholder="Message"
                ></textarea>
               <div className="w-full flex justify-start">
               <button type="submit" className="bg-primary rounded-xl px-6 py-4 flex gap-2 items-center text-white">
                    <p>Leave us a Message</p>
                    <FiArrowRight/>
                </button>
               </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
