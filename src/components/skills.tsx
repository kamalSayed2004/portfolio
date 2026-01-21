"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Lightbulb } from "lucide-react";
import data from "@/assets/data";
import { floatingAnimation } from "./skills/utils";
import TechnicalSkills from "./skills/technical-skills";
import LanguagesSkills from "./skills/languages-skills";
import SoftSkills from "./skills/soft-skills";
import StatsSection from "./skills/stats-section";

const Skills = () => {
  // Separate technical skills from soft skills and languages
  const technicalSkills = useMemo(
    () =>
      data.skills.filter(
        (category) =>
          category.type !== "Languages" && category.type !== "Soft Skills",
      ),
    [],
  );

  const languagesSkills = useMemo(
    () => data.skills.find((cat) => cat.type === "Languages"),
    [],
  );

  const softSkills = useMemo(
    () => data.skills.find((cat) => cat.type === "Soft Skills"),
    [],
  );

  // Calculate stats
  const technicalCount = useMemo(
    () => technicalSkills.reduce((acc, cat) => acc + cat.list.length, 0),
    [technicalSkills],
  );

  const languagesCount = languagesSkills?.list.length || 0;
  const softSkillsCount = softSkills?.list.length || 0;
  const categoriesCount = data.skills.length;

  return (
    <section
      id="skills"
      className="py-24 bg-linear-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-blue-500 mx-auto" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-[200%_auto] animate-gradient">
            Skills & Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1.5 bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto rounded-full mb-6"
          />
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical proficiency and interpersonal capabilities
            that drive innovative solutions
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <TechnicalSkills skills={technicalSkills} />

        {/* Languages & Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <motion.div animate={floatingAnimation} className="inline-block">
              <Lightbulb className="w-10 h-10 text-purple-500 mx-auto mb-3" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Personal Attributes
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Communication and interpersonal excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            <LanguagesSkills skills={languagesSkills} />
            <SoftSkills skills={softSkills} />
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <StatsSection
          technicalCount={technicalCount}
          categoriesCount={categoriesCount}
          languagesCount={languagesCount}
          softSkillsCount={softSkillsCount}
        />
      </div>
    </section>
  );
};

export default Skills;
