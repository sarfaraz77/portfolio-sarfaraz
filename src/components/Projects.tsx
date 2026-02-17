"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-background px-4 md:px-6 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 md:mb-15">
          <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white">
            Featured Projects
          </h3>
        </div>

        {/* PROJECTS CONTAINER */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          
          {/* ==============================================
              PROJECT 1: Main Focus (60% Width)
             ============================================== */}
          <div className="w-full md:w-[60%] flex flex-col p-5 md:p-5 rounded-3xl bg-linear-to-br from-green-300/10 to-green-300/5 dark:from-green-300/10 dark:to-zinc-900/10 border border-black/5">
            
            {/* Title & Subtitle */}
            <div className="mb-4 h-14 md:h-16 flex flex-col justify-center">
              <h4 className="text-xl md:text-2xl font-black text-black dark:text-white mb-1">
                Digital Lemonade 
              </h4>
              <p className="text-xs md:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Kotlin & Compose
              </p>
            </div>

            {/* Phone Container */}
            <div className="grow flex justify-center items-center py-2 bg-zinc-100 dark:bg-black/20 rounded-2xl border border-black/5 dark:border-white/5">
              {/* PIXEL PHONE FRAME: Punch-Hole Camera */}
              <div className="relative w-45 md:w-50 aspect-9/19 rounded-3xl border-4 border-zinc-900 bg-black overflow-hidden shadow-xl">
                
                
                <div className="w-full h-full bg-zinc-800 relative">
                   <video
                     autoPlay
                     loop
                     muted
                     playsInline // Critical for iOS to prevent fullscreen
                     className="w-full h-full object-cover opacity-top scale-[1.03] opacity-90"
                   >
                     <source src="/projects/breathe.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                   </video>
                   
                   <div className="absolute bottom-3 right-3 px-1.5 py-0.5 bg-black/50 backdrop-blur-md rounded text-[8px] font-bold text-white uppercase tracking-widest pointer-events-none">
                     Demo
                   </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Simple App made using <strong>Kotlin & Jetpack Compose.</strong> 
              </p>
            </div>
          </div>

          {/* ==============================================
              PROJECT 2: Secondary (40% Width)
             ============================================== */}
         <div className="w-full md:w-[40%] flex flex-col p-5 md:p-5 rounded-3xl bg-linear-to-br from-green-300/[0.08] to-green-300/5 dark:from-green-300/10 dark:to-zinc-900/10 border border-black/5">
            
            {/* Title & Subtitle (Moved to TOP for alignment) */}
            <div className="mb-4 h-14 md:h-16 flex flex-col justify-center">
               {/* INCREASED SIZE: Matching Project 1 */}
               <h4 className="text-xl md:text-2xl font-black text-black dark:text-white mb-1">
                 Dice Roll App
               </h4>
               <p className="text-xs md:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                 Kotlin and Compose
               </p>
            </div>

            {/* Phone Container */}
            <div className="flex-grow flex justify-center items-center py-2 bg-zinc-200/50 dark:bg-black/20 rounded-2xl border border-black/5 dark:border-white/5">
                {/* PIXEL PHONE FRAME */}
                <div className="relative group/phone w-[180px] md:w-[200px] aspect-[9/19] rounded-[1.5rem] border-[4px] border-zinc-900 bg-black overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02]">

                   <div className="w-full h-full overflow-x-auto snap-x snap-mandatory flex scrollbar-hide">
                      <div className="snap-center w-full h-full shrink-0 relative bg-blue-500">
                        <Image src="/projects/heroes.jpg" alt="Screen 1" fill className="object-cover" />
                      </div>
                      {/* <div className="snap-center w-full h-full flex-shrink-0 relative bg-purple-500">
                        <Image src="/screen_1.png" alt="Screen 2" fill className="object-cover" />
                      </div>
                      <div className="snap-center w-full h-full flex-shrink-0 relative bg-orange-500">
                        <Image src="/screen_1.png" alt="Screen 3" fill className="object-cover" />
                      </div> */}
                   </div>

                   <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none transition-opacity duration-300 group-hover/phone:opacity-0">
                      <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest bg-black/50 px-2 py-1 rounded-full backdrop-blur-md">
                        Swipe
                      </span>
                   </div>
                </div>
            </div>

            {/* Spacer to match height of Project 1 summary (Optional, or leave empty) */}
            <div className="mt-4 pt-4 border-t border-transparent">
               <p className="text-xs md:text-sm text-transparent leading-relaxed select-none">
                 Spacer content to align boxes perfectly at the bottom if needed.
               </p>
            </div>

          </div>

        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center">
          <a 
            href="/projects" 
            className="group inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Explore All Projects
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}