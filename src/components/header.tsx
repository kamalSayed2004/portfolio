"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";

const Header = () => {
  // 2. Destructure setTheme and resolvedTheme (for accurate system toggle)
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // 3. Mount check to prevent Hydration Mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const links = [
    { name: "About", hash: "#about" },
    { name: "Skills", hash: "#skills" },
    { name: "Projects", hash: "#projects" },
    { name: "Experience", hash: "#experience" },
    { name: "Education", hash: "#education" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b transition-all duration-500 ease-in-out ${
        isScrolled
          ? "border-gray-200 dark:border-gray-800 shadow-sm py-3"
          : "border-transparent py-6"
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          variants={itemVariants}
          className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/"
        >
          Kamal
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setHoveredLink(link.hash)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={link.hash}
                  className="relative z-10 px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm lg:text-base"
                >
                  {link.name}
                  {hoveredLink === link.hash && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-500 dark:bg-blue-400 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.div variants={itemVariants} className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            // 4. Use setTheme with resolvedTheme logic
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500"
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
          >
            {/* 5. Render nothing until mounted to prevent hydration mismatch */}
            {mounted ? (
              <motion.div
                key={theme} // Key change triggers animation
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {resolvedTheme === "dark" ? "☀️" : "🌙"}
              </motion.div>
            ) : (
              <div className="w-6 h-6" /> // Placeholder to prevent layout shift
            )}
          </motion.button>

          {/* Mobile Hamburger Toggle */}
          <motion.button
            className="md:hidden p-2 text-gray-800 dark:text-gray-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Menu"
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={isOpen ? "open" : "closed"}
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            // 6. Changed to "absolute top-full" so it attaches perfectly to the bottom of the header
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-t dark:border-gray-800 overflow-hidden"
            style={{ height: "calc(100vh - 100%)" }}
          >
            <ul className="flex flex-col items-center justify-center h-full gap-8 pb-32">
              {links.map((link, i) => (
                <motion.li
                  key={link.hash}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.hash}
                    className="text-2xl font-bold text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
