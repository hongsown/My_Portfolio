"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Slide from "@/components/Slide";
import { experiences } from "@/data";
import { useEffect, useState } from "react";
export default function Home() {
  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined,
  });
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (windowSize.width >= 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [windowSize.width]);
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Slide />
        <Projects isDesktop={isDesktop} />
        <About isDesktop={isDesktop} />
        <Experience experiences={experiences} />
        <Contact isDesktop={isDesktop} />
      </main>
    </div>
  );
}
