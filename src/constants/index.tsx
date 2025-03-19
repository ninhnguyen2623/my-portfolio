import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. 
I have honed my skills in front-end technologies like React, Next.js and TypeScript. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `As a passionate Computer Science student in my 4th year at Saigon University, I aim to leverage my skills in modern frontend technologies—such as ReactJS, NextJS, TypeScript, Redux Toolkit, TailwindCSS, and Shadcn/UI—to contribute to innovative web development projects as a Frontend Developer Intern. With hands-on experience building responsive, user-focused applications like ChatPDF and Train Ticket Booking, I am eager to apply my knowledge of UI/UX design, state management, and API integration in a professional environment. My goal is to enhance my technical expertise, collaborate with talented teams, and deliver high-quality solutions that improve user experiences and meet business objectives.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "ChatPDF Website",
    image: project1,
    description:
      "ChatPDF is a web application that allows users to upload PDF documents and engage in real-time conversations with their content using AI models like Gemini and DeepSeek. Built with ReactJS, TypeScript, and TailwindCSS, it features a responsive split-screen UI for seamless PDF viewing and chatting. The app includes secure user authentication, Google OAuth2 login, and a summarization tool that exports AI-generated insights into Word files. Integrated with a Django backend and Redis caching, it optimizes performance for quick, context-aware responses. Designed for students and professionals, ChatPDF simplifies extracting information from PDFs through natural language interaction.",
    technologies: ["React", "Typescript", "TailwindCss", "AI API", "Python", "SQLite"],
  },
  {
    title: "Train Ticket Booking Website",
    image: project2,
    description:
      "Train Ticket Booking is a web application built with NextJS, TypeScript, and TailwindCSS, enabling users to search, book, and manage train tickets with a responsive, intuitive interface. It features real-time ticket filtering by route, seat class, and schedule, integrated with a .NET backend API for dynamic data. The frontend includes secure login/registration, a customer dashboard for booking history, and interactive seat selection grids using Shadcn/UI. Optimized with server-side rendering, it ensures fast load times and enhanced SEO performance. Designed for ease of use, the app streamlines the train travel booking experience for all users.",
    technologies: ["Nextjs", "Typescript", "TailwindCss", ".Net", "MySQLd"],
  }
];

export const CONTACT = {
  address: "7 District, Ho Chi Minh City, VietNam ",
  phoneNo: "+84 969656210 ",
  email: "Ninh1160@gmail.com",
};
