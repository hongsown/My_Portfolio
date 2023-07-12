import Link from "next/link";
import Spacing from "./Spacing";
interface ContactProps {
  isDesktop: boolean;
}
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillFacebook,
} from "react-icons/ai";
import { listSocial } from "@/data";
import { IconContext, IconType } from "react-icons";

const Contact: React.FC<ContactProps> = ({ isDesktop }) => {
  const iconMapping: { [key: string]: IconType } = {
    AiFillLinkedin,
    AiFillGithub,
    AiFillMail,
    AiFillFacebook,
  };
  return (
    <>
      <Spacing isDeskTop={isDesktop} />
      <div
        id="contact"
        className="font-bold text-5xl flex justify-center mt-20 text-[#bad2ff]"
      >
        Contact Me
      </div>
      <div className="font-bold text-center my-16 px-8">
        Currently active looking for Summer 2023 Software Engineer internship.
      </div>
      <div className="flex justify-center items-center gap-x-12 text-[#bad2ff] cursor-pointer">
        {listSocial.map((social) => {
          const IconComponent = iconMapping[social.icon];
          return (
            <Link key={social.id} href={social.href} target="_blanck">
              {IconComponent && (
                <IconContext.Provider value={{ className: "icon" }}>
                  <IconComponent size={24} />
                </IconContext.Provider>
              )}
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
const Footer: React.FC = () => {
  return (
    <footer className="text-center text-12 my-6 md:text-16">
      <p>
        Designed and made with 💙 by
        <span className="font-semibold"> Vincent Dev </span>
      </p>
      <p className="font-semibold"> @2023 </p>
    </footer>
  );
};
export default Contact;
