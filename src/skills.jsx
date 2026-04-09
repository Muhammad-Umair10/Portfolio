import React from "react";
import laravelImg from './assets/laravel.svg';

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
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    description: 'Utility-First CSS Framework',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
  }
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-20 w-full text-white gap-10">
        <div>
            <h2 className="text-3xl font-bold text-amber-500">My Skills</h2>
        </div>
        
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-20 w-full">
      {skillsData.map((skill) => (
        <div
          key={skill.id}
          className="bg-amber-500/20 hover:bg-amber-500/80 group  w-full max-w-sm p-6 border border-amber-500 rounded-2xl shadow"
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