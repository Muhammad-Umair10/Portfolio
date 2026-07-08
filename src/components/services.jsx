import React from "react";
import layers from '../assets/layers.svg';
import { motion } from 'framer-motion';
import suitcase from '../assets/suitcase.svg';
import cart from '../assets/shopping-cart.svg';

const skillsData = [
  {
    id: 1,
    name: 'Professional websites for businesses',
    description: 'Strengthen your brand with a professional website. Our web design is ideal for service providers and companies that need a comprehensive digital hub.',
    img: suitcase
  },
  {
    id: 2,
    name: 'E-commerce & online shops',
    description: 'Launch your online store. We offer professional web design for scalable e-commerce solutions, from small boutiques to large retailers.',
    img: cart
  },
  {
    id: 3,
    name: 'Landing pages & one-pagers',
    description: 'Generate leads and increase conversions with targeted web design. Perfect for marketing campaigns or as a digital website business card.',
    img: layers
  }
];

const Services = () => {
  return (
    <div id="services" className="flex flex-col gap-5 lg:gap-10 mt-20 lg:my-20 items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center gap-5"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center">High-Performance Web Development Services</h2>
        <p className="text-center text-white max-w-2xl text-lg">
          Building high-performance, scalable WordPress and custom web applications meticulously tailored to your unique business requirements.
        </p>
      </motion.div>

      {/* --- Responsive Grid Container --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 w-full max-w-7xl justify-items-center">
        {skillsData.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15, ease: "easeOut" }}
            key={skill.id}
            className="bg-amber-500/20 shadow-md transition-all duration-300 shadow-amber-500/60 hover:bg-amber-500/80 group w-full p-6 border border-amber-500 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-start gap-4 mb-4">
                <img
                  className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300 shrink-0"
                  height={40}
                  width={40}
                  src={skill.img}
                  alt={skill.name}
                />
                <h5 className="text-2xl group-hover:text-white font-semibold text-amber-500 leading-snug">
                  {skill.name}
                </h5>
              </div>
              <p className="text-white/90 text-base leading-relaxed">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;