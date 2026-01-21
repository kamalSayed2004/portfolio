"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Quote,
} from "lucide-react";
import data from "@/assets/data";

const Projects = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX > 0) {
      controls.start({
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    } else if (currentX < -width) {
      controls.start({
        x: -width,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    }
  };

  const slide = (direction: "left" | "right") => {
    const currentX = x.get();
    const scrollAmount = 400; // Approx card width
    let targetX =
      direction === "left" ? currentX + scrollAmount : currentX - scrollAmount;

    // Constraints
    if (targetX > 0) targetX = 0;
    if (targetX < -width) targetX = -width;

    controls.start({
      x: targetX,
      transition: { type: "spring", stiffness: 200, damping: 25 },
    });
  };

  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-widest uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              PORTFOLIO
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6"
            >
              Projects &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-[200%_auto] animate-gradient">
                Showcase
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed"
            >
              A selection of my professional work and personal experimental
              projects.
            </motion.p>
          </div>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => slide("left")}
              className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all shadow-lg active:scale-95"
              aria-label="Slide Left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => slide("right")}
              className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all shadow-lg active:scale-95"
              aria-label="Slide Right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <motion.div
            ref={carousel}
            className="cursor-grab active:cursor-grabbing overflow-visible"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              animate={controls}
              style={{ x }}
              onDragEnd={handleDragEnd}
              className="flex gap-8 px-2"
            >
              {data.projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="min-w-[320px] sm:min-w-[350px] lg:min-w-[400px]"
                >
                  <div className="group relative h-[560px] bg-white dark:bg-gray-900/60 backdrop-blur-md rounded-[32px] p-5 border-2 border-gray-100 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col">
                    {/* Top: Image Section */}
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 shadow-inner shrink-0">
                      <Image
                        src={`/projects/${project.id}/1.png`}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Detailed Link Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Link
                          href={`/projects/${project.id}`}
                          className="px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full text-white text-sm font-bold flex items-center gap-2 hover:bg-white hover:text-blue-600 transition-all transform translate-y-4 group-hover:translate-y-0"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Details
                        </Link>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white border border-white/20 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Middle: Info Section */}
                    <div className="flex-1 flex flex-col min-h-0">
                      <div className="flex-1 flex flex-col mb-4 overflow-hidden">
                        <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0">
                          {project.name}
                        </h4>

                        {/* Enhanced Description Area with Clamp */}
                        <div className="relative group/desc overflow-hidden flex-1">
                          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-linear-to-b from-blue-500 to-purple-600 rounded-full opacity-30 group-hover/desc:opacity-100 transition-opacity duration-500" />

                          <div className="pl-5 relative pr-1 h-full">
                            <Quote className="w-8 h-8 text-blue-500/5 absolute -top-3 -left-2 rotate-180 pointer-events-none" />
                            <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium line-clamp-5">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Section: Technologies and Actions */}
                      <div className="mt-auto pt-6 border-t-2 border-dashed border-gray-100 dark:border-gray-800 space-y-5">
                        {/* Tech Stack Chips - Limited to 3 */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-[9px] font-bold bg-gray-100 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400 rounded-md border border-gray-200 dark:border-gray-700 uppercase tracking-tighter hover:border-blue-500/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="px-2 py-1 text-[9px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-100 dark:border-blue-800 uppercase tracking-tighter">
                              +{project.techStack.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Action Bar */}
                        <div className="flex items-center justify-between font-outfit">
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1.5 text-xs font-black text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-outfit"
                          >
                            <Github className="w-4 h-4" />
                            GITHUB
                          </motion.a>

                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1.5 text-xs font-black text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-outfit"
                          >
                            EXPLORE
                            <ArrowRight className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="h-1 w-24 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-linear-to-r from-blue-600 to-purple-600"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
