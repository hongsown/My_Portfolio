"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export let textVariants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const imageVariants: Variants = {
  offscreen: {
    scale: 0.8,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.2,
    },
  },
};

const Slide = () => {
  return (
    <motion.div
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center relative overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 -z-10" />
      
      {/* Animated background circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-4xl mx-auto px-4 z-10">
        <motion.div
          className="text-lg md:text-xl mb-4 text-gray-400 font-medium"
          variants={textVariants}
        >
          Welcome to my portfolio
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          variants={textVariants}
        >
          Hi, I&apos;m <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Nguyen Hong Son</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-2 text-gray-300"
          variants={textVariants}
        >
          Full Stack Developer
        </motion.p>
        
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-400"
          variants={textVariants}
        >
          SGU&apos;21 | Passionate about creating impactful web experiences
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-4 mb-8"
          variants={textVariants}
        >
          <Link 
            href="https://github.com/hongsown" 
            target="_blank"
            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-all hover:scale-110"
          >
            <AiFillGithub size={24} />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/nguy%E1%BB%85n-s%C6%A1n-a6656a163/" 
            target="_blank"
            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-all hover:scale-110"
          >
            <AiFillLinkedin size={24} />
          </Link>
          <Link 
            href="mailto:sonnguyen252003@gmail.com"
            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-all hover:scale-110"
          >
            <AiFillMail size={24} />
          </Link>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            target="_blank"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105"
            href="/NguyenHongSon_CV_Fullstack.pdf"
          >
            View My CV
          </Link>
          <Link
            href="#projects"
            className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-gray-400 hover:text-white transition-all hover:scale-105"
          >
            View Projects
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Slide;
