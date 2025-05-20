interface Stack {
  name: string;
}

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: Stack[];
  image: string;
  live: string;
  github: string;
}

export const ProjectsData: Project[] = [
  {
    num: "01",
    category: "frontend",
    title: "Plann.er",
    description:
      "Plann.er is a travel planning web application developed with React and TypeScript, allowing users to create, view, and manage the details of their trips.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwind.css",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://planner-app-zeta.vercel.app/",
    github: "https://github.com/marcuswmc/planner-reactjs",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Sattis Studio",
    description:
      "A responsive website and appointment scheduling system for a hair salon, built with Next.js.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "React",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwind.css",
      },
    ],
    image: "/assets/work/thumb5.png",
    live: "https://sattis.me/",
    github: "https://github.com/marcuswmc/sattis-nextjs-website",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Dejongh Drones",
    description:
      "A responsive React website for a drone services company.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Typescript",
      },
      {
        name: "Styled-components",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://djongh-drones.vercel.app/",
    github: "https://github.com/Growth-Culture/djongh-drones",
  },
  {
    num: "04",
    category: "frontend",
    title: "Devstore Shop",
    description:
      "DevStore is a comprehensive e-commerce platform built with Next.js 15 and TypeScript, featuring robust end-to-end testing using Cypress.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwind.css",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "fullStack",
    title: "List.In",
    description:
      "This project is a simple shopping list app built with React and TypeScript, where users can add, delete, search, mark items as purchased, and share.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Typescript",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://list-in.vercel.app/",
    github: "https://github.com/marcuswmc/list-in",
  },
];