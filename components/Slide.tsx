"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
export let textVariants: Variants = {
  offscreen: {
    x: -200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2,
    },
  },
};

const Slide = () => {
  return (
    <motion.div
      className="mt-[144px] flex flex-col text-center font-bold "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.div
        className=" text-5xl mb-8 text-center"
        variants={textVariants}
      >
        Xin Chao,
      </motion.div>
      <motion.div className="text-5xl mb-8" variants={textVariants}>
        I&apos;m <span className="text-[#BAD2ff]">VinCent Dev</span>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        className="mb-8 text-2xl"
      >
        SGU&apos;21 | Software Engineer
      </motion.div>
      <motion.div
        className="  md:absolute md:right-[28%] md:top-[22%]"
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
      >
        <Image
          className="rounded-full mx-auto mt-8 w-[115px] h-[115px]"
          src="/image/avt1.jpg"
          alt="A picture avatar"
          width={115}
          height={115}
        />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        className="mt-8 "
      >
        <Link
          target="_blank"
          className="text-black font-bold bg-[#bad2ff] p-2 w-[124px] mx-auto rounded-lg text-[18px] hover:text-white transition cursor-pointer hover:bg-[#6f7f9b] "
          href="https://www.topcv.vn/xem-cv/CVBWUABSCllWV18PD1EAVgACUgEHBAcBBQcCBw5cbe"
        >
          My resume
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Slide;
