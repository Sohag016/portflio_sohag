"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Briefcase, LayoutGrid, Award, HeartHandshake, Eye, ExternalLink } from "lucide-react";
import { timelineExperiences, certificateList } from "@/data/portfolio";
import CertificateModal from "./CertificateModal";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"all" | "work" | "extracurricular" | "certification">("all");
  const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null);
  const [selectedCertTitle, setSelectedCertTitle] = useState<string>("");

  const isImageLink = (url: string) => /\.(jpg|jpeg|png|webp|gif|svg)($|\?)/i.test(url);

  const openCertificate = (imgSrc: string, title: string) => {
    setSelectedCertImage(imgSrc);
    setSelectedCertTitle(title);
  };

  return (
    <section
      id="experience"
      className="py-[40px] sm:py-32 bg-slate-900 text-white overflow-hidden scroll-mt-24"
    >
      <div className="container w-[90%] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-4">
            <div className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-blue-500/10 text-blue-400 shrink-0 border border-blue-500/20 shadow-sm">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Experience & <span className="text-blue-500">Achievements</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Virtual internships, global fellowships, hackathon recognitions, and professional course certifications.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveTab("all")}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "all"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 scale-105"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}
          >
            <LayoutGrid size={16} /> All Experience
          </button>

          <button
            onClick={() => setActiveTab("work")}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "work"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 scale-105"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}
          >
            <Briefcase size={16} /> Work & Internships
          </button>

          <button
            onClick={() => setActiveTab("extracurricular")}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "extracurricular"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 scale-105"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}
          >
            <HeartHandshake size={16} /> Extracurricular
          </button>

          <button
            onClick={() => setActiveTab("certification")}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "certification"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 scale-105"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}
          >
            <Award size={16} /> Certifications
          </button>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {/* ALL & WORK & EXTRACURRICULAR TIMELINE VIEWS */}
          {(activeTab === "all" || activeTab === "work" || activeTab === "extracurricular") && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Timeline Container */}
              <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-800">
                {timelineExperiences
                  .filter((item) => {
                    if (activeTab === "work") {
                      return item.id === "codealpha" || item.id === "aspire-fellow";
                    }
                    if (activeTab === "extracurricular") {
                      return (
                        item.id === "solvio-hackathon" ||
                        item.id === "cuet-datathon" ||
                        item.id === "igso-volunteer" ||
                        item.id === "shikkhar-alo"
                      );
                    }
                    return true;
                  })
                  .map((item, index) => {
                    const isEven = index % 2 === 0;

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12`}
                      >
                        {/* Timeline Center Dot Icon */}
                        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border-2 border-blue-500 text-blue-400 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <Briefcase size={16} />
                        </div>

                        {/* Card Container */}
                        <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-xl hover:border-slate-700 transition-all">
                          <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4"
                            style={{
                              backgroundColor: item.tagBg,
                              color: item.tagColor,
                            }}
                          >
                            {item.tag}
                          </span>

                          <h3 className="text-2xl font-black text-white tracking-tight mb-1">
                            {item.company}
                          </h3>
                          <h4 className="text-sm font-bold text-blue-400 mb-4">
                            {item.role} | {item.period}
                          </h4>

                          <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-3">
                            {item.links.map((link, lIdx) =>
                              isImageLink(link.url) ? (
                                <button
                                  key={lIdx}
                                  onClick={() =>
                                    openCertificate(link.url, `${item.company} - ${link.label}`)
                                  }
                                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 inline-flex items-center gap-1.5 touch-manipulation active:scale-95 ${
                                    link.secondary
                                      ? "bg-transparent text-slate-300 border border-slate-700 hover:bg-slate-800"
                                      : "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20"
                                  }`}
                                >
                                  <Eye size={14} /> {link.label}
                                </button>
                              ) : (
                                <a
                                  key={lIdx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 inline-flex items-center gap-1.5 touch-manipulation active:scale-95 ${
                                    link.secondary
                                      ? "bg-transparent text-slate-300 border border-slate-700 hover:bg-slate-800"
                                      : "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20"
                                  }`}
                                >
                                  <ExternalLink size={14} /> {link.label}
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>

              {/* Show Certifications section inside ALL tab */}
              {activeTab === "all" && (
                <div className="pt-16 border-t border-slate-800">
                  <h3 className="text-3xl font-black text-center text-white mb-12">
                    Professional Course <span className="text-blue-500">Certifications</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certificateList.map((cert) => (
                      <div
                        key={cert.id}
                        className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all"
                      >
                        <div>
                          <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-slate-800 mb-6 group">
                            <Image
                              src={cert.image}
                              alt={cert.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              unoptimized
                            />
                            {cert.badge && (
                              <div className="absolute top-3 right-3 bg-rose-600 text-white font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-md tracking-wider">
                                {cert.badge}
                              </div>
                            )}
                          </div>

                          <h4 className="text-xl font-extrabold text-white tracking-tight mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-xs font-bold text-blue-400 mb-3">
                            {cert.issuer} {cert.subIssuer && `| ${cert.subIssuer}`} ({cert.date})
                          </p>
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 italic">
                            "{cert.description}"
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                          {cert.links.map((link, idx) =>
                            isImageLink(link.url) ? (
                              <button
                                key={idx}
                                onClick={() =>
                                  openCertificate(link.url, `${cert.title} - ${link.label}`)
                                }
                                className={`flex-1 px-4 py-2.5 rounded-xl text-xs font-bold text-center transition-all inline-flex items-center justify-center gap-1.5 touch-manipulation active:scale-95 ${
                                  link.primary
                                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md"
                                    : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                                }`}
                              >
                                <Eye size={14} /> {link.label}
                              </button>
                            ) : (
                              <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex-1 px-4 py-2.5 rounded-xl text-xs font-bold text-center transition-all inline-flex items-center justify-center gap-1.5 touch-manipulation active:scale-95 ${
                                  link.primary
                                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md"
                                    : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                                }`}
                              >
                                <ExternalLink size={14} /> {link.label}
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* CERTIFICATIONS ONLY TAB VIEW */}
          {activeTab === "certification" && (
            <motion.div
              key="certification"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {certificateList.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all"
                >
                  <div>
                    <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-slate-800 mb-6 group">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      {cert.badge && (
                        <div className="absolute top-3 right-3 bg-rose-600 text-white font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-md tracking-wider">
                          {cert.badge}
                        </div>
                      )}
                    </div>

                    <h4 className="text-xl font-extrabold text-white tracking-tight mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-bold text-blue-400 mb-3">
                      {cert.issuer} ({cert.date})
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 italic">
                      "{cert.description}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cert.links.map((link, idx) =>
                      isImageLink(link.url) ? (
                        <button
                          key={idx}
                          onClick={() =>
                            openCertificate(link.url, `${cert.title} - ${link.label}`)
                          }
                          className={`flex-1 px-4 py-2.5 rounded-xl text-xs font-bold text-center transition-all inline-flex items-center justify-center gap-1.5 touch-manipulation active:scale-95 ${
                            link.primary
                              ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md"
                              : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                          }`}
                        >
                          <Eye size={14} /> {link.label}
                        </button>
                      ) : (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 px-4 py-2.5 rounded-xl text-xs font-bold text-center transition-all inline-flex items-center justify-center gap-1.5 touch-manipulation active:scale-95 ${
                            link.primary
                              ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md"
                              : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                          }`}
                        >
                          <ExternalLink size={14} /> {link.label}
                        </a>
                      )
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Certificate Modal */}
      <CertificateModal
        isOpen={Boolean(selectedCertImage)}
        onClose={() => setSelectedCertImage(null)}
        imageSrc={selectedCertImage || ""}
        title={selectedCertTitle}
      />
    </section>
  );
}
