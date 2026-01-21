"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Globe, Languages } from "lucide-react";
import { SkillCategory } from "./utils";

const LanguagesSkills = memo(
  ({ skills }: { skills: SkillCategory | undefined }) => {
    if (!skills) return null;

    return (
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        className="relative group flex flex-col"
      >
        <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity" />
        <div className="relative flex flex-col h-full bg-linear-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg"
            >
              <Globe className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                Languages
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-300">
                Global Communication
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center content-center gap-4 flex-1">
            {skills.list.map((lang, index) => {
              const Icon = lang.name === "English" ? Languages : Globe;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  className="flex items-center gap-4 px-6 py-4 bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer backdrop-blur-md shadow-sm hover:shadow-lg group/lang min-w-[160px]"
                >
                  <div className="p-2.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover/lang:bg-blue-500 group-hover/lang:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-gray-800 dark:text-gray-100 text-lg">
                      {lang.name}
                    </span>
                    {lang.name === "Arabic" && (
                      <span className="text-xs text-blue-500 dark:text-blue-400 font-medium uppercase tracking-wider">
                        Native
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  },
);

LanguagesSkills.displayName = "LanguagesSkills";

export default LanguagesSkills;
