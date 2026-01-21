"use client";

import React from "react";
import Image from "next/image";
import data from "@/assets/data";

import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  FolderGit2,
  Code,
  Github,
  Linkedin,
  Facebook,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  // Calculate years of experience (approximate based on start year 2023)
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const experienceYears =
    currentYear - startYear + (new Date().getMonth() >= 0 ? 1 : 0); // Rough "2+" style

  // Calculate total technologies (only technical categories)
  const technicalCategories = ["Front-End", "Back-End"];
  const totalTechnologies = data.skills.reduce((acc, skillCategory) => {
    if (technicalCategories.includes(skillCategory.type)) {
      return acc + skillCategory.list.length;
    }
    return acc;
  }, 0);

  const stats = [
    {
      label: "Years Experience",
      value: `${experienceYears}+`,
      icon: Briefcase,
    },
    {
      label: "Completed Projects",
      value: data.projects.length.toString(),
      icon: FolderGit2,
    },
    {
      label: "Technologies",
      value: `${totalTechnologies}+`,
      icon: Code,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-black/50 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Image Section */}
          <div className="w-full lg:w-5/12 relative group">
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl z-10 border-4 border-white dark:border-gray-800">
              <Image
                src="/imgs/portfolioImg.jpg"
                alt={data.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute top-4 -right-4 w-full h-full rounded-2xl border-4 border-blue-500/20 z-0 hidden md:block group-hover:top-2 group-hover:-right-2 transition-all duration-300" />
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-4 border-purple-500/20 z-0 hidden md:block group-hover:-bottom-2 group-hover:-left-2 transition-all duration-300" />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                About Me
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {data.name}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                {data.title}
              </p>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                {data.summary.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* View CV Button */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href={data.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <FileText className="w-5 h-5" />
                  <span>View CV</span>
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors text-center lg:text-left"
                >
                  <stat.icon className="w-6 h-6 text-blue-500 mb-2 mx-auto lg:mx-0" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Details & Socials */}
            <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start pt-6 border-t border-gray-100 dark:border-gray-800">
              {/* Email */}
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium">{data.email}</span>
              </a>

              {/* Phones */}
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <div className="p-2.5 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex flex-col gap-1">
                  {data.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone}`}
                      className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <div className="p-2.5 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium">{data.address}</span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-gray-200 dark:bg-gray-800 mx-2" />

              {/* Social Media Links */}
              <div className="flex gap-3">
                {data.socialMedia.map((social) => {
                  const Icon =
                    social.icon === "Github"
                      ? Github
                      : social.icon === "Linkedin"
                        ? Linkedin
                        : social.icon === "Facebook"
                          ? Facebook
                          : Github;
                  return (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-500 dark:text-gray-400 hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
