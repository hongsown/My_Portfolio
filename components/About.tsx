import { motion } from "framer-motion";
import Image from "next/image";
import { textVariants } from "./Slide";
import Spacing from "./Spacing";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiNestjs, SiPrisma } from "react-icons/si";

interface AboutProps {
  isDesktop: boolean;
}

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Angular", icon: FaHtml5, color: "text-red-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
      { name: "Express", icon: FaNodeJs, color: "text-gray-400" },
      { name: "WebSocket", icon: FaNodeJs, color: "text-purple-400" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiPostgresql, color: "text-orange-400" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
    ],
  },
];

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
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          variants={textVariants}
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="relative"
            variants={textVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20" />
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQFyhSYwGhyLlQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715937595816?e=1755734400&v=beta&t=Jh6WF12ObqaA4M5TWiNBOZvqeW9jGNnpbrtHkuuh1qI"
              width={400}
              height={400}
              className="rounded-3xl shadow-2xl relative z-10 mx-auto"
              alt="Nguyen Hong Son"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={textVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-100">
              Full Stack Developer & Tech Enthusiast
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I&apos;m a Full Stack Developer from Sai Gon University (GPA 3.55/4.0) with expertise
              in building scalable web applications and blockchain solutions. My journey started in 2021,
              and I&apos;ve been passionate about creating innovative digital solutions ever since.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently working at XCLUSIVE CORPORATION as a Full Stack Developer, specializing in
              Web3 technologies, blockchain development (Cosmos SDK), and real-time applications.
              I have experience with both frontend (React, Next.js, Angular) and backend (Node.js, NestJS) technologies.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond coding, I&apos;m passionate about sharing knowledge through tutoring,
              contributing to open-source projects, and staying updated with the latest
              tech trends. I believe in writing clean, maintainable code that makes a difference.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
                🏆 First Prize Hackathon SGU 2024
              </div>
              <div className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                📚 TOEIC 4 Skills Certified
              </div>
              <div className="px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm font-medium">
                🎓 University Scholarship Recipient
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-20"
          variants={textVariants}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                viewport={{ once: true }}
              >
                <motion.h4 
                  className="text-xl font-semibold mb-4 text-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {category.title}
                </motion.h4>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        className="flex items-center gap-2 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-all cursor-pointer group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: index * 0.2 + skillIndex * 0.1 + 0.5,
                          type: "spring",
                          bounce: 0.5,
                          duration: 0.6
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(55, 65, 81, 0.7)",
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: skillIndex * 0.5,
                            ease: "easeInOut"
                          }}
                          whileHover={{ 
                            rotate: [0, 360],
                            transition: { duration: 0.6 }
                          }}
                        >
                          <Icon className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform`} />
                        </motion.div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
