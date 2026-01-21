const data = {
  // Personal Info
  name: "Kamal Sayed",
  title: "Full-Stack Developer & AI Engineer",
  email: "kk1412ec4869@gmail.com",
  address: "Al-Qalyubia, Khanka, Egypt",
  phones: ["+20 100 362 0544", "+20 100 582 6130"],
  summary: [
    "Detail-oriented Full-Stack Developer and AI Engineer with a passion for building scalable, efficient web applications. I thrive in collaborative environments and am accustomed to meeting tight deadlines without compromising quality.",
    "Currently focused on integrating Artificial Intelligence solutions into web architecture to create innovative, data-driven user experiences.",
  ],
  cv: "https://drive.google.com/file/d/1rEWWWOssHwp2lPEMDP3xAAVLtbBpPgWy/view?usp=sharing",
  socialMedia: [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kamal-sayed-82ba2b335/",
      icon: "Linkedin",
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/kamalSayed2004",
      icon: "Github",
    },
    {
      id: 3,
      name: "Facebook",
      link: "https://www.facebook.com/kamalsayedkamal2004/",
      icon: "Facebook",
    },
  ],
  skills: [
    {
      type: "Front-End",
      icon: "Code",
      color: "from-blue-500 to-cyan-500",
      subtitle: "Web Interfaces",
      list: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript (ES6+)" },
        { name: "React.js" },
        { name: "TailwindCSS" },
        { name: "Bootstrap" },
        { name: "Sass" },
        { name: "Redux Toolkit" },
      ],
    },
    {
      type: "Artificial Intelligence",
      icon: "Brain",
      color: "from-purple-500 to-pink-500",
      subtitle: "ML & AI",
      list: [
        { name: "Machine Learning" },
        { name: "Deep Learning" },
        { name: "Data Processing" },
        { name: "Supervised Learning" },
        { name: "Unsupervised Learning" },
      ],
    },
    {
      type: "Back-End",
      icon: "Database",
      color: "from-green-500 to-emerald-500",
      subtitle: "Server & APIs",
      list: [
        { name: "Python" },
        { name: "Node.js" },
        { name: "Django" },
        { name: "Express.js" },
        { name: "MySQL" },
        // {name: "PostgreSQL" },
        // {name: "Prisma" },
        // { name: "MongoDB" },
      ],
    },
    {
      type: "Computer Science",
      icon: "Briefcase",
      color: "from-orange-500 to-red-500",
      subtitle: "Algorithms & DS",
      list: [
        { name: "Data Structures" },
        { name: "Sorting Algorithms" },
        { name: "Searching Algorithms" },
      ],
    },
    {
      type: "Tools",
      icon: "Wrench",
      color: "from-yellow-500 to-amber-500",
      subtitle: "Development Tools",
      list: [
        { name: "VS Code" },
        { name: "Postman" },
        { name: "Figma" },
        { name: "Git" },
      ],
    },
    {
      type: "Languages",
      icon: "Globe",
      color: "from-blue-500 to-cyan-500",
      subtitle: "Global Communication",
      list: [{ name: "Arabic" }, { name: "English" }],
    },
    {
      type: "Soft Skills",
      icon: "Users",
      color: "from-purple-500 to-pink-500",
      subtitle: "Professional Excellence",
      list: [
        { name: "Collaborative Teamwork" },
        { name: "Technical Research" },
        { name: "Leadership" },
        { name: "Analytical Problem Solving" },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      name: "Diamate",
      category: "AI & Health",
      description:
        "A specialized medical interface built with React and TailwindCSS that bridges the gap between patient data and AI diagnostics. The application visualizes complex algorithmic outputs to assist users in the early detection and ongoing management of diabetes.",
      techStack: ["React", "TailwindCSS"],
      link: "https://github.com/kamalSayed2004/diamate",
    },
    {
      id: 2,
      name: "Doctor Appointment System",
      category: "Full Stack",
      description:
        "A comprehensive healthcare booking platform designed to streamline the patient-doctor connection. Built with React, it features a dynamic scheduling engine that allows doctors to manage slots and patients to book appointments seamlessly.",
      techStack: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS"],
      link: "https://github.com/kamalSayed2004/medical-project",
    },
    {
      id: 3,
      name: "Timer & Notes Manager",
      category: "Productivity",
      description:
        "A personal productivity toolkit engineered with pure JavaScript. It combines a persistent task manager with custom-built timer logic, helping users track time and manage tasks without relying on heavy external frameworks.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kamalSayed2004/time-manager",
    },
    {
      id: 4,
      name: "Productivity Dashboard",
      category: "UI/UX",
      description:
        "A responsive admin dashboard template focused on data visualization. It utilizes advanced CSS Grid techniques to present complex metrics in a clean, intuitive interface that adapts perfectly to any screen size.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kamalSayed2004/dashboard",
    },
    {
      id: 5,
      name: "Elzero Game Store",
      category: "E-Commerce",
      description:
        "A front-end simulation of a digital marketplace. This project focuses on the implementation of complex grid layouts and responsive design patterns to create an engaging, app-like experience for browsing digital products.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kamalSayed2004/elzero",
    },
    {
      id: 6,
      name: "Kasper Template",
      category: "UI/UX",
      description:
        "A pixel-perfect implementation of a high-quality design mockup. This project demonstrates the ability to translate static creative assets into a living, breathing website with strict attention to spacing, typography, and cross-browser compatibility.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kamalSayed2004/kasper",
    },
  ],
  experiences: [
    {
      title: "Machine Learning Trainee",
      company: "BFCAI",
      date: "2023",
      description:
        "Deepening expertise in AI algorithms, data preprocessing, and model training. Successfully completed practical projects involving supervised and unsupervised learning architectures.",
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      date: "2023 - Present",
      description:
        "Delivering custom web solutions for diverse clients using the MERN stack and TailwindCSS. Focused on performance optimization and responsive design implementation.",
    },
  ],
};

export default data;
