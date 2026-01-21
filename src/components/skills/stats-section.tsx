"use client";

import React, { useMemo, memo } from "react";
import { motion } from "framer-motion";
import { Code, Briefcase, Globe, Users } from "lucide-react";

const StatsSection = memo(
  ({
    technicalCount,
    categoriesCount,
    languagesCount,
    softSkillsCount,
  }: {
    technicalCount: number;
    categoriesCount: number;
    languagesCount: number;
    softSkillsCount: number;
  }) => {
    const stats = useMemo(
      () => [
        {
          label: "Technical Skills",
          value: technicalCount,
          icon: Code,
          color: "from-blue-500 to-cyan-500",
          textColor: "text-blue-600 dark:text-blue-400",
          iconBg: "from-blue-500 to-cyan-500",
          borderColor: "border-blue-200 dark:border-blue-800/50",
          hoverBorder:
            "group-hover:border-blue-400 dark:group-hover:border-blue-500",
        },
        {
          label: "Categories",
          value: categoriesCount,
          icon: Briefcase,
          color: "from-green-500 to-emerald-500",
          textColor: "text-green-600 dark:text-green-400",
          iconBg: "from-green-500 to-emerald-500",
          borderColor: "border-green-200 dark:border-green-800/50",
          hoverBorder:
            "group-hover:border-green-400 dark:group-hover:border-green-500",
        },
        {
          label: "Languages",
          value: languagesCount,
          icon: Globe,
          color: "from-purple-500 to-pink-500",
          textColor: "text-purple-600 dark:text-purple-400",
          iconBg: "from-purple-500 to-pink-500",
          borderColor: "border-purple-200 dark:border-purple-800/50",
          hoverBorder:
            "group-hover:border-purple-400 dark:group-hover:border-purple-500",
        },
        {
          label: "Soft Skills",
          value: softSkillsCount,
          icon: Users,
          color: "from-orange-500 to-red-500",
          textColor: "text-orange-600 dark:text-orange-400",
          iconBg: "from-orange-500 to-red-500",
          borderColor: "border-orange-200 dark:border-orange-800/50",
          hoverBorder:
            "group-hover:border-orange-400 dark:group-hover:border-orange-500",
        },
      ],
      [technicalCount, categoriesCount, languagesCount, softSkillsCount],
    );

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20"
      >
        <div className="bg-linear-to-br from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden relative backdrop-blur-sm">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl opacity-50" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="relative group"
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute -inset-1 bg-linear-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500`}
                />

                <div
                  className={`relative flex items-center gap-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border-2 ${stat.borderColor} ${stat.hoverBorder} transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`relative shrink-0 w-16 h-16 rounded-xl bg-linear-to-br ${stat.iconBg} flex items-center justify-center shadow-lg overflow-hidden`}
                  >
                    <stat.icon className="w-8 h-8 text-white relative z-10" />
                    {/* Icon shine effect */}
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5,
                      }}
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className={`text-4xl font-bold ${stat.textColor} mb-1`}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>

                  {/* Animated accent indicator */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-3/5 bg-linear-to-b ${stat.color} rounded-full shadow-lg`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  },
);

StatsSection.displayName = "StatsSection";

export default StatsSection;
