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
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
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
    <motion.div>
      <Spacing />
      <motion.div
        className="mt-32"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <motion.h1
          className="text-5xl font-bold text-[#bad2ff] flex justify-center"
          variants={textVariants}
        >
          Projects
        </motion.h1>
      </motion.div>

      <div className="md:flex md:flex-wrap gap-x-8 md:gap-x-24 md:justify-center">
        {listProject.map((project: projectType) => (
          <Link
            href={project.demo}
            target="_blanck"
            className="mt-10 cursor-pointer"
          >
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={projectVariant}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              id="projects"
              className="mt-10 max-w-[320px]  max-h-[320px] bg-[#ededed]
          mx-auto rounded-lg  md:max-w-[330px] md:text-[16px] md:min-w-[300px] md:min-h-[450px] md:max-h-[490px]"
            >
              <motion.div className="flex flex-col">
                <Image
                  className="overflow-hidden rounded-t-lg md:min-h-[200px]"
                  width={isDesktop ? "625" : "320"}
                  height={isDesktop ? "400" : "149"}
                  src={project.image}
                  alt="Mp3 project picture"
                />

                <div className="h-[60%]  ">
                  <div className="text-[#252525] text-[16px] font-bold my-4 text-center md:text-[18px]">
                    {project.title}
                  </div>
                  <div className="flex flex-wrap text-8 font-bold justify-start ml-3">
                    {project.language.map((item) => {
                      const IconComponent = iconMapping[item.icon];
                      return (
                        <div className="flex mr-2 mb-2 bg-blue-400 py-1 px-2 rounded-md justify-center items-center gap-x-1 text-[10px] text-[#252525] md:px-3 md:py-2">
                          {IconComponent && (
                            <IconContext.Provider value={{ className: "icon" }}>
                              <IconComponent size={16} />
                            </IconContext.Provider>
                          )}
                          {item.name}
                        </div>
                      );
                    })}
                  </div>
                  <div className="overflow-hidden max-h-[60px] mb-[32px]  max-w-[368px] text-[10px] text-[#252525] font-medium mx-3 md:text-[14px] md:mt-4">
                    {project.description}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="my-24 py-4 text-center">
        <Link
          target="_blanck"
          href="https://github.com/ahihison?tab=repositories"
          className="relative text-center text-[#BAD2ff] font-bold text-[18px] mb-10 hover:text-[#6f7f9b] transition"
        >
          See more in my Github
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
