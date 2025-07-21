import Link from "next/link";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillFacebook,
} from "react-icons/ai";
import { listSocial } from "@/data";
import { IconType } from "react-icons";

interface ContactProps {
  isDesktop: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDesktop }) => {
  const iconMapping: { [key: string]: IconType } = {
    AiFillLinkedin,
    AiFillGithub,
    AiFillMail,
    AiFillFacebook,
  };

  return (
    <div className="py-20 max-w-4xl mx-auto px-4" id="contact">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I&apos;m a Full Stack Developer specializing in Web3 and blockchain technologies. 
          Feel free to reach out for collaboration, opportunities, or just to connect!
        </p>

        <div className="flex flex-col items-center gap-8">
          <Link
            href="mailto:sonnguyen252003@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105"
          >
            Say Hello
          </Link>

          <div className="flex gap-6">
            {listSocial.map((social, index) => {
              const IconComponent = iconMapping[social.icon];
              return (
                <motion.div
                  key={social.id}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    bounce: 0.5,
                    duration: 0.6
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-all block"
                  >
                    {IconComponent && (
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                          ease: "easeInOut"
                        }}
                      >
                        <IconComponent size={24} className="text-gray-300 hover:text-white transition-colors" />
                      </motion.div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="text-center mt-20 py-8 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p className="text-gray-400 text-sm">
        Designed & Built by{" "}
        <span className="text-purple-400 font-semibold">Nguyen Hong Son</span>
      </p>
      <p className="text-gray-500 text-xs mt-2">© {currentYear} All rights reserved</p>
    </motion.footer>
  );
};

export default Contact;