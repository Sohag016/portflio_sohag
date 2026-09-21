"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FileText, ExternalLink, ChevronDown } from "lucide-react";
import { researchPapers } from "@/data/portfolio";

/**
 * Individual stacking card with sticky positioning.
 * Sticks to viewport on scroll; next card overlaps it.
 * On hover, card pops to front with elevated z-index.
 */
function StickyCard({
  paper,
  index,
  totalCards,
  hoveredIndex,
  onHover,
  onLeave,
}: {
  paper: (typeof researchPapers)[number];
  index: number;
  totalCards: number;
  hoveredIndex: number | null;
  onHover: (i: number) => void;
  onLeave: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [paper.abstract]);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Scale down + fade as the next card scrolls over (desktop only)
  const isLast = index === totalCards - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.4]);

  // Sticky top increases per card so they stack with a slight peek
  const stickyTop = 70 + index * 24;

  // Z-index logic: hovered card jumps to top, otherwise natural stacking order
  const isHovered = hoveredIndex === index;
  const zIndex = isHovered ? 100 : index + 1;

  return (
    <div
      ref={cardRef}
      style={{
        // On mobile, use standard spacing to prevent overlapping touches; on desktop, keep sticky scroll room
        paddingBottom: isLast ? 0 : isMobile ? 32 : 100,
      }}
    >
      <motion.div
        style={{
          position: isMobile ? "relative" : "sticky",
          top: isMobile ? "auto" : stickyTop,
          zIndex: isMobile ? 1 : zIndex,
          scale: isLast || isMobile ? undefined : scale,
          opacity: isLast || isMobile ? undefined : opacity,
          transformOrigin: "top center",
        }}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={onLeave}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: index * 0.12 }}
          whileHover={{ scale: 1.015, y: -4 }}
          className={`
            bg-white border rounded-3xl p-6 sm:p-9 
            transition-all duration-300 cursor-pointer
            ${isHovered
              ? "border-blue-300 ring-2 ring-blue-400/30 shadow-2xl"
              : "border-slate-200/90 shadow-lg"
            }
          `}
          style={{
            boxShadow: isHovered
              ? "0 30px 70px rgba(59,130,246,0.18), 0 10px 30px rgba(0,0,0,0.1)"
              : `0 ${8 + index * 5}px ${25 + index * 10}px rgba(0,0,0,${0.05 + index * 0.025})`,
          }}
        >
          {/* Card number badge */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-xs font-black text-white"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(135deg, #3b82f6, #6366f1)"
                    : "linear-gradient(135deg, #8b5cf6, #a855f7)",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Research Paper
            </span>
            <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 ml-auto">
              {paper.citationsCount ?? 0} Citations
            </span>
          </div>

          {/* Paper Title */}
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-3 hover:text-blue-600 transition-colors relative z-10">
            {paper.pdfUrl && paper.pdfUrl !== "#" ? (
              <a
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline touch-manipulation inline-flex items-center gap-1.5"
              >
                {paper.title} <ExternalLink size={16} className="inline shrink-0 opacity-70" />
              </a>
            ) : (
              <span>{paper.title}</span>
            )}
          </h3>

          {/* Authors List */}
          <p className="text-xs sm:text-sm font-semibold text-emerald-700 leading-relaxed mb-2">
            {paper.authors}
          </p>

          {/* Journal / Venue */}
          <p className="text-xs sm:text-sm italic font-semibold text-slate-500 mb-4">
            {paper.venue}
          </p>

          {/* Abstract Summary */}
          <div className="mb-6 border-l-3 border-blue-500 pl-4 bg-slate-50 py-3 rounded-r-xl">
            <p
              ref={textRef}
              className={`text-slate-700 text-sm leading-relaxed ${
                !expanded ? "line-clamp-3" : ""
              }`}
            >
              {paper.abstract}
            </p>
            {isClamped && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(!expanded);
                }}
                className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer touch-manipulation"
              >
                {expanded ? "See less" : "See more"}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>

          {/* Links & Citation Counter */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold pt-2">
            {paper.pdfUrl && paper.pdfUrl !== "#" ? (
              <a
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl transition-all shadow-md touch-manipulation relative z-20"
              >
                <FileText size={15} /> PDF Paper
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200">
                <FileText size={14} /> Paper Under Review
              </span>
            )}

            {paper.doiUrl && paper.doiUrl !== "#" ? (
              <a
                href={paper.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 active:scale-95 text-blue-700 rounded-xl transition-all touch-manipulation relative z-20"
              >
                <ExternalLink size={15} /> DOI Link
              </a>
            ) : null}

            <span className="text-slate-500 font-semibold ml-auto text-xs">
              Cited by {paper.citationsCount ?? 0}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Research() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="research"
      className="py-[50px] md:py-[50px] lg:py-[100px] bg-slate-50 text-slate-900 scroll-mt-24"
    >
      <div className="container w-[90%] sm:w-[95%] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-4">
            <div className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-purple-100 text-purple-600 shrink-0 shadow-sm">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              Research{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Publication
              </span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              My research focus spans:
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {[
                "Machine Learning",
                "Explainable AI (XAI)",
                "Federated Learning",
                "Computer Vision",
                "Multimodal AI",
                "Healthcare AI",
                "Natural Language Processing",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] sm:text-xs font-bold text-blue-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stacking Cards */}
        <div className="max-w-4xl mx-auto">
          {researchPapers.map((paper, index) => (
            <StickyCard
              key={paper.id}
              paper={paper}
              index={index}
              totalCards={researchPapers.length}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
