'use client';

import { motion } from 'framer-motion';
import { FaRobot, FaHandHoldingMedical, FaMapMarkerAlt , FaAtom, FaFortAwesome, FaCog } from "react-icons/fa";

const ProjectsSection = () => {
    return (
      <motion.section id="projects" className="py-20 px-8 bg-[rgba(20,22,30,1)] text-gray-200 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-100">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center hover:brightness-110 hover:scale-105 transition duration-300">
          <div className="w-[100px] h-[100px] flex items-center justify-center bg-gray-700 rounded-lg">
            <FaRobot className="text-cyan-200 text-6xl" />
          </div>
          <a 
            href="https://github.com/ArcticCodeMonkeys/PyGuide.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl font-semibold mt-4 text-blue-100 hover:text-cyan-300 transition">
            PyGuide.ai
          </a>
          <p className="mt-2 text-gray-300 text-xs">An OpenAI Powered Teaching Tool to Teach Python Like Never Before.</p>
        </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center hover:brightness-110 hover:scale-105 transition duration-300">
            <div className="w-[100px] h-[100px] flex items-center justify-center bg-gray-700 rounded-lg">
              <FaHandHoldingMedical className="text-cyan-200 text-6xl" />
            </div>
            <a 
              href="https://github.com/Happyseaweed/BioMechDesignTeam_EMG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-semibold mt-4 text-blue-100 hover:text-cyan-300 transition">EMG Fabric
            </a>
            <p className="mt-2 text-gray-300 text-xs">Empowering Accessibility: ML Meets EMG Sensors for Seamless Gesture Recognition.</p>

          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center hover:brightness-110 hover:scale-105 transition duration-300">
            <div className="w-[100px] h-[100px] flex items-center justify-center bg-gray-700 rounded-lg">
              <FaMapMarkerAlt className="text-cyan-200 text-6xl" />
            </div>
            <a 
              href="https://github.com/PeterAlpajaro/Dietary_mAPP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-semibold mt-4 text-blue-100 hover:text-cyan-300 transition">My Diet Mapp
            </a>
            <p className="mt-2 text-gray-300 text-xs">Save Countless Hours Looking for Restaurants With Your Personal Diet Map.</p>

          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center hover:brightness-110 hover:scale-105 transition duration-300">
            <div className="w-[100px] h-[100px] flex items-center justify-center bg-gray-700 rounded-lg">
              <FaAtom className="text-cyan-200 text-6xl" />
            </div>
            <a 
              href="https://github.com/DJFiya/Physics-Simulator-JS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-semibold mt-4 text-blue-100 hover:text-cyan-300 transition">Physics Simulator
            </a>
            <p className="mt-2 text-gray-300 text-xs">Solves Complex Physics Simulations including the 3 Body Problem.</p>

          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center hover:brightness-110 hover:scale-105 transition duration-300">
            <div className="w-[100px] h-[100px] flex items-center justify-center bg-gray-700 rounded-lg">
              <FaFortAwesome className="text-cyan-200 text-6xl" />
            </div>
            <a 
              href="https://github.com/Shivank086/RPG-ISU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-semibold mt-4 text-blue-100 hover:text-cyan-300 transition">Legend of Caelum
            </a>
            <p className="mt-2 text-gray-300 text-xs">A Rogue-Like Tower-Climbing Game Summoning Your Inner-Child.</p>

          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center hover:brightness-110 hover:scale-105 transition duration-300">
            <div className="w-[100px] h-[100px] flex items-center justify-center bg-gray-700 rounded-lg">
              <FaCog className="text-cyan-200 text-6xl" />
            </div>
            <a 
              href="https://github.com/DJFiya/Gear_Runner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-semibold mt-4 text-blue-100 hover:text-cyan-300 transition">Gear Runner
            </a>
            <p className="mt-2 text-gray-300 text-xs">A Fast-Paced Survival Game: Every Decision Counts.</p>

          </div>


        </div>
        
        
      </motion.section>
    );
};

export default ProjectsSection;