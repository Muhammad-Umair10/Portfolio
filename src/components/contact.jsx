import React from 'react';
import developerImg from '../assets/get-in-touch.png';
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <div id="contact" className="w-full py-10 px-5 lg:py-0 bg-gray-900 text-white font-sans flex flex-col items-center justify-center">

      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
          Get In <span className="text-amber-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          Let's talk about your project.
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Side: Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          {/* Using developer image as a placeholder for the 3D contact illustration */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative max-w-[400px]">
            <img
              src={developerImg}
              alt="Contact Illustration"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full">
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl w-full mx-auto lg:mx-0">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>

              {/* Name Row */}
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-[#1f2937] border border-gray-700 text-white text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder-gray-500"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-[#1f2937] border border-gray-700 text-white text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#1f2937] border border-gray-700 text-white text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder-gray-500"
                  required
                />
              </div>

              {/* Phone */}
              <div className="w-full">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-[#1f2937] border border-gray-700 text-white text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder-gray-500"
                />
              </div>

              {/* Message */}
              <div className="w-full">
                <textarea
                  placeholder="Write Message"
                  rows="5"
                  className="w-full bg-[#1f2937] border border-gray-700 text-white text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors placeholder-gray-500 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="w-full mt-2">
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg px-4 py-4 transition-colors shadow-lg shadow-amber-500/20"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
