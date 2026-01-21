"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Code, TrendingUp } from "lucide-react";
import { SkillCategory } from "@/assets/data";
import {
  ICON_MAP,
  containerVariants,
  cardVariants,
  glowAnimation,
  skillVariants,
} from "./utils";

const TechnicalSkills = memo(({ skills }: { skills: SkillCategory[] }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
  >
    {skills.map((category, categoryIndex) => {
      const CategoryIcon = ICON_MAP[category.icon] || Code;
      const gradientColor = category.color;

      return (
        <motion.div
          key={categoryIndex}
          variants={cardVariants}
          whileHover={{ y: -12, scale: 1.02 }}
          className="group relative"
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-md" />

          <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6 pb-5 border-b border-gray-200 dark:border-gray-800">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className={`relative w-14 h-14 rounded-xl bg-linear-to-br ${gradientColor} flex items-center justify-center shadow-lg`}
              >
                <CategoryIcon className="w-7 h-7 text-white" />
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={glowAnimation}
                />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.type}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.list.length} technologies
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.04 }}
              className="grid grid-cols-2 gap-3"
            >
              {category.list.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={skillVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-3 py-2.5 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all cursor-pointer group/skill overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/skill:opacity-100 transition-opacity"
                    layoutId={`skill-bg-${categoryIndex}-${skillIndex}`}
                  />
                  <span className="relative z-10 block text-center whitespace-normal leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Activity Indicator */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Progress Step by Step
                </span>
                <TrendingUp className="w-3 h-3 text-blue-500" />
              </div>
              <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden relative">
                <motion.div
                  className={`absolute inset-y-0 left-0 w-1/3 bg-linear-to-r ${gradientColor} opacity-50 blur-sm`}
                  animate={{
                    x: ["-100%", "400%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className={`absolute inset-y-0 left-0 w-1/3 bg-linear-to-r ${gradientColor}`}
                  animate={{
                    x: ["-100%", "400%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      );
    })}
  </motion.div>
));

TechnicalSkills.displayName = "TechnicalSkills";

export default TechnicalSkills;
