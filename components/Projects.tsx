"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import projectsData from "@/data/projects.json";

interface ProjectItem {
  name: string;
  desc: string;
  image: string;
  category: string;
  links: {
    view: string;
    code: string;
  };
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...Array.from(new Set((projectsData as ProjectItem[]).map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? (projectsData as ProjectItem[])
      : (projectsData as ProjectItem[]).filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-[50px] md:py-[50px] lg:py-[100px] bg-white text-slate-900 overflow-hidden scroll-mt-24"
    >
      <div className="container w-[90%] sm:w-[95%] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-4">
            <div className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600 shrink-0 shadow-sm">
              <FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              My <span className="text-blue-600">Projects</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Explore my research work across Machine Learning, Deep Learning, Explainable AI, Federated Learning, and AI for Healthcare.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 touch-manipulation active:scale-95 ${isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 hover:border-blue-300"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const imagePath = `/assets/images/projects/${project.image}.png`;

              return (
                <motion.div
                  key={`${project.name}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 flex flex-col justify-between hover:-translate-y-2"
                >
                  <div>
                    {/* Project Image Banner */}
                    <div className="relative w-full h-52 bg-slate-200 overflow-hidden">
                      <Image
                        src={imagePath}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                        onError={(e) => {
                          // Fallback if png image is missing
                          const target = e.target as HTMLImageElement;
                          target.src = "/assets/images/hero1.png";
                        }}
                      />
                      <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  {/* Links Bar */}
                  <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center gap-3">
                    {project.links.view && project.links.view !== "#" && (
                      <a
                        href={project.links.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-blue-600/20 touch-manipulation"
                      >
                        View Demo <ExternalLink size={14} />
                      </a>
                    )}
                    {project.links.code && project.links.code !== "#" && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md touch-manipulation"
                      >
                        Source Code <Github size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
