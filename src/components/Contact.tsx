"use client";
import { Mail, Github, Linkedin, ArrowUpRight, FileText } from "lucide-react";

const CONTACT_LINKS = [
  {
    id: "email",
    label: "Email",
    value: "sarfaraz.encode@gmail.com",
    href: "mailto:sarfaraz.encode@gmail.com",
    icon: Mail,
    download: false,
  },
  {
    id: "github",
    label: "Code Repository",
    value: "github.com/sarfaraz77",
    href: "https://github.com/sarfaraz77",
    icon: Github,
    download: false,
  },
  {
    id: "linkedin",
    label: "Linkedin",
    value: "linkedin.com/in/sarfaraz",
    href: "https://www.linkedin.com/in/shaikh-sarfaraz/",
    icon: Linkedin,
    download: false,
  },
    {
    id: "resume",
    label: "Resume",
    value: "Download Resume (PDF)",
    href: "/resume.pdf",
    icon: FileText,
    download: true,
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-background px-4 md:px-6 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white">
            Contact
          </h3>
        </div>

        {/* Links Grid: 1 col on mobile, 2 cols on PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              download={link.download}
              className="
                group relative flex flex-col justify-between
                p-4 md:p-5 h-28 md:h-36 rounded-2xl
                
                /* CHANGE: Applied the requested subtle gradient background */
                bg-linear-to-br from-green-300/8 to-green-300/5 
                dark:from-green-300/10 dark:to-black-300/10

                border border-black/5 dark:border-white/5
                hover:border-black/10 dark:hover:border-white/20
                hover:scale-[1.02] active:scale-95
                transition-all duration-200
              "
            >
              {/* Top Row: Icon and Arrow */}
              <div className="flex justify-between items-start">
                <div className="p-2 md:p-2.5 rounded-full bg-white dark:bg-black border border-black/5 dark:border-white/10 text-black dark:text-white group-hover:text-[#3DDC84] transition-colors">
                  <link.icon size={18} />
                </div>
                
                <ArrowUpRight 
                  size={18} 
                  className="text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                />
              </div>

              {/* Bottom Row: Text */}
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-0.5">
                  {link.label}
                </span>
                <span className="text-sm md:text-base font-bold text-black dark:text-white break-all group-hover:underline decoration-[#3DDC84] decoration-2 underline-offset-4">
                  {link.value}
                </span>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}