"use client";

import { ChevronRight, Phone, Mail, MapPin, Heart, Linkedin, Github, Twitter, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { smoothScrollTo } from "@/lib/scroll";

export default function Footer() {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href, 75, 650);
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      <div className="container w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: About Summary */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">
              Sohag's Portfolio
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
            </p>
            <p className="text-blue-400 font-bold text-sm">
              Keep Rising 🚀
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm font-semibold text-slate-400">
              {[
                { name: "home", href: "#home" },
                { name: "about", href: "#about" },
                { name: "skills", href: "#skills" },
                { name: "education", href: "#education" },
                { name: "projects", href: "#projects" },
                { name: "experience", href: "#experience" },
                { name: "research", href: "#research" },
                { name: "contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 capitalize touch-manipulation"
                  >
                    <ChevronRight size={14} className="text-blue-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info & Socials */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-slate-400 font-medium mb-6">
              <p className="flex items-center gap-2.5">
                <Phone size={16} className="text-blue-500 shrink-0" />
                {personalInfo.phone}
              </p>
              <p className="flex items-center gap-2.5 break-all">
                <Mail size={16} className="text-blue-500 shrink-0" />
                {personalInfo.email}
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin size={16} className="text-blue-500 shrink-0" />
                {personalInfo.location}
              </p>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/sohag-a5550a374/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Sohag016"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://x.com/Sohag_H75"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://orcid.org/0009-0003-8398-071X"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID"
                title="ORCID"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-[#a6ce39] hover:text-white transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
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
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://t.me/Sohag138643"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Send size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credit Bar */}
        <div className="pt-8 border-t border-slate-900 text-center">
          <p className="text-slate-500 text-sm font-semibold inline-flex items-center gap-1.5">
            Designed with <Heart size={16} className="text-rose-500 fill-rose-500 animate-pulse" /> by{" "}
            <a
              href="https://www.linkedin.com/in/sohag-a5550a374/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors font-bold"
            >
              Sohag
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}
