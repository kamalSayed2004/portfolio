"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  Code2,
  Layers,
  Sparkles,
  Info,
  Calendar,
  Layout,
  CheckCircle2,
  Trophy,
  User,
  ChevronRight,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Project } from "@/assets/data";

interface ProjectClientProps {
  project: Project;
  projectImages: string[];
}

export default function ProjectClient({
  project,
  projectImages,
}: ProjectClientProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#030303] text-gray-900 dark:text-gray-100 selection:bg-blue-500/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group flex items-center gap-3 text-xs font-black tracking-widest hover:text-blue-600 dark:hover:text-blue-400 transition-all uppercase"
          >
            <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-900 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/40 transition-colors">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
            BACK
          </Link>

          <div className="flex items-center gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-sm font-black hover:scale-105 transition-transform shadow-lg active:scale-95"
            >
              <Github className="w-4 h-4" />
              SOURCE CODE
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10 dark:opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase mb-8 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              CASE STUDY 2026
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              {project.name.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i % 2 !== 0
                      ? "text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-medium mb-12 max-w-2xl">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 border-y border-gray-100 dark:border-gray-800/50 py-8 w-full">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600">
                  <User className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    ROLE
                  </p>
                  <p className="text-sm font-bold truncate max-w-[150px]">
                    {project.role || "Lead Developer"}
                  </p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-100 dark:bg-gray-800 hidden md:block" />
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    TIMELINE
                  </p>
                  <p className="text-sm font-bold uppercase">
                    {project.timeline || "In Progress"}
                  </p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-100 dark:bg-gray-800 hidden md:block" />
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600">
                  <Layout className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    CATEGORY
                  </p>
                  <p className="text-sm font-bold uppercase">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Image */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-video w-full rounded-[48px] overflow-hidden shadow-2xl border-4 border-gray-50 dark:border-gray-900"
          >
            {projectImages.length > 0 && (
              <Image
                src={projectImages[0]}
                alt={project.name}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          {/* Left: Content */}
          <div className="lg:col-span-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-20"
            >
              {/* OverView */}
              <motion.div variants={itemVariants} className="space-y-10">
                <div>
                  <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                    <Info className="w-6 h-6 text-blue-500" />
                    PROJECT OVERVIEW
                  </h3>
                  <div className="p-8 rounded-[32px] bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800/50">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                      {project.fullDescription || project.description}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                    <Layers className="w-6 h-6 text-purple-500" />
                    CORE FEATURES
                  </h3>
                  <div className="grid gap-4">
                    {(
                      project.features || [
                        "Responsive Design",
                        "Interactive UI",
                        "High Performance",
                      ]
                    ).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/80 shadow-sm hover:translate-x-2 transition-transform"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <p className="font-bold text-gray-700 dark:text-gray-200">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Success & Tech */}
              <motion.div variants={itemVariants} className="space-y-10">
                <div>
                  <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-emerald-500" />
                    KEY ACHIEVEMENTS
                  </h3>
                  <div className="p-8 rounded-[32px] bg-emerald-50/30 dark:bg-emerald-900/10 border border-emerald-100/50 dark:border-emerald-800/20">
                    <ul className="space-y-6">
                      {(
                        project.keyAchievements || [
                          "Project completion",
                          "Clean code architecture",
                          "Mobile optimization",
                        ]
                      ).map((ach, i) => (
                        <li key={i} className="flex gap-4">
                          <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                          <p className="font-bold text-gray-700 dark:text-gray-200">
                            {ach}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-orange-500" />
                    TECHNOLOGIES
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl hover:border-blue-500 transition-all cursor-default"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                        <span className="font-black text-sm uppercase tracking-tighter">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      {projectImages.length > 1 && (
        <section className="py-32 bg-gray-50/50 dark:bg-black/20 border-y border-gray-100 dark:border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
                  VISUAL <br />
                  <span className="text-blue-600">DYNAMICS</span>
                </h2>
                <p className="text-gray-500 font-medium text-lg">
                  A deep dive into the interface and functional architecture of
                  the project.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8">
              {projectImages.slice(1).map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative rounded-3xl overflow-hidden border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                >
                  <Image
                    src={src}
                    alt={`${project.name} Details ${idx}`}
                    width={600}
                    height={400}
                    className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-black text-xs tracking-widest uppercase mb-1 opacity-60">
                        MODULE {idx + 1}
                      </p>
                      <p className="text-white text-xl font-bold">
                        Project Snapshot
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-40 px-6 relative">
        <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900/20 translate-y-1/2 blur-[200px] opacity-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 inline-block p-6 rounded-[40px] bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
          >
            <Layers className="w-12 h-12" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            READY TO <br />
            <span className="text-blue-600">COLLABORATE?</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium mb-16 max-w-2xl mx-auto">
            If you find this project interesting or have ideas for improvement,
            I&apos;m always open to discussing new technical challenges and
            creative collaborations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-6 bg-gray-900 dark:bg-white text-white dark:text-black rounded-[24px] font-black text-xl hover:scale-105 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3"
            >
              <Github className="w-6 h-6" />
              SOURCE CODE
            </a>
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-12 py-6 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-[24px] font-black text-xl hover:border-blue-500 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              LET&apos;S TALK
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-100 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <p className="text-xs font-black tracking-widest uppercase">
              CASE STUDY: {project.name}
            </p>
          </div>
          <p className="text-xs font-black tracking-widest uppercase">
            © {new Date().getFullYear()} KAMAL SAYED — BUILT WITH NEXT.JS
          </p>
        </div>
      </footer>
    </main>
  );
}
