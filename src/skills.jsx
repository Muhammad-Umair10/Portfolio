import React from "react";
import laravelImg from './assets/laravel.svg';
import php from './assets/php.png'
import tailwindcss from "./assets/tailwindcss.png";
import mysql from './assets/mysql.png'
import js from './assets/js.png'
import git from './assets/git.png'
import reactjs from './assets/react-js.png'
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
    <div className="flex pt-20 flex-col items-center justify-center mb-20 w-full text-white gap-10">
        <div>
            <h2 className="text-3xl font-bold text-amber-500">My Skills</h2>
        </div>
        
    <div className="justify-items-center grid lg:grid-cols-4 md:grid-cols-4 gap-5 pb-20 w-full">
      {skillsData.map((skill) => (
        <div
          key={skill.id}
          className="bg-amber-500/20 shadow-md transition-all duration-300 shadow-amber-500/60 hover:bg-amber-500/80 group  w-full max-w-sm p-6 border border-amber-500 rounded-2xl shadow"
        >
          <img
            className="mb-3"
            height={50}
            width={50}
            src={skill.img}
            alt={skill.name}
          />
          <h5 className="mb-2 text-2xl group-hover:text-white font-semibold text-amber-500">
            {skill.name}
          </h5>
          <p className="text-white">{skill.description}</p>
        </div>
      ))}
    </div>
    </div>

  );
};

export default Skills;