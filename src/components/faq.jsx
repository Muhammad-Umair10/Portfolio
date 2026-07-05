import React, { useState } from 'react';
import { FiExternalLink, FiChevronDown, FiArrowUp } from 'react-icons/fi';




import { motion } from 'framer-motion';

const faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I provide professional web development services including WordPress website design, custom WordPress development, eCommerce stores, blogging websites, and custom web applications using Laravel, Tailwind CSS, JavaScript, PHP, and MySQL."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, all websites I create are fully responsive and optimized for mobile, tablet, and desktop devices to ensure the best user experience."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! I can redesign your current website to improve its design, performance, and user experience, making it modern and conversion-focused."
    },
    {
      question: "Will I be able to update the website myself?",
      answer: "Yes, especially with WordPress websites, you will have full control to easily update content, images, and pages. I can also guide you if needed."
    },
    {
      question: "Do you provide website maintenance?",
      answer: "Yes, I offer ongoing maintenance services including updates, bug fixes, security improvements, and performance optimization."
    }
  ];

  return (
    <div className="min-h-screen text-white flex flex-col justify-center px-6 md:px-16 lg:px-32 relative overflow-hidden font-sans">

      <div className="w-full py-20 relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-3xl lg:text-3xl font-bold mb-6 flex items-center tracking-tight leading-tight">
          FAQs (Frequently Asked Questions)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#a1a1aa] text-base md:text-lg lg:text-[19px] mb-12 w-full font-normal leading-relaxed">
          Have questions about my web development services? Here are answers to some of the most common questions about website design, development, maintenance, and how the overall project process works.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full relative">
          <div className="border-t border-[#1e1e1e]"></div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#1e1e1e]">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
              >
                <span className="text-[15px] md:text-[17px] font-medium text-gray-200 group-hover:text-white transition-colors tracking-wide pr-8">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`text-gray-500 text-xl transition-transform duration-300 ease-in-out shrink-0 ${openIndex === index ? 'rotate-180 text-white' : ''
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${openIndex === index ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <p className="text-[#a1a1aa] text-sm md:text-[15px] leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default faq;
