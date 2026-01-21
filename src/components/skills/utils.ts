import {
  Code,
  Database,
  Brain,
  Briefcase,
  Wrench,
  Globe,
  Users,
} from "lucide-react";

export const ICON_MAP: { [key: string]: React.ElementType } = {
  Code,
  Database,
  Brain,
  Briefcase,
  Wrench,
  Globe,
  Users,
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const glowAnimation = {
  boxShadow: [
    "0 0 20px rgba(139, 92, 246, 0.3)",
    "0 0 40px rgba(139, 92, 246, 0.5)",
    "0 0 20px rgba(139, 92, 246, 0.3)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

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
