import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBrain,
  FaTools,
  FaCode,
  FaSitemap,
  FaCubes,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiExpress,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";

const SKILLS = [
  /* Languages */
  {
    name: "Java",
    level: 80,
    color: "#F89820",
    category: "Languages",
    icon: FaJava,
    desc: "Core & Advanced Programming",
  },
  {
    name: "C++",
    level: 70,
    color: "#00599C",
    category: "Languages",
    icon: SiCplusplus,
    desc: "DSA & Problem Solving",
  },
  {
    name: "JavaScript",
    level: 50,
    color: "#F7DF1E",
    category: "Languages",
    icon: SiJavascript,
    desc: "DOM & Async ES6+",
  },
  {
    name: "Python",
    level: 50,
    color: "#3776AB",
    category: "Languages",
    icon: FaPython,
    desc: "Scripting & Automation Basics",
  },

  /* Frameworks & Tools */
  {
    name: "JavaFX",
    level: 80,
    color: "#6aca5d",
    category: "Frameworks & Tools",
    icon: FaJava,
    desc: "Desktop GUI Applications",
  },
  {
    name: "Spring Boot",
    level: 40,
    color: "#0cafef",
    category: "Frameworks & Tools",
    icon: SiSpringboot,
    desc: "Backend Development & REST APIs",
  },
   {
    name: "React JS",
    level: 35,
    color: "#92ba0f",
    category: "Frameworks & Tools",
    icon: FaReact,
    desc: "Components, Props & Hooks",
  },
  {
    name: "Node JS",
    level: 50,
    color: "#de7e08",
    category: "Frameworks & Tools",
    icon: FaNodeJs,
    desc: "Backend Runtime Environment",
  },
  // {
  //   name: "Express",
  //   level: 50,
  //   color: "#AAAAAA",
  //   category: "Frameworks & Tools",
  //   icon: SiExpress,
  //   desc: "RESTful APIs Development",
  // },
  // {
  //   name: "Maven",
  //   level: 65,
  //   color: "#C71A36",
  //   category: "Frameworks & Tools",
  //   icon: FaTools,
  //   desc: "Dependency Management",
  // },
 
  // {
  //   name: "Git",
  //   level: 60,
  //   color: "#F05032",
  //   category: "Frameworks & Tools",
  //   icon: FaGitAlt,
  //   desc: "Version Control & Collaboration",
  // },

  // core cs concepts
  {
    name: "Data Structures & Algorithms",
    level: 70,
    color: "#FF6B9D",
    category: "Core CS Concepts",
    icon: FaSitemap,
    desc: "Core CS Concepts",
  },
  {
    name: "Object-Oriented Programming",
    level: 80,
    color: "#6C63FF",
    category: "Core CS Concepts",
    icon: FaCubes,
    desc: "OOP Principles & Design Patterns", 
  },
  {
    name: "Operating Systems basics",
    level: 60,
    color: "#38B2AC",
    category: "Core CS Concepts",
    icon: FaBrain,
    desc: "Operating Systems fundamentals",
  },

  /* Data */
  {
    name: "MySQL",
    level: 70,
    color: "#00758F",
    category: "Data",
    icon: SiMysql,
    desc: "Relational DB & Queries",
  },
  {
    name: "JDBC",
    level: 75,
    color: "#6C63FF",
    category: "Data",
    icon: FaJava,
    desc: "Database Connectivity",
  },
  {
    name: "JSON",
    level: 50,
    color: "#F7DF1E",
    category: "Data",
    icon: FaCode,
    desc: "Data Interchange Format",
  },

  /* Exploring */
  // {
  //   name: "React",
  //   level: 35,
  //   color: "#61DAFB",
  //   category: "Exploring",
  //   icon: FaReact,
  //   desc: "Components, Props & Hooks",
  // },
  {
    name: "AI / ML Basics",
    level: 30,
    color: "#FF6B9D",
    category: "Exploring",
    icon: FaBrain,
    desc: "Exploring Neural Networks",
  },
  {
    name: "Data Science Foundations",
    level: 20,
    color: "#9F7AEA",
    category: "Exploring",
    icon: FaBrain,
    desc: "Data Science Foundations",
  },
  {
    name: "Docker",
    level: 20,
    color: "#0db7ed",
    category: "Exploring",
    icon: FaTools,
    desc: "Containerization & Deployment",
  },
  {
    name: "Data Analytics",
    level: 30,
    color: "#0abe46",
    category: "Exploring",
    icon: FaBrain,
    desc: "Data Analysis & Visualization",
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Languages",
    glow: "#5dcaa5",
    icon: "🖥",
  },
  {
    name: "Frameworks & Tools",
    glow: "#7f77dd",
    icon: "⚙",
  },
  {
    name: "Core CS Concepts",
    glow: "#6C63FF",
    icon: "🧠",
  },
  {
    name: "Data",
    glow: "#38b2ac",
    icon: "🗄",
  },
  {
    name: "Exploring",
    glow: "#378ADD",
    icon: "✦",
  },
];

export default SKILLS;