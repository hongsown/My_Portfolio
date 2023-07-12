"use client";

import { listHeader } from "@/data";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <div
      className="
      bg-[#252525]
      w-full 
    text-center lg:bg-[#3b3b3b] mt-4 rounded-lg g-[#252525]  "
    >
      <div
        className=" flex p-4 font-bold justify-between text-center text-[18px] md:justify-evenly md:text-[20px] sm:text-[12px]
      "
      >
        {listHeader.map((item, id) => {
          return (
            <Link
              key={id}
              to={item.href}
              spy={true}
              smooth={true}
              duration={900}
              offset={-100}
            >
              <div className="cursor-pointer hover:text-blue-400 duration-300">
                {item.title}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
