import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <div className="lg:mx-[160px]">
      <Header />
      <Slide />

      <Projects />
    </div>
  );
}
