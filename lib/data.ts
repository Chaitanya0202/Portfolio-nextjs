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
    title: "Full-Stack Developer Intern at Q-Spiders",
    location: "",
    description:
      "Completed an intensive full-stack development program with a strong focus on building scalable, real-world applications. I continuously invest in upskilling to stay current with modern development practices and technologies. I am eager to apply my skills and contribute to impactful, production-ready projects within a dynamic development team.",
      // "Completed training as a full-stack developer, focusing on solving real-world problems. I have consistently upskilled myself to navigate the ever-evolving landscape of development. I am now open to full-time opportunities",
    icon: React.createElement(LuSettings2),
    date: " Feb 2023 - Dec 2023",
  },
  {
    title: "Full-Stack Developer at A Pixel House",
    location: "",
    description:
      // "I have secured a full-time position as a full-stack Web developer at A Pixel House . I am excited to apply my skills in solving real-world problems and continuing to enhance my abilities in this dynamic field",
      "Currently, I’m working as a Full Stack Web Developer at A Pixel House, where I’ve contributed to the development and deployment of real-time, production-level applications. These challenging and fast-paced projects have helped me sharpen both my technical and analytical skills",
    icon: React.createElement(LuSettings2),
    date: "May 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
    "Developed my personal portfolio website using React, showcasing my projects, skills, and achievements.",
    tags: ["NEXT.js", "framer-motion", "GitHub", "Tailwind", "Vercel"],
    imageUrl: portfolio,
    viewLink: "https://gregarious-cat-bc75c0.netlify.app/",
    videoLink: "https://gregarious-cat-bc75c0.netlify.app/",
    githubLink: "https://github.com/Chaitanya0202/Portfolio-nextjs",
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
  

  
  "MongoDB",
  "TypeScript",
  "Vite",
  
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "AWS(EC2,RDS,EB)",
  "Spring AI",
  "python-AI +Spring Boot integration",

] as const;
