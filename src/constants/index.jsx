import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  ", Java, PHP, Phyton, Javascript, Laravel, Springboots, MySql";

export const PROJECTS = [
  {
    id: 1,
    title: "Nusantara Mountain Website",
    description:
      "A full-featured marketplace website built with laravel,Liveware and vite.js",
    imgSrc: project1,
    link: "https://github.com/reynaldi15/nusantara-mountain",
  },
  {
    id: 2,
    title: "Ballers Website",
    description:
      "A marketplace website to provide people to rental the basketball court.",
    imgSrc: project2,
    link: "https://github.com/reynaldi15/ballers",
  },
  {
    id: 3,
    title: "KEPUl Inventory API",
    description:
      "A System managment inventory company base on website Server side.",
    imgSrc: project3,
    link: "https://github.com/reynaldi15/kepul",
  },
  {
    id: 4,
    title: "KEPUL Thymeleaf",
    description:
      "A System managment inventory company base on website Client Side.",
    imgSrc: project4,
    link: "https://github.com/fazair1/kepulthymeleaf",
  },
  {
    id: 5,
    title: "Rental Kita-kita",
    description: "A Rental car website using laravel to help customer rent car and travel.",
    imgSrc: project5,
    link: "https://github.com/reynaldi15/rentalkitakita",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An online learning platform offering various courses and resources.",
    imgSrc: project6,
    link: "https://github.com/jepris/kursus-online",
  },
  {
    id: 7,
    title: "Holiday Package Prediction",
    description: "A System to predict package for customer to increase income company using machine learning.",
    imgSrc: project7,
    link: "https://github.com/reynaldi15/Rakamin-Analytic-Adventurers",
  },
  // {
  //   id: 8,
  //   title: "Recipe App",
  //   description: "An app for browsing and saving various cooking recipes.",
  //   imgSrc: project8,
  //   link: "https://example.com/recipe-app",
  // },
  // {
  //   id: 9,
  //   title: "Weather Dashboard",
  //   description:
  //     "A weather dashboard providing current weather data and forecasts.",
  //   imgSrc: project9,
  //   link: "https://example.com/weather-dashboard",
  // },
];

export const ABOUT =
  "As a fresh graduate with some experience, I am always developing my skills by learning new things in the tech world related to data and websites and other things. With a strong foundation in technology, I excel in building robust and scalable solutions. My expertise includes working with Java, PHP and Javascript frameworks such as Springboots, Laravel and React.js, still learning more about Python using spark, and proficiency in databases such as Mysql and SQL server. I am passionate about continuous learning and keeping up to date with the latest industry trends, which allows me to apply modern practices and tools in my projects.";
export const EXPERIENCES = [
  {
    company: "Juara Coding",
    role: "Java Back-end",
    year: "02/2023 - 04/2025",
    description:
      "Responsible for completing tasks using Java Springboots framework and Sql Server. Building projects to help the company's system with spring security and JPA. Create the Unit testing to run de QA system and fully maintance system.",
  },
  {
    company: "Hand Solution",
    role: "Java Consultant",
    year: "11/2024 - 01/2025",
    description:
      "Solving Business Challenges with Modular ERP Systems: Building Microservice Architectures with HZERO and Springboots. Design and code database using MySQL MyBatis",
  },
  {
    company: "Rakamin Academy",
    role: "Data Science",
    year: "06/2024 - 11/2024",
    description:
      "Develop a prediction system using machine learning, and build visualization to display data results that can be read easily for stackholder.",
  },
  {
    company: "Freelance",
    role: "Website",
    year: "12/2023 - Present",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Contributing to the continuous improvement of development processes and best practices.",
  },
  {
    company: "Binus University",
    role: "Application Developer Intern",
    year: "02/2022 - 02/2023",
    description:
      "Implement system for website application test using some framework to helping student exam. Worked with lecturer to ensure seamless user experiences. Developeing marketing app using Augmented Relaity and 3D model to boost attractiveness of the campus. Participated in some event like AWS Cloud Services.",
  },
  {
    company: "Himti",
    role: "Activist - Commission 2 : Publication and Marketing",
    year: "03/2021 - 02/2022",
    description:
      "Handle relations with other campus organizations and build relationships with other university organizations. Liaise with sponsor teams and help create cooperation agreements for sponsorship at HIMTI events.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com/",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/",
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/reynldi15/",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/reynaldi15",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/reynaldi-silalahi-7260b3204/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "Reynaldisilalahi09@gmail.com",
  // phone: "+62822****9*",
};
