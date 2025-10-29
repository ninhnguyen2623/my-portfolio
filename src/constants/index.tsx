import project2Home from "../assets/image28.png";
import project2Route from "../assets/image59.png";
import project2Admin from "../assets/image11.png";
import project1Home from "../assets/projectchat2.png";
import project1Conver from "../assets/projectchat1.png";
import project1Conver2 from "../assets/projectchat3.png";

export const HERO_CONTENT = `Recent IT graduate with hands-on experience at Anh Quan Technology, eager to build modern, userfocused web applications using React.js, Next.js, TypeScript, and cutting-edge UI tools — contributing
high-impact, scalable solutions to dynamic teams.`;

export const ABOUT_TEXT = `As a passionate Computer Science student in my 4th year at Saigon University, I aim to leverage my skills in modern frontend technologies—such as ReactJS, NextJS, TypeScript, Redux Toolkit, TailwindCSS, and Shadcn/UI—to contribute to innovative web development projects as a Frontend Developer Intern. With hands-on experience building responsive, user-focused applications like ChatPDF and Train Ticket Booking, I am eager to apply my knowledge of UI/UX design, state management, and API integration in a professional environment. My goal is to enhance my technical expertise, collaborate with talented teams, and deliver high-quality solutions that improve user experiences and meet business objectives.`;

export const EXPERIENCES = [
  {
    year: "04/2025 - 08/2025",
    role: "Frontend Developer",
    company: "Anh Quan Technology",
    description: `
    Built a school management system with React.js, Next.js, and TypeScript – improved data flow by
30% and component reusability to 80%.
• Designed modern, responsive UI using Tailwind CSS + Mantine UI – boosted UX (NPS score) by 25%
per internal user surveys.
• Integrated RESTful APIs and optimized state with React Query (TanStack Query) – reduced data
sync time by 40%.
• Accelerated app performance via lazy loading, code splitting, and API caching – cut average page
load time by 2.1s (from 4.8s).
• Collaborated closely with backend engineers to test APIs and resolve UI–API mismatches – slashed
production bugs by 60%.
    `,
    technologies: ["Javascript", "React.js", "Next.js", "Mantine UI"],
  },
];

export const PROJECTS = [
  {
    title: "ChatPDF – AI Document Assistant",
    image: [project1Home, project1Conver2, project1Conver],
    role: "Fullstack",
    description:
      "ChatPDF is a web app that lets users upload PDFs and chat with their content using AI models like Gemini and DeepSeek. It aims to help students, researchers, and professionals extract information quickly via natural language. Built with ReactJS, TypeScript, and TailwindCSS, it offers a friendly UI with Google OAuth2 login and summarization features. The Python Django backend uses Redis and diverse AI APIs for efficiency. ChatPDF provides a smooth, secure document interaction experience",
    Achievements: [
      "- Developed an AI-powered web app enabling PDF upload + conversational Q&A, leveraging Gemini 1.5 Flash + DeepSeek R-1 to deliver context-aware answers in <1.2s across 100-page documents.",
      "- Engineered robust PDF processing pipeline with PyPDF2 + pdf.js extraction, intelligent chunking (recursive + semantic), and hybrid retrieval (BM25 + embeddings) — achieving 96% answer accuracy on 50+ diverse test documents (legal, academic, technical).",
      "- Built real-time, responsive chat interface using React.js + TypeScript, powered by Redux Toolkit + RTK Query for optimistic UI, streaming responses, and auto-scroll — reducing perceived latency by 70% in local performance tests.",
      "- Integrated Django REST backend with typed API contracts, JWT auth, rate limiting, and retry logic — passing 99.9% reliability in 10k simulated requests via k6 load testing.",
      "- Designed intuitive UI with Tailwind CSS: drag-and-drop upload, dark mode, message actions (copy/regenerate) — validated through internal UX walkthroughs and demo video.",
      "- Integrated PayPal Checkout for Plus subscription ($4.99/mo) — free tier: 10 messages/day per document, Plus: unlimited — 100% success rate in sandbox testing."
    ],
    github: ["https://github.com/ninhnguyen2623/chatpdf-client", "https://github.com/ninhnguyen2623/chatpdf-api "],
    technologies: ["React", "Typescript", "TailwindCss", "Gemini API", "Python", "SQLite"],
  },
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
  }

];

export const CONTACT = {
  address: "7 District, Ho Chi Minh City, VietNam ",
  phoneNo: "+84 969656210 ",
  email: "Ninh1160@gmail.com",
};
