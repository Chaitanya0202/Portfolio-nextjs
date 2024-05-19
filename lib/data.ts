import portfolio from "@/public/portfolio.png";
import food from "@/public/project-food.png";
import React from "react";
import { LuGraduationCap, LuPencil, LuSchool, LuSettings2 } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Other",
    hash: "#other-projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "10th (SSC), Maharashtra State Board",
    location: "Percentage: 83.00%",
    description:
      " Madhyamic Aashram Prashala,Akkalkot",
    icon: React.createElement(LuPencil),
    date: "2017",
  },
  {
    title: "12th (HSC), Maharashtra State Board",
    location: "Percentage: 56.62%",
    description:
      "H.R.Arts And Science Junior College , Akkalkot",
    icon: React.createElement(LuSchool),
    date: "2019",
  },
  {
    title: "B.Tech (Electronics & Telecommunication Engg)",
    location: "CGPA: 7.74",
    description:
      "A.G. PATIL INSTITUTE OF TECHNOLOGY, SOLAPUR",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      "Completed training as a full-stack developer, focusing on solving real-world problems. I have consistently upskilled myself to navigate the ever-evolving landscape of development. I am now open to full-time opportunities",
    icon: React.createElement(LuSettings2),
    date: "2024 ",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      "I have secured a full-time position as a full-stack developer at MNNLR company after completing my training. I am excited to apply my skills in solving real-world problems and continuing to enhance my abilities in this dynamic field",
    icon: React.createElement(LuSettings2),
    date: "2024 ",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
    "Developed my personal portfolio website using React, showcasing my projects, skills, and achievements.",
    tags: ["NEXT.js", "framer-motion", "GitHub", "Tailwind", "Vercel"],
    imageUrl: portfolio,
    viewLink: "#",
    videoLink: "#",
    githubLink: "#",
  },
  {
    title: "Food Web Apllication",
    description:
      "An intuitive web application for browsing menus, placing food orders.",
    tags: ["Postman", "Tailwind", "Firebase", "MySql", "React"],
    imageUrl: food,
    viewLink: "https://food-rouge-xi.vercel.app/",
    videoLink: "https://food-rouge-xi.vercel.app/",
    githubLink: "https://github.com/Chaitanya0202/Food_Ordering_Web-App",
  },

  // {
  //   title: "WeaveHub",
  //   description:
  //     "A web chat application that has real-time users, which connects seamlessly!!",
  //   tags: ["Clerk", "Next.js", "MongoDB", "Tailwind", "Vercel"],
  //   imageUrl: rmtdevImg,
  //   viewLink: "https://weavehub-chetan.vercel.app/",
  //   videoLink: "https://www.canva.com/design/DAFzeKzgcmM/9qZYKqJ71iccpnmVwJ7fZQ/watch?utm_content=DAFzeKzgcmM&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  //   githubLink: "https://github.com/1165CHETAN/THREADS-app",
  // },
  // {
  //   title: "SecureConnect",
  //   description:
  //     "Developed SecureConnect, an authentication platform with JWT and HTTP-only cookie.",
  //   tags: ["Postman", "Bootstrap", "Jwt", "Mongodb", "Vite"],
  //   imageUrl: wordanalyticsImg,
  //   viewLink: "https://www.canva.com/design/DAF34_IZKys/_zmjEEDJ7HDQ2Pfc1Q74EQ/watch?utm_content=DAF34_IZKys&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  //   videoLink: "https://www.canva.com/design/DAF34_IZKys/_zmjEEDJ7HDQ2Pfc1Q74EQ/watch?utm_content=DAF34_IZKys&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  //   githubLink: "https://github.com/1165CHETAN/SecureConnect-",
  // },
] as const;


export const skillsData = [
  "JAVA",
  "SpringBoot",
  "React",
  "React-Native",
  "Next.js",
  "MySQL",
  "Python",

  "HTML",
  "CSS",
  "JavaScript",
  "Firebase",

  "Node.js",
  "MongoDB",
  "TypeScript",
  "Vite",
  "Express.js",
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "Aceternity UI",

] as const;
