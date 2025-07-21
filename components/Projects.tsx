"use client";
import Image from "next/image";
import Spacing from "./Spacing";
import { IconContext, IconType } from "react-icons";
import { listProject } from "@/data";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsFiletypeCss } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import React from "react";
import { motion, Variants } from "framer-motion";
import { textVariants } from "./Slide";
import Link from "next/link";
import { projectType } from "@/type";
interface projectProps {
  isDesktop: boolean;
}
const projectVariant: Variants = {
  offscreen: {
    y: 50,
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
const Projects: React.FC<projectProps> = ({ isDesktop }) => {
  const iconMapping: { [key: string]: IconType } = {
    AiOutlineHtml5,
    BsFiletypeCss,
    DiJavascript1,
    TbBrandNextjs,
    SiTypescript,
  };
  return (
    <motion.div className="py-20" id="projects">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          variants={textVariants}
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listProject.map((project: projectType, index) => (
            <motion.div
              key={project.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={projectVariant}
              custom={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={200}
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.language.map((item) => {
                      const IconComponent = iconMapping[item.icon];
                      return (
                        <div
                          className="flex items-center gap-1 px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                          key={item.key}
                        >
                          {IconComponent && (
                            <IconComponent className="text-sm" />
                          )}
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-3">
                    {project.demo && project.href ? (
                      <>
                        <Link
                          href={project.demo}
                          target="_blank"
                          className="flex-1 text-center py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                        >
                          Live Demo
                        </Link>
                        <Link
                          href={project.href}
                          target="_blank"
                          className="flex-1 text-center py-2 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-gray-400 hover:text-white transition-all"
                        >
                          Source Code
                        </Link>
                      </>
                    ) : (
                      <div className="flex-1 text-center py-2 bg-gray-700/50 text-gray-400 rounded-lg font-medium cursor-not-allowed">
                        🔒 Private Project
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          variants={textVariants}
        >
          <Link
            target="_blank"
            href="https://github.com/hongsown?tab=repositories"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>View all projects on GitHub</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
