"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export let textVariants: Variants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const slideUpVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const fadeInVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.9,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.6,
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
      variants={containerVariants}
    >
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Animated background circles */}
      <motion.div 
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 z-10">
        <motion.div
          className="text-lg md:text-xl mb-4 text-gray-400 font-medium"
          variants={fadeInVariants}
        >
          Welcome to my portfolio
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          variants={slideUpVariants}
        >
          Hi, I&apos;m <motion.span 
            className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Nguyen Hong Son
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-2 text-gray-300"
          variants={slideUpVariants}
        >
          Full Stack Developer
        </motion.p>
        
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-400"
          variants={fadeInVariants}
        >
          SGU&apos;21 | Passionate about creating impactful web experiences
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-4 mb-8"
          variants={containerVariants}
        >
          {[
            { href: "https://github.com/hongsown", icon: AiFillGithub },
            { href: "https://www.linkedin.com/in/nguy%E1%BB%85n-s%C6%A1n-a6656a163/", icon: AiFillLinkedin },
            { href: "mailto:sonnguyen252003@gmail.com", icon: AiFillMail }
          ].map((social, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={social.href}
                target="_blank"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-all block"
              >
                <social.icon size={24} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={slideUpVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              target="_blank"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              href="/NguyenHongSon_CV_Fullstack.pdf"
            >
              View My CV
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ 
              scale: 1.05,
              borderColor: "#9CA3AF"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#projects"
              className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-gray-400 hover:text-white transition-all"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2"
            animate={{ 
              height: [12, 8, 12],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Slide;
