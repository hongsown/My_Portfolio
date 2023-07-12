import { headerType, projectType } from "./type";
export let listHeader: headerType[] = [
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Experience",
    href: "experience",
  },
  {
    title: "Contact",
    href: "contact",
  },
];
export let listProject: projectType[] = [
  {
    id: 1,
    title: "MP3 Player",
    description:
      "A project using basic HTML, CSS, and JavaScript for my Summer 2021 where you can choose and listen to music, with a website featuring animations and a visually appealing UI.",
    image: "/images/mp3project.png",
    demo: "https://ahihison.github.io/MusicPlayer/",
    href: "https://github.com/ahihison/MusicPlayer",
    language: [
      {
        key: "html",
        name: "HTML",
        icon: "AiOutlineHtml5",
      },
      {
        key: "css",
        name: "CSS",
        icon: "BsFiletypeCss",
      },
      {
        key: "javascript",
        name: "JavaScript",
        icon: "DiJavascript1",
      },
    ],
  },
  {
    id: 2,
    title: "Cara Shop",
    description:
      "Our web-based e-commerce application allows seamless online shopping for a variety of clothes. Customers can make purchases while the admin maintains control over sales. Enjoy an effortless shopping experience today.",
    image: "/images/mp3project.png",
    demo: "https://ahihison.github.io/MusicPlayer/",
    href: "https://github.com/ahihison/MusicPlayer",
    language: [
      {
        key: "html",
        name: "HTML",
        icon: "AiOutlineHtml5",
      },
      {
        key: "css",
        name: "CSS",
        icon: "BsFiletypeCss",
      },
      {
        key: "javascript",
        name: "JavaScript",
        icon: "DiJavascript1",
      },
    ],
  },
];
