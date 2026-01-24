"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-background px-4 md:px-6 border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* LEFT: Text Content (Taking ~80% width on Desktop) */}
          <div className="w-full md:w-[80%] relative z-10">
            
            <h2 className="text-m font-bold uppercase tracking-[0.2em] text-[#3DDC84] mb-5">
              Engineering Philosophy
            </h2>
            
            <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-6 leading-tight">
              How I approach <br />
              Android Engineering.
            </h3>

            <div className="space-y-4 max-w-3xl">
              <p className="text-small md:text-base text-zinc-800 dark:text-zinc-100 font-medium leading-relaxed">
                I focus on building Android applications that are easy to reason about and easy to extend.
              </p>
              
              <p className="text-small md:text-base text-zinc-800 dark:text-zinc-100 font-medium leading-relaxed">
                I prioritize clear state management, modular structure, and offline-first behavior, so apps remain reliable as they grow. My current work centers on Kotlin, Jetpack Compose, and modern Android architecture patterns.
              </p>
            </div>

          </div>

          {/* RIGHT: Gradient & Fainted Image (Visual Decoration) */}
          <div className="w-full md:w-[20%] h-32 md:h-auto relative flex justify-center md:justify-end items-center">
            
            {/* The Gradient Blob */}
            <div className="absolute inset-0 bg-linear-to-br from-[#3DDC84]/10 to-blue-500/10 rounded-3xl blur-2xl" />
            
            {/* The Fainted Image */}
            <div className="relative w-32 h-32 opacity-40 md:grayscale-0 md:opacity-40 transition-opacity duration-500 hover:opacity-50 hover:grayscale-0">
               <Image 
                 src="/skills/kotlin.svg" // Using the existing logo
                 alt="Kotlin Logo"
                 fill
                 unoptimized // Prevents the crash/lag
                 className="object-contain"
               />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}