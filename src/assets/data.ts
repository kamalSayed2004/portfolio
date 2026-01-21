export interface Certificate {
  id: number;
  degree: string;
  institution: string;
  status: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
}

export interface SocialMedia {
  id: number;
  name: string;
  link: string;
  icon: string;
}

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  type: string;
  icon: string;
  color: string;
  subtitle: string;
  list: SkillItem[];
}

export interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  features: string[];
  role: string;
  timeline: string;
  keyAchievements: string[];
  techStack: string[];
  link: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

export interface Data {
  name: string;
  title: string;
  email: string;
  address: string;
  phones: string[];
  summary: string[];
  cv: string;
  certificates: Certificate[];
  socialMedia: SocialMedia[];
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
}

const data: Data = {
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
  certificates: [
    {
      id: 1,
      degree: "Bachelor of Computer Science and Artificial Intelligence",
      institution:
        "Benha Faculty of Computers and Artificial Intelligence (BFCAI)",
      status: "Completed",
      date: "2022 - 2026",
      description:
        "Focused on core computer science principles, software engineering, and artificial intelligence architectures. Maintained high academic performance in advanced algorithms and data structures.",
      skills: [
        "Algorithms",
        "Data Structures",
        "Operating Systems",
        "Software Engineering",
      ],
      image: "",
    },
    {
      id: 2,
      degree: "Machine Learning (ITCRC)",
      institution: "Benha University (BFCAI)",
      status: "Completed",
      date: "2024",
      description:
        "Comprehensive training in machine learning workflows, including data preprocessing, model selection, and deep learning implementation using modern frameworks.",
      skills: [
        "Python",
        "TensorFlow",
        "Scikit-Learn",
        "Neural Networks",
        "Data Science",
      ],
      image: "/certificates/ml-itcrc.jpg",
    },
  ],
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
        "A specialized medical interface built with React and TailwindCSS that bridges the gap between patient data and AI diagnostics.",
      fullDescription:
        "Diamate is an advanced healthcare solution designed to empower patients and doctors with AI-driven insights. By analyzing vital health markers, the application provides early detection warnings for diabetes and assists in personalized management plans. The core focus was on creating a highly accessible, trustworthy, and performant interface that handles sensitive data with care.",
      features: [
        "AI-Driven Predictive Analysis",
        "Interactive Health Dashboard",
        "Real-time Data Visualization",
        "Patient-Doctor Communication Bridge",
        "Mobile-First Responsive Design",
      ],
      role: "Lead Full-Stack Developer",
      timeline: "3 Months",
      keyAchievements: [
        "Integrated complex ML models with a seamless React frontend.",
        "Optimized data rendering performance for real-time charts.",
        "Implemented high-standard accessibility features for elderly users.",
      ],
      techStack: ["React", "TailwindCSS", "Machine Learning", "Data Analysis"],
      link: "https://github.com/kamalSayed2004/diamate",
    },
    {
      id: 2,
      name: "Doctor Appointment System",
      category: "Full Stack",
      description:
        "A comprehensive healthcare booking platform designed to streamline the patient-doctor connection.",
      fullDescription:
        "This project reimagines the medical appointment booking process. It features a robust backend to manage complex doctor schedules, recurring slots, and real-time availability updates. The frontend provides a frictionless experience for patients to find specialists, book appointments, and manage their medical history efficiently.",
      features: [
        "Dynamic Scheduling Engine",
        "Secure User Authentication",
        "Real-time Appointment Notifications",
        "Specialist Search & Filtering",
        "Admin Dashboard for Clinics",
      ],
      role: "Backend & Frontend Architect",
      timeline: "4 Months",
      keyAchievements: [
        "Built a custom scheduling algorithm that avoids double bookings.",
        "Developed a comprehensive admin panel for facility management.",
        "Reduced page load times by 40% through lazy loading and caching.",
      ],
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "TailwindCSS",
        "Node.js",
      ],
      link: "https://github.com/kamalSayed2004/medical-project",
    },
    {
      id: 3,
      name: "Timer & Notes Manager",
      category: "Productivity",
      description:
        "A personal productivity toolkit engineered with pure JavaScript and persistent task manager.",
      fullDescription:
        "A focused productivity suite built for minimalism and speed. This application combines high-performance timer logic (Pomodoro style) with a localized database for note-taking. It avoids external framework bloat, resulting in a lightning-fast tool for daily task management and focus sessions.",
      features: [
        "Customizable Focus Timers",
        "Persistent Task & Note Storage",
        "Minimalist Zero-Bloat UI",
        "Offline Capability",
        "Dynamic Workspace Themes",
      ],
      role: "Solo Developer",
      timeline: "1 Month",
      keyAchievements: [
        "Mastered DOM manipulation and local storage persistence without libraries.",
        "Created an intuitive, distraction-free user interface.",
        "Achieved a perfect 100/100 performance score on Lighthouse.",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
      link: "https://github.com/kamalSayed2004/time-manager",
    },
    {
      id: 4,
      name: "Productivity Dashboard",
      category: "UI/UX",
      description:
        "A responsive admin dashboard template focused on data visualization and CSS Grid.",
      fullDescription:
        "This project showcases advanced modern CSS techniques, specifically CSS Grid and Flexbox, to create a complex yet fluid admin interface. The dashboard includes multiple widget types, interactive charts, and a sidebar navigation system that adapts perfectly across mobile, tablet, and ultra-wide displays.",
      features: [
        "Advanced CSS Grid Layouts",
        "Dynamic Data Widgets",
        "Interactive Chart Integrations",
        "Multi-Theme Support",
        "Adaptive Navigation System",
      ],
      role: "UI Engineer",
      timeline: "2 Weeks",
      keyAchievements: [
        "Implemented a complex multi-column grid layout without using framework grids.",
        "Designed a cohesive dark/light mode color palette.",
        "Created reusable UI components for rapid dashboard expansion.",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Chart.js"],
      link: "https://github.com/kamalSayed2004/dashboard",
    },
    {
      id: 5,
      name: "Elzero Game Store",
      category: "E-Commerce",
      description:
        "A front-end simulation of a digital marketplace with complex grid layouts.",
      fullDescription:
        "A meticulously designed e-commerce interface simulating a modern digital gaming marketplace. This project focuses on product presentation, categorized filtering, and the user journey through a storefront. It demonstrates high-level proficiency in layout architecture and responsive design patterns.",
      features: [
        "Interactive Product Catalog",
        "Category-Based Navigation",
        "Dynamic Cart Simulation",
        "App-like User Experience",
        "Optimized Asset Loading",
      ],
      role: "Front-End Developer",
      timeline: "1 Month",
      keyAchievements: [
        "Engineered a highly responsive grid system for product cards.",
        "Integrated complex hover states and micro-interactions.",
        "Built a seamless mobile navigation experience.",
      ],
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kamalSayed2004/elzero",
    },
    {
      id: 6,
      name: "Kasper Template",
      category: "UI/UX",
      description:
        "A pixel-perfect implementation of a high-quality design mockup with cross-browser compatibility.",
      fullDescription:
        "Kasper is an exercise in absolute precision. This project involved translating a complex, multi-section design mockup into a fully responsive, semantic website. Special attention was paid to typography, vertical rhythm, and legacy browser support while maintaining a modern aesthetic.",
      features: [
        "Pixel-Perfect Component Build",
        "Semantic HTML5 Structure",
        "Custom SVG Illustrations",
        "Smooth Scroll Navigation",
        "Cross-Browser Optimization",
      ],
      role: "Web Developer",
      timeline: "3 Weeks",
      keyAchievements: [
        "Translated static PSD/Figma designs into a fluid web experience.",
        "Maintained perfect visual fidelity across different screen densities.",
        "Optimized CSS for minimal file size and fast delivery.",
      ],
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
