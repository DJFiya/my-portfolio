'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDiscord } from 'react-icons/fa';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Background Image */}
      <Image 
        src="https://djfiya.github.io/my-portfolio/moonlit-trees.jpg" 
        alt="Moonlit Trees" 
        layout="fill" 
        objectFit="cover" 
        objectPosition="top"
        className="opacity-50"
      />
      
      {/* Opacity Layer */}
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Animated Text */}
      <motion.h1 
        className="text-4xl md:text-6xl font-bold relative z-10"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: "easeOut"}}
      >
        Daevik Jain&rsquo;s Portfolio
      </motion.h1>

      {/* Social Icons */}
      <div className="flex gap-6 mt-6 relative z-10">
        <a href="https://linkedin.com/in/daevik-jain" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-400 text-3xl hover:text-white transition duration-300" />
        </a>
        <a href="https://github.com/djfiya" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-400 text-3xl hover:text-white transition duration-300" />
        </a>
        <a href="mailto:d59jain@uwaterloo.ca">
          <FaEnvelope className="text-gray-400 text-3xl hover:text-white transition duration-300" />
        </a>
        <a href="tel:+16476157812">
          <FaPhone className="text-gray-400 text-3xl hover:text-white transition duration-300" />
        </a>
        <a href="https://discord.com/users/dvk29">
          <FaDiscord className="text-gray-400 text-3xl hover:text-white transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
