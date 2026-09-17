"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Twitter, Share2, X } from "lucide-react";

interface SocialItem {
  name: string;
  url: string;
  icon: React.ReactNode;
  hoverColor: string;
  hoverBg: string;
}

export default function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const socials: SocialItem[] = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sohag-a5550a374/",
      icon: <Linkedin size={19} />,
      hoverColor: "hover:text-white",
      hoverBg: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
    },
    {
      name: "GitHub",
      url: "https://github.com/Sohag016",
      icon: <Github size={19} />,
      hoverColor: "hover:text-white",
      hoverBg: "hover:bg-slate-700 hover:border-slate-600",
    },
    {
      name: "Twitter",
      url: "https://x.com/Sohag_H75",
      icon: <Twitter size={19} />,
      hoverColor: "hover:text-white",
      hoverBg: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]",
    },
    {
      name: "ORCID",
      url: "https://orcid.org/0009-0003-8398-071X",
      icon: (
        <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
        </svg>
      ),
      hoverColor: "hover:text-white",
      hoverBg: "hover:bg-[#a6ce39] hover:border-[#a6ce39]",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/8801640368708",
      icon: (
        <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      hoverColor: "hover:text-white",
      hoverBg: "hover:bg-[#25D366] hover:border-[#25D366]",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col-reverse items-center gap-3 select-none"
    >
      {/* Floating Toggle Button (Located at exact same bottom-right spot) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close socials menu" : "Connect with me"}
        title={isOpen ? "Close" : "Connect with me"}
        className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xl touch-manipulation ${
          isOpen
            ? "bg-slate-800 text-slate-200 border border-slate-700 shadow-black/50 rotate-90"
            : "bg-blue-600 text-white border border-blue-400/40 shadow-blue-600/50 hover:bg-blue-500"
        }`}
      >
        {isOpen ? <X size={22} /> : <Share2 size={22} />}

        {/* Pulsing Attention Dot when closed */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
          </span>
        )}
      </motion.button>

      {/* Expandable Social Icons Panel (Opens Upward) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col items-center gap-2 p-2 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/70"
          >
            {socials.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="relative group"
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-slate-300 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${social.hoverBg} ${social.hoverColor} touch-manipulation`}
                >
                  {social.icon}
                </a>

                {/* Floating Tooltip to the Left */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2.5 py-1 bg-slate-900/95 text-white text-xs font-semibold rounded-lg shadow-xl border border-white/10 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 z-50">
                  {social.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
