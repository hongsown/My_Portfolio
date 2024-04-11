import { motion } from "framer-motion";
import Image from "next/image";
import { textVariants } from "./Slide";
import Spacing from "./Spacing";
interface AboutProps {
  isDesktop: boolean;
}

const About: React.FC<AboutProps> = ({ isDesktop }) => {
  return (
    <>
      <Spacing isDeskTop={isDesktop} />
      <motion.div
        id="about"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={textVariants}
        className="flex flex-col justify-center items-center gap-y-10 text-center font-bold mx-4 md:flex-wrap"
      >
        <div className="font-bold text-5xl flex justify-center mt-20 text-[#bad2ff]">
          About
        </div>
        <div className="md:flex flex flex-col items-center justify-center gap-y-6 md:flex-row">
          <Image
            src="/image/avt2.jpg"
            width={isDesktop ? 120 : 100}
            height={isDesktop ? 120 : 100}
            className="rounded-full md:mr-14"
            alt="Picture of the author"
          />
          <div className="md:flex md:flex-col md:gap-y-4 md:text-start">
            <div className="my-[8px]">
              I am a student at Sai Gon University who started programming back
              in 2021, turning it into a hobby.
            </div>
            <div className="my-[8px]">
              My experience is mostly about Frontend development, my goal is to
              become a Fullstack developer in the future.
            </div>
            <div className="my-[8px]">
              Apart from programming, I enjoy traveling, listening to music,
              reading books, playing sports, and sharing knowledge with others.
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
