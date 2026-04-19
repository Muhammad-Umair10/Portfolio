import React from "react";
import developer from './assets/developer.webp';
import Services from "./services";
import Skills from "./skills";
import Project from "./project";
import icon from './assets/tick.svg'

const professional = [
    {
        id: 1,
        line: 'Custom website design tailored to your brand'
    },
    {
        id: 2,
        line: 'Fast and responsive development for all devices'
    },
    {
        id: 3,
        line: 'SEO optimization to boost your online visibility'
    }
]

const Home = () => {
    return (
        <div className="px-5 mt-40 lg:mt-0 lg:px-30 bg-gray-900">
        <div className="flex flex-col lg:flex-row items-center gap-10 justify-center lg:justify-between mb-5 w-full h-screen  text-white">
            <div className="w-full order-2 lg:order-1 lg:w-[75%] lg:px-10">
                <h1 className="text-5xl font-bold mb-4 leading-[1.3]">Transform your online presence with speed, design, and strategy.</h1>
                <p className="text-md mb-4 bg-gray-800/95 w-fit p-4 rounded-lg ">
                    No technical headaches — I handle everything for you
                </p>
                <p className="text-md mb-2 text-2xl font-bold rounded-lg ">
                    Fast, modern websites built to grow your business.                </p>
                <ul className="list-none list-inside mb-8">
                    {professional.map((item) => (
                        <li key={item.id} className="mb-2 text-lg">
                            <img src={icon} alt="tick" className="inline-block w-5 mr-2"/>
                            {item.line}
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-4">   
                    <button className="bg-amber-500/20 border border-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300">View My Work</button>
                    <button className="bg-amber-500/20 border border-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300">Contact Me</button>
                </div>
            </div>
            
        </div>
        <Services />
        <div className="flex flex-col gap-5 lg:flex-row items-start justify-between  w-full h-screen bg-gray-900 text-white">
            
            <div className="w-full lg:w-[50%] flex items-center justify-center">
                <img src={developer} alt="Hero" className="w-full object-cover h-125 rounded-2xl"/>
            </div>
            <div className="w-full lg:w-[50%] lg:px-10">
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <p className="text-md mb-8 text-white p-4 rounded-lg bg-gray-800/95">
                    I am a dedicated Full-Stack Web Developer and Designer driven by the challenge of turning complex ideas into high-performance digital experiences. With a focus on blending technical precision with modern aesthetics, I build responsive, user-centric websites that don't just look great—they perform seamlessly.
                    My expertise spans the entire development lifecycle, from conceptualizing sleek UI/UX designs in Figma to deploying robust, scalable applications. Whether I’m crafting custom themes in WordPress using Elementor Pro or building dynamic, data-driven platforms from the ground up, I prioritize clean code and intuitive navigation.
                </p>
                <button className="bg-amber-500/20 border border-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300">Contact Me</button>
                

            </div>
        </div>
        <Skills />

        <Project />
        </div>
    );
}
export default Home;