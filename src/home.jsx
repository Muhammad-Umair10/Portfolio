import React from "react";
import developer from './assets/developer.webp';
import Services from "./components/services";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import icon from './assets/tick.svg'
import { motion } from 'framer-motion';
import Faq from "./components/faq";
import Contact from "./components/contact";

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
        // FIXED: Changed lg:w-[10%] to w-full and made it flex-col across all screen sizes so sections stack correctly
        <div id="home" className="w-full flex flex-col mt-25 bg-gray-900 text-white px-4 md:px-10 lg:mt-30 lg:px-30 ">
            
            {/* FIXED: Changed h-screen to min-h-screen to prevent mobile text truncation, and optimized padding */}
            <div className="flex flex-col lg:flex-row items-center gap-10 justify-center lg:justify-between lg:py-0 w-full text-white">
                <div className="max-w-3xl"> {/* Added max-width to keep typography clean on huge monitors */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
                        Transform your online presence with speed, design, and strategy.
                    </motion.h1>
                    
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
                        className="mb-4 text-xl sm:text-2xl font-bold rounded-lg ">
                        Fast, modern websites built to grow your business.
                    </motion.p>
                    
                    <motion.ul
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="list-none list-inside mb-8">
                        {professional.map((item) => (
                            <li key={item.id} className="mb-3 text-base sm:text-lg flex items-start">
                                <img src={icon} alt="tick" className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <span>{item.line}</span>
                            </li>
                        ))}
                    </motion.ul>
                    
                    {/* FIXED: Added sm:flex-row to stack buttons nicely on ultra-small screens */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-row sm:flex-row gap-3">
                        <a href="#projects" className="bg-amber-500/20 border border-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300 text-center">
                            View My Work
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-umair-20a5462ab/" target="_blank" rel="noopener noreferrer" className="bg-amber-500/20 border border-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300 text-center">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
            
            {/* Inner sections flow sequentially down the layout */}
            <Services />
            <About />
            <Project />
            <Skills />
            <Faq />
            <Contact />
        </div>
    );
}

export default Home; 