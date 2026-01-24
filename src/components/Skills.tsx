"use client";
import Image from "next/image";

// Defined Sections with their specific skills
const SKILL_SECTIONS = [
  {
    title: "Primary Stack",
    skills: [
      { name: "Kotlin", category: "Language", icon: "/skills/kotlin.svg" },
      { name: "Compose", category: "UI Toolkit", icon: "/skills/compose.svg" },
      { name: "Android SDK", category: "Platform", icon: "/skills/sdk.svg" },
      { name: "Git / Github", category: "Version Ctrl", icon: "/skills/git.svg" },
      { name: "Material 3", category: "UI", icon: "/skills/material.svg" },
    ]
  },
  {
    title: "Architecture & Data",
    skills: [
      { name: "MVVM", category: "Architecture", icon: "/skills/kotlin.svg" },
      { name: "UDF", category: "State Mngmt", icon: "/skills/kotlin.svg" },
      { name: "Coroutines", category: "concurrency", icon: "/skills/coroutine.svg" },
      { name: "Flow", category: "reactive streams", icon: "/skills/kotlin.svg" },
      { name: "DataStore", category: "Preferences", icon: "/skills/kotlin.svg" },
      { name: "Room", category: "Local Database", icon: "/skills/room.svg" },
      { name: "Hilt", category: "Dependency Inj.", icon: "/skills/kotlin.svg" },
    ]
  },
  {
    title: "Currently Exploring",
    skills: [
      { name: "KMP", category: "Shared Biz Logic", icon: "/skills/kmp.svg" },
      { name: "Ktor", category: "Networking", icon: "/skills/ktor.svg" },
      { name: "CI/CD", category: "DevOps", icon: "/skills/cicd.svg" },
      { name: "Modularization", category: "App Structure", icon: "/skills/kotlin.svg" },
      { name: "Testing", category: "Unit & UI", icon: "/skills/kotlin.svg" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background px-4 md:px-6 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto">

        {/* Main Section Title */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white">
            Core Competencies
          </h3>
        </div>

        {/* Loop through each Section */}
        <div className="flex flex-col gap-16 md:gap-24">
          {SKILL_SECTIONS.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              
              {/* Section Header */}
              <div className="mb-6 md:mb-8 border-l-2 border-zinc-600 pl-4">
                <h4 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-1">
                  {section.title}
                </h4>
              </div>

              {/* Grid: 2 cols on Mobile, 3 cols on PC */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {section.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="
                      group relative flex flex-row items-center 
                      p-2.5 md:p-3 rounded-2xl 
                      border border-black/8 dark:border-white/10 
                      
                      /* Subtly Kotlin Gradient Background */
                      bg-linear-to-br from-green-300/8 to-green-300/5 
                      dark:from-green-300/10 dark:to-black-300/10

                      hover:border-black/10 dark:hover:border-white/20 
                      hover:scale-[1.02] active:scale-95
                      transition-all duration-200 ease-out
                      cursor-default
                      will-change-transform
                    "
                  >
                    {/* Icon Container */}
                    <div className="
                      shrink-0 w-13 h-14 md:w-14 md:h-14 
                      mr-3 md:mr-4
                      rounded-xl bg-white dark:bg-black 
                      border border-black/5 dark:border-white/10 
                      flex items-center justify-center 
                      shadow-sm p-2.5
                    ">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-start min-w-0">
                      {/* Title */}
                      <h4 className="text-sm md:text-sm font-bold md:font-semibold text-black dark:text-white uppercase tracking-wider truncate w-full">
                        {skill.name}
                      </h4>

                      {/* Subtitle */}
                      <span className="text-[9px] md:text-[10px] font-semibold text-zinc-400 uppercase tracking-widest truncate w-full group-hover:text-[#049344] transition-colors duration-300">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}