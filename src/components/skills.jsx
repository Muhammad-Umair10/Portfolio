import React from "react";
// 1. Import Navigation module and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import laravelImg from '../assets/laravel.svg';
import php from '../assets/php.png'
import tailwindcss from "../assets/tailwindcss.png";
import mysql from '../assets/mysql.png'
import js from '../assets/js.png'
import git from '../assets/git.png'
import reactjs from '../assets/react-js.png'
import { motion } from 'framer-motion';

const skillsData = [
  {
    id: 1,
    name: 'Laravel',
    description: 'PHP Back-End Framework',
    img: laravelImg
  },
  {
    id: 2,
    name: 'React',
    description: 'JavaScript Front-End Library',
    img: reactjs
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    description: 'Utility-First CSS Framework',
    img: tailwindcss
  },
  {
    id: 4,
    name: 'PHP',
    description: 'Server-Side Scripting Language',
    img: php
  },
  {
    id: 5,
    name: 'JavaScript',
    description: 'Programming Language for Web Development',
    img: js
  },
  {
    id: 6,
    name: 'MySQL',
    description: 'Relational Database Management System',
    img: mysql
  },
  {
    id: 7,
    name: 'Git',
    description: 'Version Control System',
    img: git
  }

];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-white gap-10 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-white">Technical Expertise</h2>
      </motion.div>

      {/* 2. Add modules={[Navigation]} and navigation={true} */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:pb-20 w-full"
      >
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={5}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full skill-swiper"
        >
          {skillsData.map((skill) => (
            <SwiperSlide key={skill.id} className="flex h-full px-2">
              {/* 1. Use 'h-full' and 'flex-1' on the inner wrapper */}
              <div className="w-full h-full flex flex-col">
                <div
                  className="bg-amber-500/20 shadow-md transition-all duration-300 shadow-amber-500/60 hover:bg-amber-500/80 group p-6 border border-amber-500 rounded-2xl flex flex-col items-center text-center h-full flex-1"
                >
                  <img
                    className="mb-3 object-contain"
                    height={50}
                    width={50}
                    src={skill.img}
                    alt={skill.name}
                  />
                  <h5 className="mb-2 text-2xl group-hover:text-white font-semibold text-amber-500">
                    {skill.name}
                  </h5>
                  <p className="text-white text-sm ">{skill.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* 3. Custom CSS to color the arrows amber (Add this to your CSS file) */}

    </div>

  );
};

export default Skills;