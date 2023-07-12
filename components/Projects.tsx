import Image from "next/image";
import Spacing from "./Spacing";
import { RiJavascriptLine } from "react-icons/ri";
const Projects: React.FC = () => {
  return (
    <div>
      <Spacing />
      <div className="mt-32">
        <h1 className="text-5xl font-bold text-[#bad2ff] flex justify-center">
          Projects
        </h1>
      </div>
      <div className="mt-32">
        <div
          id="projects"
          className="mt-10 max-w-[320px]  max-h-[320px] bg-white
          mx-auto rounded-lg"
        >
          <div className="flex flex-col">
            <div className="h-[40%] w-full rounded-lg overflow-hidden">
              <Image
                width={320}
                height={320}
                src="/image/mp3project.png"
                alt="Mp3 project picture"
              />
            </div>
            <div className="h-[60%] bg-">
              <div className="text-[#252525] text-[16px] font-bold my-4 text-center">
                Title
              </div>
              <div className="flex flex-wrap text-8 font-bold justify-start ml-3">
                <div className="flex mr-2 mb-2 bg-blue-400 py-1 px-2 rounded-md justify-center items-center gap-x-1 text-[10px] text-[#252525]">
                  <RiJavascriptLine size={20} />
                  Python
                </div>
                <div className="flex mb-2 bg-blue-400 py-1 px-2 rounded-md justify-center items-center gap-x-1 text-[10px] text-[#252525]">
                  <RiJavascriptLine size={20} />
                  Python
                </div>
              </div>
              <div className="overflow-hidden max-h-[60px] mb-[32px]  max-w-[368px] text-[10px] text-[#252525] font-medium ml-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                rerum doloremque quam aut, quos, modi harum explicabo cumque
                numquam dolore recusandae? Illo ullam, fuga asperiores quisquam
                doloremque quo iure voluptate?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <div
          id="projects"
          className="mt-10 max-w-[320px]  max-h-[320px] bg-white
          mx-auto rounded-lg"
        >
          <div className="flex flex-col">
            <div className="h-[40%] w-full rounded-lg overflow-hidden">
              <Image
                width={320}
                height={320}
                src="/image/mp3project.png"
                alt="Mp3 project picture"
              />
            </div>
            <div className="h-[60%] bg-">
              <div className="text-[#252525] text-[16px] font-bold my-4 text-center">
                Title
              </div>
              <div className="flex flex-wrap text-8 font-bold justify-start ml-3">
                <div className="flex mr-2 mb-2 bg-blue-400 py-1 px-2 rounded-md justify-center items-center gap-x-1 text-[10px] text-[#252525]">
                  <RiJavascriptLine size={20} />
                  Python
                </div>
                <div className="flex mb-2 bg-blue-400 py-1 px-2 rounded-md justify-center items-center gap-x-1 text-[10px] text-[#252525]">
                  <RiJavascriptLine size={20} />
                  Python
                </div>
              </div>
              <div className="overflow-hidden max-h-[60px] mb-[32px]  max-w-[368px] text-[10px] text-[#252525] font-medium ml-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                rerum doloremque quam aut, quos, modi harum explicabo cumque
                numquam dolore recusandae? Illo ullam, fuga asperiores quisquam
                doloremque quo iure voluptate?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
