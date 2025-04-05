import React from "react";
import { FiArrowRight } from "react-icons/fi";


const ContactForm = () => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="h-full w-full">
        <div className="h-full w-full flex flex-col items-start justify-between">
          <div className="w-full h-[50vh] flex justify-start items-center">
          <h1 className="font-semibold  lg:text-[3rem] xl:text-[4rem] text-secondary">
            Get in touch with us.
            <br />
            We're here to assist you.
          </h1>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <form action="" className="flex flex-col justify-around  w-full h-full">
              <div className="flex justify-between items-center gap-7">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full text-black text-xl outline-none  border-b border-tertiary pb-5"
                />
                 <input
                 required
                  type="email"
                  placeholder="Email Address"
                  className="w-full text-black text-xl outline-none  border-b border-tertiary pb-5"
                />
                 <input
                 type="number"
                  placeholder="Phone Number (optional)"
                  className="w-full text-black text-xl outline-none  border-b border-tertiary pb-5"
                />
              </div>
              <textarea
              className="w-full text-black text-xl outline-none  border-b border-tertiary pb-8 "
                id=""
                placeholder="Message"
                ></textarea>
               <div className="w-full flex justify-start">
               <button type="submit" className="bg-primary rounded-sm px-4 py-3 flex gap-2 items-center text-white">
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
