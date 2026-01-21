"use client";

import React, { useMemo, memo, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar, Building2 } from "lucide-react";
import data, { Experience as ExperienceType } from "@/assets/data";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

// --- Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- Sub-Components ---

interface ExperienceItemProps {
  exp: ExperienceType;
  isEven: boolean;
}

const ExperienceItem = memo(({ exp, isEven }: ExperienceItemProps) => (
  <motion.div
    variants={itemVariants}
    className={`relative flex flex-col md:flex-row md:items-center ${
      isEven ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Date Column (Desktop) */}
    <div
      className={`hidden md:flex w-1/2 ${
        isEven ? "justify-start pl-12" : "justify-end pr-12"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
          <Calendar size={18} className="text-blue-600 dark:text-blue-400" />
        </div>
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          {exp.date}
        </span>
      </div>
    </div>

    {/* Center Node */}
    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
      <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 shadow-lg z-10 relative group-hover:scale-125 transition-transform duration-300">
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20" />
      </div>
    </div>

    {/* Content Column */}
    <div className="w-full pl-20 md:pl-0 md:w-1/2">
      <div
        className={`relative md:w-[90%] ${
          isEven ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
        }`}
      >
        {/* Mobile Date */}
        <div className="md:hidden mb-4 flex items-center gap-2">
          <span className="px-3 py-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">
            {exp.date}
          </span>
        </div>

        {/* Card */}
        <div className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
          {/* Hover Gradient Border Effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/10 rounded-2xl transition-colors duration-300 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 text-left">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {exp.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                <Building2 size={16} />
                <span className="font-medium text-sm">{exp.company}</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base mt-4">
              {exp.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
));

ExperienceItem.displayName = "ExperienceItem";

// --- Main Component ---

const Experience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Custom wheel handler to scroll between sections instead of internal content
  const handleWheel = (e: React.WheelEvent) => {
    // Only scroll between sections if we are not actively dragging the timeline
    if (Math.abs(e.deltaY) < 10) return;

    if (e.deltaY > 0) {
      // Scroll down to Education
      const target = document.getElementById("education");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll up to Projects
      const target = document.getElementById("projects");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Replicate reference logic: duplicate data for infinite scroll
  const experiences = useMemo(
    () => Array(12).fill(data.experiences).flat(),
    [],
  );

  const {
    isDragging,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchEnd,
  } = useInfiniteScroll(scrollRef, 0.5);

  return (
    <section
      id="experience"
      onWheel={handleWheel}
      className="py-24 relative overflow-hidden bg-white dark:bg-[#030303] transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800/50 shadow-sm mb-6">
            <Briefcase size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-gray-900 dark:text-white tracking-widest uppercase">
              Career Path
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            My professional journey and the key milestones that have shaped my
            career.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`relative max-h-[600px] md:max-h-[800px] overflow-hidden px-2 scrollbar-hide overscroll-contain mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative space-y-12 pb-8">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 min-h-full bg-linear-to-b from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  exp={exp}
                  isEven={index % 2 === 0}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
