import React from "react";
import developer from './assets/developer.webp';
import Services from "./components/services";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import icon from './assets/tick.svg'
import { motion } from 'framer-motion';

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
        <div id="home" className="px-5 mt-40 lg:mt-0 lg:px-30 bg-gray-900">
            <div className="flex flex-col lg:flex-row items-center gap-10 justify-center lg:justify-between mb-5 w-full h-screen  text-white">
                <div className="w-full order-2 lg:order-1 lg:w-[75%] lg:px-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-3xl lg:text-5xl font-bold mb-4 leading-[1.3]">Transform your online presence with speed, design, and strategy.</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-md mb-4 bg-gray-800/95 w-fit p-4 rounded-lg ">
                        No technical headaches, I handle everything for you
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-md mb-2 text-2xl font-bold rounded-lg ">
                        Fast, modern websites built to grow your business.                </motion.p>
                    <motion.ul
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="list-none list-inside mb-8">
                        {professional.map((item) => (
                            <li key={item.id} className="mb-2 text-lg">
                                <img src={icon} alt="tick" className="inline-block w-5 mr-2" />
                                {item.line}
                            </li>
                        ))}
                    </motion.ul>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex space-x-4">
                        <a href="#projects" className="bg-amber-500/20 border border-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300">View My Work</a>
                        <a href="https://www.linkedin.com/in/muhammad-umair-20a5462ab/" target="_blank" className="bg-amber-500/20 border border-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300">Contact Me</a>
                    </motion.div>
                </div>

            </div>
            <Services />
            <About />
            <Skills />

            <Project />
        </div>
    );
}
export default Home;