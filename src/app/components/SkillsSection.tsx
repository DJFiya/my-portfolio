'use client';

import { motion } from 'framer-motion';
import { FaCode, FaTools, FaLaptopCode } from 'react-icons/fa';

const SkillsSection = () => {
    return (
      <motion.section id="skills" className="py-20 px-8 bg-[rgba(30,33,50,1)] text-gray-100 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-100">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          
          <div className="bg-gray-700 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
            <div className="flex items-center justify-center gap-2 text-blue-300">
              <FaCode size={20} />
              <h3 className="text-lg font-semibold">Languages</h3>
            </div>
            <p className="text-gray-300 mt-2">JavaScript, TypeScript, HTML/CSS, Python, Java, C++, MATLAB, SQL</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
            <div className="flex items-center justify-center gap-2 text-blue-300">
              <FaLaptopCode size={20} />
              <h3 className="text-lg font-semibold">Frameworks & Libraries</h3>
            </div>
            <p className="text-gray-300 mt-2">Expo, React, Next.js, Node.js, Tailwind, TensorFlow, Matplotlib, Tkinter, Selenium, Swing</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
            <div className="flex items-center justify-center gap-2 text-blue-300">
              <FaTools size={20} />
              <h3 className="text-lg font-semibold">Tools & Technologies</h3>
            </div>
            <p className="text-gray-300 mt-2">GitHub, VSCode, Visual Studio, Eclipse, CLion, OpenAI API, SolidWorks</p>
          </div>

        </div>
      </motion.section>
    );
};

export default SkillsSection;
