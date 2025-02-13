'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
      <motion.section id="about" className="py-20 px-8 bg-[rgba(10,11,15,1)] text-gray-300 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-100">About Me</h2>
        <p className="mt-4 max-w-3xl mx-auto">A University of Waterloo biomedical engineering student passionate about computer science.</p>
        <p className="mt-4 max-w-3xl mx-auto">Combining human factors with app, game and software design.</p>
      </motion.section>
    );
};

export default AboutSection;

