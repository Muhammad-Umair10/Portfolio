import React from "react";
import heroImg from './assets/hero-person.png'
import developer from './assets/developer.webp'
import Skills from "./skills";
import Project from "./project";
const Home = () => {
    return (
        <div className="px-5 mt-40 lg:mt-0 lg:px-30 bg-gray-900">
        <div className="flex flex-col lg:flex-row items-center gap-10 justify-center lg:justify-between mb-20 w-full h-screen  text-white">
            <div className="w-full order-2 lg:order-1 lg:w-[50%] lg:px-10">
                <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-md mb-8">
                    I am a passionate developer specializing in web development and design.
                </p>
                <div className="flex space-x-4">   
                    <button className="bg-amber-500/20 border border-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300">View My Work</button>
                    <button className="bg-amber-500/20 border border-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300">Contact Me</button>
                </div>
            </div>
            <div className="w-full order-1 lg:order-2 lg:w-[50%] flex items-center justify-center lg:justify-end">
                <img src={heroImg} alt="Hero" className="w-auto h-[500px]"/>
            </div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row items-start justify-between mb-20 w-full h-screen bg-gray-900 text-white">
            
            <div className="w-full lg:w-[50%] flex items-center justify-center">
                <img src={developer} alt="Hero" className="w-[500px] object-cover h-[500px] rounded-2xl"/>
            </div>
            <div className="w-full lg:w-[50%] lg:px-10">
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <p className="text-md mb-8 text-white p-4 rounded-lg bg-gray-800/95">
                    I am a passionate developer specializing in web development and design.
                </p>
                <div className="flex space-x-4">   
                    <button className="bg-amber-500/20 border border-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300">Learn More</button>
                </div>
            </div>
        </div>
        <Skills />
        <Project />
        </div>
    );
}
export default Home;