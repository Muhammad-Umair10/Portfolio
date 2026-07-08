import React from "react";
import developer from '../assets/developer.webp';
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

const About = () => {
    return (
        <div id="about" className="flex gap-10 flex-col lg:gap-5 lg:flex-row items-start justify-between bg-gray-900 mt-15 text-white">

            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full lg:w-[50%] flex items-center justify-center">
                <img src={developer} alt="Hero" className="w-full object-cover h-125 rounded-2xl" />
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full lg:w-[50%] lg:px-10">
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <p className="text-md mb-8 text-white p-4 rounded-lg bg-gray-800/95">
                    I am a dedicated Full-Stack Web Developer and Designer driven by the challenge of turning complex ideas into high-performance digital experiences. With a focus on blending technical precision with modern aesthetics, I build responsive, user-centric websites that don't just look great—they perform seamlessly.
                    My expertise spans the entire development lifecycle, from conceptualizing sleek UI/UX designs in Figma to deploying robust, scalable applications. Whether I’m crafting custom themes in WordPress using Elementor Pro or building dynamic, data-driven platforms from the ground up, I prioritize clean code and intuitive navigation.
                </p>
                <button className="bg-amber-500/20 border border-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300">Contact Me</button>


            </motion.div>
        </div>
    );
}
export default About;