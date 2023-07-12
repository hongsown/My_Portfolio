"use client";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Slide from "@/components/Slide";
import { use, useEffect, useState } from "react";
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
  });
  return (
    <div className="lg:mx-[160px]">
      <Header />
      <Slide />

      <Projects isDesktop={isDesktop} />
    </div>
  );
}
