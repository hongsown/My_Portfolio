import { headerType, projectType } from "./type";
import { AiOutlineHtml5 } from "react-icons/ai";
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
    image: "/image/mp3project.png",
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
    image: "/image/shopproject.png",
    demo: "https://ahihison.github.io/DoAnWeb1_SGU/",
    href: "https://github.com/ahihison/DoAnWeb1_SGU",
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
    id: 3,
    title: "Youtube Clone",
    description:
      "Our project is a YouTube clone utilizing RapidAPI, offering users the ability to search and watch videos. Additionally, users can explore profiles of YouTubers, leave comments, and engage with the community.",
    image: "/image/youtubeproject.png",
    demo: "https://youtubevincentdev.netlify.app/",
    href: "https://github.com/ahihison/YoutubeApp",
    language: [
      {
        key: "react",
        name: "ReactJS",
        icon: "AiOutlineHtml5",
      },
    ],
  },
  {
    id: 4,
    title: "Spotify Clone",
    description:
      "A Spotify-inspired clone, our FullStack project enables seamless music streaming for all. Discover and listen to your favorite tracks while unlocking premium features with secure Stripe payments. Enjoy the ultimate music experience on our website.",
    image: "/image/spotify.png",
    demo: "https://spotify-clone-orpin-two.vercel.app/",
    href: "https://github.com/ahihison/Spotify-Clone",
    language: [
      {
        key: "nextjs",
        name: "NextJS",
        icon: "TbBrandNextjs",
      },
      {
        key: "typescript",
        name: "TypeScript",
        icon: "SiTypescript",
      },
    ],
  },
  {
    id: 5,
    title: "Chat App",
    description:
      "This project is a real-time chat application built with ReactJS and ChatEngine. It uses WebSockets to allow users to send messages to each other in real-time. The application also includes the ability to send images and files, user authentication and registration, and the ability to create and join chat rooms.",
    image: "/image/chatapp.png",
    demo: "https://chatvincent.netlify.app/",
    href: "https://github.com/ahihison/chatApplication",
    language: [
      {
        key: "react",
        name: "ReactJS",
        icon: "AiOutlineHtml5",
      },
    ],
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "My project is to introduce myself and expand my knowledge during the summer of 2023. I will dedicate this time to self-discovery and pursue various areas of interest to broaden my understanding and skills.",
    image: "/image/portfolio.png",
    demo: "",
    href: "https://github.com/ahihison/My_Portfolio",
    language: [
      {
        key: "nextjs",
        name: "NextJS",
        icon: "TbBrandNextjs",
      },
      {
        key: "typescript",
        name: "TypeScript",
        icon: "SiTypescript",
      },
    ],
  },
];
