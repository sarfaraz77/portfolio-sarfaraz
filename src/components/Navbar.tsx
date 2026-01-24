"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const AndroidLogo = () => (
  <svg width="24" height="24" viewBox="0 0 142 107" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#049344]">
    <path d="M107.4 29.6L118.4 10.6C119.2 9.2 118.7 7.4 117.3 6.6C115.9 5.8 114.1 6.3 113.3 7.7L102.1 27C92.2 22.5 81.3 20 70.1 20C58.9 20 48 22.5 38.1 27L26.9 7.7C26.1 6.3 24.3 5.8 22.9 6.6C21.5 7.4 21 9.2 21.8 10.6L32.8 29.6C13.5 40.8 0.4 61.2 0 84.8H140.2C139.8 61.2 126.7 40.8 107.4 29.6ZM47 62.4C43 62.4 39.8 59.2 39.8 55.2C39.8 51.2 43 48 47 48C51 48 54.2 51.2 54.2 55.2C54.2 59.2 51 62.4 47 62.4ZM93.2 62.4C89.2 62.4 86 59.2 86 55.2C86 51.2 89.2 48 93.2 48C97.2 48 100.4 51.2 100.4 55.2C100.4 59.2 97.2 62.4 93.2 62.4Z" fill="currentColor" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  const spotlightGradient = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(150px circle at ${x}px ${y}px, rgba(61, 220, 132, 0.15), transparent 80%)`
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-100 md:px-4">
      <motion.nav
        onMouseMove={(e) => {
          const { left, top } = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - left);
          mouseY.set(e.clientY - top);
        }}
        // FIX 1: Animate borderRadius. "50px" is circular (pill), "24px" is rounded rect (card)
        animate={{
          borderRadius: isOpen ? "24px" : "50px"
        }}
        className="w-full max-w-[90%] border relative overflow-hidden backdrop-blur-xl transition-colors duration-300"
        style={{
          backgroundColor: "var(--nav-bg)",
          borderColor: "var(--nav-border)"
        }}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 hover:opacity-100 hidden md:block transition-opacity duration-500"
          style={{ background: spotlightGradient }}
        />

        <div className="px-6 h-16 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <AndroidLogo />
            <span className="text-black dark:text-white text-sm font-bold uppercase tracking-tighter">
              Sarfaraz Shaikh
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white uppercase tracking-widest transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-black dark:text-white"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-black dark:text-white"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-black/5 dark:border-white/5 overflow-hidden"
            >
              {/* FIX 2: Added 'items-center' and 'text-center' to center everything */}
              <div className="flex flex-col items-center justify-center p-6 gap-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white uppercase tracking-widest transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}