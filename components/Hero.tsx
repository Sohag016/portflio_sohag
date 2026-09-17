"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Linkedin, Github, Twitter } from "lucide-react";
import TypingText from "./TypingText";
import { personalInfo } from "@/data/portfolio";
import { smoothScrollTo } from "@/lib/scroll";

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href, 75, 650);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[radial-gradient(circle_at_10%_20%,#111827_0%,#0f172a_100%)] overflow-hidden text-white scroll-mt-24"
    >
      {/* Background Glow Blobs */}
      <div className="absolute -top-[10%] -left-[5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-float-bg pointer-events-none" />
      <div className="absolute -bottom-[10%] -right-[5%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-slate-800/40 rounded-full blur-[120px] animate-float-bg pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none z-0" />

      <div className="relative z-10 container w-[90%] sm:w-[95%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
                {personalInfo.statusBadge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {personalInfo.heroName}
              </span>
            </h1>

            {/* Subtitle with Typing Animation */}
            <p className="text-xl sm:text-2xl text-slate-300 font-normal mb-8 border-l-4 border-blue-500 pl-4 py-1">
              Expertise in{" "}
              <TypingText
                strings={personalInfo.typingTexts}
                className="text-white font-bold"
              />
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-base rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 touch-manipulation"
              >
                About Me <ChevronRight size={18} />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-6 py-4 text-slate-300 hover:text-blue-400 font-medium text-base transition-colors touch-manipulation"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/sohag-a5550a374/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 touch-manipulation"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Sohag016"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 touch-manipulation"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://x.com/Sohag_H75"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 touch-manipulation"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://orcid.org/0009-0003-8398-071X"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ORCID"
                  title="ORCID"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-[#a6ce39] hover:text-white hover:border-[#a6ce39] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#a6ce39]/30 touch-manipulation"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/8801640368708"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp: 01640368708"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#25D366]/30 touch-manipulation"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Image Column with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            {/* Outer Glow */}
            <div className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-blue-500/20 rounded-full blur-[60px] z-0 pointer-events-none" />

            {/* Profile Frame */}
            <div className="relative z-10 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full overflow-hidden border-8 border-white/10 shadow-2xl shadow-black/60">
              <Image
                src="/assets/images/hero.png"
                alt="Sohag Hossain"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>

            {/* NASA Badge Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-4 left-0 sm:left-[5%] bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-xl z-20"
            >
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                NASA Space Apps
              </p>
              <p className="text-xs sm:text-sm font-bold text-white">
                Global Participant
              </p>
            </motion.div>

            {/* Aspire Leaders Badge Card */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-4 right-0 sm:right-[5%] bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-xl z-20 max-w-[210px]"
            >
              <p className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">
                Aspire Leaders
              </p>
              <p className="text-xs sm:text-sm font-bold text-white">
                ★ Global Leadership Fellow
              </p>
              <p className="text-[10px] text-slate-400 font-normal leading-tight mt-0.5">
                mentored by Harvard faculty
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
