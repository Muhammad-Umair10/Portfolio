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
    <div id="services" className="flex flex-col items-center justify-center mb-20 w-full text-white gap-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">High-Performance Web Development Services</h2>
        <p className="text-center text-white max-w-2xl text-lg">
          Building high-performance, scalable WordPress and custom web applications meticulously tailored to your unique business requirements.
        </p>
      </motion.div>

      <div className="justify-items-center grid lg:grid-cols-3 md:grid-cols-4 gap-5 pb-20 w-full">
        {skillsData.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15, ease: "easeOut" }}
            key={skill.id}
            className="bg-amber-500/20 shadow-md transition-all duration-300 shadow-amber-500/60 hover:bg-amber-500/80 group  w-full max-w-sm p-6 border border-amber-500 rounded-2xl"
          >
            <div className="flex items-center justify-start gap-4">
              <img
                className=" mb-3 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                height={40}
                width={40}
                src={skill.img}
                alt={skill.name}
              />
              <h5 className="mb-2 text-2xl group-hover:text-white font-semibold text-amber-500">
                {skill.name}
              </h5>
            </div>
            <p className="text-white">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

  );
};

export default Services;