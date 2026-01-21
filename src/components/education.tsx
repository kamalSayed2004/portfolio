"use client";

import React, { memo, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, X, ZoomIn, Download } from "lucide-react";
import Image from "next/image";
import data, { Certificate } from "@/assets/data";
import { withBasePath } from "@/utils/paths";

// --- Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2 },
  },
};

// --- Sub-Components ---

interface EducationCardProps {
  cert: Certificate;
  onView: (cert: Certificate) => void;
}

const EducationCard = memo(({ cert, onView }: EducationCardProps) => {
  const content = (
    <>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/10 rounded-2xl transition-colors duration-300 pointer-events-none" />

      <div className="relative z-10 flex items-start gap-6">
        <div className="p-3 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
          {cert.degree.toLowerCase().includes("bachelor") ||
          cert.degree.toLowerCase().includes("degree") ? (
            <GraduationCap size={28} />
          ) : (
            <Award size={28} />
          )}
        </div>

        <div className="flex-1 text-left">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {cert.degree}
            </h3>
            {cert.image && (
              <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600">
                <ZoomIn size={16} />
              </div>
            )}
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-3">
            {cert.institution}
          </p>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-[10px] font-black tracking-widest uppercase text-gray-400 mb-4 self-start">
            <span
              className={`w-2 h-2 rounded-full ${
                cert.status === "Completed" ? "bg-emerald-500" : "bg-amber-500"
              }`}
            />
            {cert.status}
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {cert.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {cert.skills?.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-blue-50/50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const hasImage = !!cert.image;

  return (
    <motion.div
      variants={itemVariants}
      onClick={() => hasImage && onView(cert)}
      className={`group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-100 dark:border-gray-800/50 transition-all duration-300 overflow-hidden block w-full text-left ${
        hasImage
          ? "cursor-pointer hover:shadow-xl hover:-translate-y-1"
          : "cursor-default shadow-sm"
      }`}
    >
      {content}
    </motion.div>
  );
});

EducationCard.displayName = "EducationCard";

// --- Main Component ---

const Education = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const handleDownload = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = withBasePath(url);
    link.download = url.split("/").pop() || "certificate";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl opacity-50 animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800/50 shadow-sm mb-6">
            <GraduationCap
              size={16}
              className="text-blue-600 dark:text-blue-400"
            />
            <span className="text-xs font-bold text-gray-900 dark:text-white tracking-widest uppercase">
              Academic Background
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            My academic qualifications and professional certifications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {data.certificates.map((cert, index) => (
            <EducationCard key={index} cert={cert} onView={setSelectedCert} />
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && selectedCert.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-5xl w-full bg-white dark:bg-gray-900 rounded-[32px] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedCert.degree}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {selectedCert.institution}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleDownload(e, selectedCert.image!)}
                    className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all active:scale-95"
                    title="Download Certificate"
                  >
                    <Download size={20} />
                  </button>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all active:scale-95"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative aspect-4/3 sm:aspect-video w-full bg-gray-50 dark:bg-gray-950 overflow-hidden">
                <Image
                  src={withBasePath(selectedCert.image)}
                  alt={selectedCert.degree}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
