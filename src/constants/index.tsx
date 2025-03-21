import project2Home from "../assets/image28.png";
import project2Route from "../assets/image59.png";
import project2Admin from "../assets/image11.png";
import project1Home from "../assets/projec1Home.png";
import project1Conver from "../assets/project1Conver.png";
import project1Conver2 from "../assets/project1Conver1.png";

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
    title: "Train Ticket Booking Website: (Teamsize: 2)",
    image: [project2Home, project2Route, project2Admin],
    role: "Frontend",
    description:
      "The project of online train ticket sales system is a platform that helps passengers easily book train tickets, look up schedules, and online payment conveniently. The system helps improve the booking process, minimize the queue time at the station and optimize seat management.",
    Achievements: [
      "-	Designed a secure user authentication interface with login/registration and integrated token handling (login, registration, and refresh) using Redux Toolkit for efficient user state management and API responses.",
      "-	Built an interactive ticket booking interface with real-time search and filtering (routes, trains, seat classes, schedules), utilizing TypeScript for type-safe data handling and NextJS API routes for efficient data retrieval.",
      "-	Created a dynamic seat selection UI with clickable seat grids and availability indicators, styled with TailwindCSS for an optimized, responsive, and user-friendly design.",
      "-	Designed a trip planning dashboard interface displaying train schedules, route details, and journey timelines.",
      "-	Implemented a customer management interface for viewing booking history and cancellation options, designed for reusability and scalability.",
      "-	Developed an admin page using Shadcn/UI, featuring a clear table with integrated CRUD functionality (create, update, delete) columns and toast notifications for admin feedback.",
      "-	Built core admin functionalities, including booking management, route management, carriage management, seat management, schedule management, and user management."
    ],
    github: ["https://github.com/ninhnguyen2623/trainticketbooking.client"],
    technologies: ["Nextjs", "Typescript", "TailwindCss", ".Net", "MySQLd"],
  },
  {
    title: "ChatPDF Website",
    image: [project1Home, project1Conver2, project1Conver],
    role: "Fullstack",
    description:
      "ChatPDF is a web app that lets users upload PDFs and chat with their content using AI models like Gemini and DeepSeek. It aims to help students, researchers, and professionals extract information quickly via natural language. Built with ReactJS, TypeScript, and TailwindCSS, it offers a friendly UI with Google OAuth2 login and summarization features. The Python Django backend uses Redis and diverse AI APIs for efficiency. ChatPDF provides a smooth, secure document interaction experience",
    Achievements: [
      "-	Designed a secure authentication interface with manual login/registration, Google OAuth2 integration, and robust JWT refresh token handling, using Redux for user state management and Axios for seamless API interactions",
      "-	Built an intuitive PDF upload feature with a drag-and-drop UI, paired with react-pdf-viewer for in-browser rendering, styled with TailwindCSS for a responsive layout.",
      "-	Created a real-time chat interface with dynamic message rendering and AI model selection (Gemini, DeepSeek, Llama, Qwen), leveraging Redux for state consistency and React Toastify for success/error notifications.",
      "-	Developed a conversation summarization tool with a frontend button to trigger summaries, displaying clean results in the UI and enabling Word document downloads with polished formatting.",
      "-	Crafted a responsive split-screen design (PDF viewer on left, chat on right) using TailwindCSS, featuring smooth scrolling, typing animations, and hover effects for enhanced usability.",
      "-	Implemented conversation history management with a sidebar UI, supporting CRUD operations (create, read, update, delete) through REST API calls, styled with Ant Design components for a modern look.",
      "-	Optimized frontend performance with Vite’s fast bundling and lazy-loaded components, improving load times and user experience across devices.",
    ],
    github: ["https://github.com/ninhnguyen2623/chatpdf-client", "https://github.com/ninhnguyen2623/chatpdf-api "],
    technologies: ["React", "Typescript", "TailwindCss", "AI API", "Python (Django)", "SQLite"],
  }

];

export const CONTACT = {
  address: "7 District, Ho Chi Minh City, VietNam ",
  phoneNo: "+84 969656210 ",
  email: "Ninh1160@gmail.com",
};
