'use client'
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import { experienceType } from "../types";
import { FaBriefcase, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

interface expProps {
  experiences: experienceType[];
}

const expVariant: Variants = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const Experience: React.FC<expProps> = ({ experiences }) => {
  const [selectedCompany, setSelectedCompany] = useState(experiences[0]?.companies || "");
  
  return (
    <div className="py-20 max-w-7xl mx-auto px-4" id="experience">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h2>
      
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Company Navigation */}
        <motion.div
          className="lg:col-span-1 order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile/Tablet Horizontal Scroll */}
          <div className="lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedCompany(exp.companies)}
                  className={`
                    relative px-4 py-2 text-sm font-medium whitespace-nowrap
                    transition-all duration-300 rounded-full flex-shrink-0
                    ${selectedCompany === exp.companies
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                      : "text-gray-400 bg-gray-800/50 hover:text-white hover:bg-gray-700/50"
                    }
                  `}
                >
                  {exp.companies.split(' ')[0]} {/* Show first word only on mobile */}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Vertical Tabs */}
          <div className="hidden lg:flex flex-col gap-2">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedCompany(exp.companies)}
                className={`
                  relative px-4 py-3 text-left text-sm font-medium
                  transition-all duration-300 rounded-lg
                  ${selectedCompany === exp.companies
                    ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }
                `}
              >
                <span className="relative z-10">{exp.companies}</span>
                {selectedCompany === exp.companies && (
                  <motion.div
                    className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-l-lg"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Experience Details */}
        <div className="lg:col-span-3 order-2">
          {experiences.map((experience) => {
            if (experience.companies !== selectedCompany) return null;
            
            return (
              <motion.div
                key={experience.id}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={expVariant}
                className="space-y-4 lg:space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4 lg:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-100">
                      {experience.role}
                    </h3>
                    {experience.link && (
                      <Link
                        href={experience.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                      >
                        <span>@{experience.companies}</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </Link>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaCalendarAlt className="text-sm flex-shrink-0" />
                    <span className="text-sm">{experience.date}</span>
                  </div>
                </div>
                
                <div className="space-y-3 lg:space-y-4">
                  {experience.description.map((desc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed text-sm lg:text-base">{desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;