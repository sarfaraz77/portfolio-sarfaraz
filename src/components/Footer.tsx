"use client";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-6 md:py-8 bg-background border-t border-black/5 dark:border-white/5 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* LEFT: Copyright & Build Info */}
        <div className="flex flex-col items-center md:items-start text-[10px] font-mono text-zinc-400 uppercase tracking-widest gap-1">
          <span>© 2026 Sarfaraz Shaikh</span>
          <span className="opacity-50">Build v1.0 // Next.js</span>
        </div>

        {/* CENTER: System Status Indicator */}
        

        {/* RIGHT: Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-800          dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors "
        >
          Return to Top
          <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-[#3DDC84] group-hover:text-white transition-colors">
            <ArrowUp size={12} />
          </div>
        </button>

      </div>
    </footer>
  );
}