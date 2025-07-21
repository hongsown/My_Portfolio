"use client";

import { listHeader } from "@/data";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav
          className={`backdrop-blur-md rounded-full px-6 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-gray-900/80 shadow-lg shadow-black/20"
              : "bg-gray-800/30"
          }`}
        >
          <ul className="flex justify-center items-center gap-8">
            {listHeader.map((item, id) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: id * 0.1 }}
              >
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  duration={900}
                  offset={-100}
                  className="cursor-pointer text-gray-300 hover:text-white font-medium transition-colors relative group"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;