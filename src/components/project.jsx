import React from "react";
import projectimg from '../assets/project.png'
import projectimg2 from '../assets/pcguys.png'
import projectimg3 from '../assets/bilalhome.png'
import projectimg4 from '../assets/nobelhealth.png'
import projectimg5 from '../assets/ndis.webp'
import { motion } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: 'Ethcial RCM',
        img: projectimg,
        description: 'Medical Billing Services',
        technologies: ['Html', 'Css', 'Wordpress', 'PHP', 'Elementor'],
        link: 'https://ethicalrcmservices.com/'
    },
    {
        id: 2,
        title: 'PC Guys',
        description: 'Pc Store and Custom Builds',
        img: projectimg2,
        technologies: ['Wordpress', 'Elementor', 'PHP', 'Html', 'CSS', 'WooCommerce'],
        link: 'https://pcguyspk.com/'
    },
    {
        id: 3,
        title: 'Bilal Homeopathic Clinic',
        description: 'Clinic Information',
        img: projectimg3,
        technologies: ['Wordpress', 'Elementor', 'Html', 'CSS'],
        link: 'https://www.bilalhomoeopathicclanic.com/?i=1'
    },
    {
        id: 4,
        title: 'Nobel Health Care RCM',
        description: 'Health Care Services',
        img: projectimg4,
        technologies: ['Wordpress', 'Elementor', 'CSS', 'Yoast SEO'],
        link: 'https://nobelhealthcarercm.com/'
    },
    {
        id: 5,
        title: 'Ndis Solutions',
        description: 'Client and Care Management',
        img: projectimg5,
        technologies: ['Wordpress', 'Elementor', 'CSS', 'Yoast SEO'],
        link: 'https://ndis-solutions.com/'
    }

]

const Project = () => {
    return (
        <section id="projects" className="py-16 lg:py-0 bg-gray-900 text-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-2xl lg:text-3xl text-center font-bold mb-8 text-amber-500">
                    <span className="text-white">My</span> Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            key={project.id}
                            className="bg-gray-800/95 rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img src={project.img} alt={project.title} className="w-full h-48" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-amber-500">{project.title}</h3>
                                <p className="text-white mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="py-1 px-3 text-xs font-bold text-white rounded-full bg-amber-500/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-amber-500  underline bg-amber-500/20 hover:bg-amber-500 hover:text-white border border-amber-500 px-4 py-2 rounded-full transition duration-300">
                                    Visit Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;