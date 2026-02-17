"use client";
import { ArrowDownRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    // FIX 2: Layout Change
    // - Removed 'justify-center'
    // - Added 'justify-start pt-32' (Pushes content up on mobile)
    // - On Desktop (md), we return to 'md:justify-center md:pt-0' for perfect centering
    <section className="relative min-h-screen flex flex-col justify-start pt-32 md:justify-center md:pt-0 px-6 overflow-hidden bg-background">
      
      {/* Background Gradient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none opacity-20 dark:opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(61, 220, 132, 0.4) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)"
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10 md:pt-10">
        
        {/* Badge */}
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-black/15 dark:border-white/15 bg-black/6 dark:bg-white/6 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#1bb35f] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-800 dark:text-zinc-100">
              Open to Software Engineering Roles
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
          {/* FIX 3: Reduced Desktop Size (lg:text-8xl instead of 9xl) */}
          <h1 className="text-6xl md:text-8xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-green-600 dark:text-green-400">
            Android<br />
            <span className="text-black dark:text-zinc-100">Engineer.</span>
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-2xl animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg md:text-xl font-medium text-zinc-600 dark:text-white leading-relaxed mb-10">
            I build modern Android applications using <span className="text-black dark:text-green-200 font-bold">Kotlin and Jetpack Compose, </span>
            with an emphasis on <span className="text-black dark:text-green-200 font-bold">clear architecture, performance & scalable design.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-xs uppercase tracking-[0.2em] overflow-hidden hover:opacity-80 transition-opacity"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowDownRight size={16} />
              </span>
            </a>

            <a 
              href="#contact" 
              className="px-10 py-4 border border-black/80 dark:border-white/80 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-black/8 dark:hover:bg-white/15 transition-colors text-black dark:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* FIX 4: Footer Positioning */}
      {/* - Mobile: 'mt-20' (Not absolute) - This forces it to sit BELOW the buttons, never overlapping */}
      {/* - Desktop: 'md:absolute md:bottom-10 md:mt-0' - Returns to the corner on PC */}
      <div className="mt-20 md:mt-0 md:absolute md:bottom-10 md:left-6 flex items-center gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest opacity-50 z-10 animate-fade-in" style={{ animationDelay: "1s" }}>
        <Terminal size={13} />
        <span>Sarfaraz Shaikh - V1.1</span>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>

    </section>
  );
}