"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion"; 

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ... (Keep your ALL_PROJECTS array and Variants here exactly as before) ...
const ALL_PROJECTS = [
  // ... keep existing data
  { id: 1, title: "BreatheBetter App", category: "Well Being", image: "/skills/breathebetter.webp", desc: "Asthma Control tips", link: "https://github.com/sarfaraz77/BreatheBetter" },
  { id: 1, title: "Superheroes List", category: "Entertainment", image: "/skills/heroes.webp", desc: "List of Superheroes & their super powers", link: "https://github.com/sarfaraz77/superheroes-app" },
  { id: 1, title: "Car Collection", category: "Entertainment", image: "/skills/kotlin.svg", desc: "List of cars", link: "https://github.com/sarfaraz77/car-collection-app" },
  { id: 2, title: "Lemonade App", category: "Demo", image: "/skills/lemons.svg", desc: "Offline-first KMP retail module.", link: "https://github.com/sarfaraz77/lemonade_app" },
  { id: 1, title: "GeoCam App (Under Development)", category: "Utility", image: "/skills/kotlin.svg", desc: "GPS-tagged photo capture tool.", link: "https://github.com/sarfaraz77/" },
]
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectsPage() {
  return (
    // FIX 1: Add 'flex flex-col' here to enable vertical stacking
    <main className="min-h-screen bg-background relative flex flex-col">
      
      <Navbar />

      {/* FIX 2: Add 'flex-grow w-full' here. 
          This forces the content to expand and push the footer down. */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-24 flex-grow w-full">
        
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg">
            A repository of deployed applications, architectural experiments, and open-source contributions.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {ALL_PROJECTS.map((project) => (
            <motion.a
              key={project.id}
              variants={itemVariants}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative flex items-center overflow-hidden
                h-32 rounded-2xl p-3
                border border-black/5 dark:border-white/5
                hover:border-black/10 dark:hover:border-white/20
                bg-gradient-to-br from-green-300/[0.08] to-green-300/5 
                dark:from-green-300/10 dark:to-zinc-900/10
                transition-all duration-200 hover:scale-[1.01] active:scale-95
              "
            >
              <div className="relative h-full aspect-square flex-shrink-0 bg-white dark:bg-black/20 rounded-xl border border-black/5 dark:border-white/5 flex items-center justify-center p-3">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full opacity-90 group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="flex flex-col justify-between h-full pl-4 py-1 flex-grow min-w-0">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-[#3DDC84] transition-colors">{project.category}</span>
                    <ArrowUpRight size={14} className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white truncate">{project.title}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium line-clamp-2 mt-1">{project.desc}</p>
                </div>
                <div className="flex items-center gap-2 mt-auto pt-2">
                   <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <Github size={10} className="text-black dark:text-white" />
                      <span className="text-[9px] font-bold text-black dark:text-white">Source</span>
                   </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <Footer />
      
    </main>
  );
}