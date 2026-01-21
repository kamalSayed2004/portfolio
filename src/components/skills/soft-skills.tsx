"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { SkillCategory } from "@/assets/data";

const SoftSkills = memo(({ skills }: { skills: SkillCategory | undefined }) => {
  if (!skills) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="relative group flex flex-col"
    >
      <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity" />
      <div className="relative flex flex-col h-full bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>
          <div>
            <h4 className="text-2xl font-bold text-purple-900 dark:text-purple-100">
              Soft Skills
            </h4>
            <p className="text-sm text-purple-600 dark:text-purple-300">
              Professional Excellence
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 flex-1">
          {skills.list.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -2, 2, 0],
              }}
              className="p-4 bg-white/70 dark:bg-gray-900/70 rounded-xl border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all cursor-pointer backdrop-blur-sm text-center group/soft"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="text-2xl mb-2"
              >
                💡
              </motion.div>
              <span className="font-semibold text-purple-900 dark:text-purple-100 text-sm block">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

SoftSkills.displayName = "SoftSkills";

export default SoftSkills;
