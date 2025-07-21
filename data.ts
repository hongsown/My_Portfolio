import exp from "constants";
import { headerType, projectType, socialType } from "./type";
import { AiOutlineHtml5 } from "react-icons/ai";
import { experienceType } from "./types";
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
export let listSocial: socialType[] = [
  {
    id: 1,
    icon: "AiFillLinkedin",
    href: "https://www.linkedin.com/in/nguy%E1%BB%85n-s%C6%A1n-a6656a163/",
  },
  {
    id: 2,
    icon: "AiFillGithub",
    href: "https://github.com/hongsown",
  },
  {
    id: 3,
    icon: "AiFillMail",
    href: "mailto:sonnguyen252003@gmail.com",
  },
  {
    id: 4,
    icon: "AiFillFacebook",
    href: "https://www.facebook.com/profile.php?id=100013294995015",
  },
];
export let listProject: projectType[] = [
  {
    id: 7,
    title: "Web3 Gaming Platform",
    description:
      "Turn-based Web3 game with custom blockchain integration using Cosmos SDK. Features on-chain game logic, token modules, wallet integration (Leap/Keplr), and real-time gameplay via WebSocket. Built to handle 1,000+ concurrent users with sub-500ms latency.",
    image: "https://tse3.mm.bing.net/th/id/OIP.0FrWD9H5O-EQCzeYa3UwlQHaEY?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    demo: "",
    href: "",
    language: [
      {
        key: "react",
        name: "ReactJS",
        icon: "AiOutlineHtml5",
      },
      {
        key: "nestjs",
        name: "NestJS",
        icon: "TbBrandNextjs",
      },
      {
        key: "cosmos",
        name: "Cosmos SDK",
        icon: "SiTypescript",
      },
    ],
  },
  {
    id: 8,
    title: "AI Camera Management System",
    description:
      "Comprehensive camera management system with integrated AI capabilities for surveillance and analytics. Implemented real-time video streaming with HLS, reducing latency to 2 seconds. Increased user engagement by 20% through interactive features.",
    image: "/image/camera-ai.png",
    demo: "",
    href: "",
    language: [
      {
        key: "react",
        name: "ReactJS",
        icon: "AiOutlineHtml5",
      },
      {
        key: "angular",
        name: "Angular",
        icon: "TbBrandNextjs",
      },
      {
        key: "aws",
        name: "AWS",
        icon: "SiTypescript",
      },
    ],
  },
  {
    id: 9,
    title: "Blockchain Explorer",
    description:
      "Built comprehensive admin dashboards and Chrome extensions for blockchain data monitoring. Developed backend service to sync blockchain data (blocks, transactions, events) into PostgreSQL for explorer and admin monitoring with CI/CD pipelines.",
    image: "https://tse1.mm.bing.net/th/id/OIP.UIgOfb8wd8JRHwVaSZqYuQHaEf?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    demo: "https://stochainscan.io/en",
    href: "https://stochainscan.io/en",
    language: [
      {
        key: "nextjs",
        name: "NextJS",
        icon: "TbBrandNextjs",
      },
      {
        key: "nestjs",
        name: "NestJS",
        icon: "TbBrandNextjs",
      },
      {
        key: "postgresql",
        name: "PostgreSQL",
        icon: "SiTypescript",
      },
    ],
  },
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
    demo: "https://github.com/ahihison/chatApplication",
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
    id: 6,
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


export const experiences: experienceType[] = [
  {
    id: "exp8",
    companies: "XCLUSIVE CORPORATION",
    role: "Full Stack Developer",
    date: "November 2024 - May 2025",
    link: "",
    description: [
      "Built admin dashboards and Chrome extensions using NextJS for blockchain monitoring and management.",
      "Developed custom blockchain using Cosmos SDK with token modules and wallet integration (Leap/Keplr).",
      "Created turn-based Web3 game dApp with on-chain logic and off-chain services for player management.",
      "Implemented backend service to sync blockchain data into PostgreSQL for explorer and admin monitoring.",
      "Built real-time gameplay system with WebSocket using NestJS backend and ReactJS frontend.",
      "Deployed full system on VPS with CI/CD pipelines, optimized for 1,000+ concurrent users with sub-500ms latency.",
    ],
  },
  {
    id: "exp7",
    companies: "AIS TECHNOLOGY SERVICES",
    role: "Freelance Frontend Developer",
    date: "April 2024 - May 2025",
    link: "",
    description: [
      "Developed comprehensive camera management system with integrated AI capabilities using ReactJS and ChakraUI.",
      "Collaborated with Backend team using Golang to ensure seamless API integration and system stability.",
      "Increased user engagement by 20% by implementing new interactive features and improving UI/UX.",
      "Reduced video stream latency to 2 seconds (HLS) from real-time, significantly improving user experience.",
      "Fixed critical bugs and implemented change requests to enhance system stability and performance.",
    ],
  },
  {
    id: "exp5",
    companies: "Công ty STECH",
    role: "Front End Intern",
    date: "July 2023 -November 2023 ",
    link: "https://www.facebook.com/stechorg/",
    description: [
      "💙 Conducted research and authored a report on sockets, Metamask login optimization when sending data, and the use of Client-Side Rendering and Server-Side Rendering",
      "💙 Feature Development: Collaborated with the team to build new features that improve user interaction and functionality.",
      "💙 UX/UI Optimization: Conducted research and implemented design improvements to streamline user flows, enhance clarity, and create a more intuitive user experience. "
    ],
  },
  {
    id: "exp6",
    companies: "Code Club Vietnam Community",
    role: "Full Stack Developer",
    date: "Feb 2023 - Present",
    link: "https://github.com/DRAFALO",
    description: [
      "💙 Thriving communities of PET project enthusiasts fostering knowledge exchange and mutual learning. ",
      "💙 Collaborated with experienced senior and junior developers on real-world projects.",
      "💙Develop the user interface (UI) for a blog website aimed at developers. Contribute to the design process of the website and familiarize yourself with Git workflow and the rules governing real company projects. Additionally, develop APIs using NestJS and implement continuous integration and continuous deployment (CI/CD) pipelines..",
    ],
  },
  {
    id: "exp4",
    companies: "SGU Hackathon 2024",
    role: "Vice President",
    date: " March 2024",
    link: "https://www.facebook.com/photo/?fbid=910015674245319&set=pcb.910036530909900",
    description: [
      "💙 At the SGU Hackathon, my team and I developed a project titled 'Protecting the Environment,' which ultimately won us the first prize.",
      "💙 We collaborated on developing the user interface (UI) and API to integrate with an AI model designed to detect waste. Our goal was to create a system that could identify various types of waste and provide users with the nearest recycling plant locations on a map.",
    ],
  },
  {
    id: "exp1",
    companies: "Programming Tutor",
    role: "Tutor",
    date: "May 2023 - Present",
    link: "",
    description: [
      "💙 Helping my students understand the fundamentals of programming, data structures, and algorithms is essential for laying a strong foundation in computer science",
      "💙 My student's confidence in coding and successful performance across most subjects at school reflects their dedication and aptitude for learning",
    ],
  },


];
