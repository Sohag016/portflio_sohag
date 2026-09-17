"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { educationList } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="py-[50px] md:py-[50px] lg:py-[100px] bg-slate-50 text-slate-900 overflow-hidden scroll-mt-24"
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
            <div className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-blue-100 text-blue-600 shrink-0 shadow-sm">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              My <span className="text-blue-600">Education</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto italic font-medium">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
        </motion.div>

        {/* Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-[30px] border border-slate-200/80 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
            >
              {/* Header Dark Banner */}
              <div className="bg-slate-900 p-6 sm:p-8 text-white relative">
                <span className="inline-block px-4 py-1 bg-sky-500/20 text-sky-400 rounded-full text-xs font-extrabold uppercase tracking-widest mb-3">
                  {edu.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base font-medium">
                  {edu.institution}
                </p>
              </div>

              {/* Grade & Session Grid */}
              <div className="grid grid-cols-2 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50/50">
                <div className="p-5 sm:p-6 text-center">
                  <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
                    {edu.gradeLabel}
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-blue-600 mt-1">
                    {edu.grade}{" "}
                    <span className="text-xs text-slate-400 font-normal">
                      {edu.gradeMax}
                    </span>
                  </p>
                </div>
                <div className="p-5 sm:p-6 text-center">
                  <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
                    Academic Session
                  </p>
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-800 mt-1">
                    {edu.period}
                  </p>
                </div>
              </div>

              {/* Main Content Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1">
                {/* Specialization Tags */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3 flex items-center gap-2">
                    <span className="w-5 h-0.5 bg-blue-600 rounded-full" />
                    {edu.specializationLabel}
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {edu.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Final Year Thesis Card if available */}
                {edu.thesis && (
                  <div className="bg-gradient-to-br from-amber-50/60 to-orange-50/60 p-6 rounded-2xl border-l-4 border-slate-900 border border-amber-200/60">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-black uppercase tracking-wider text-amber-900">
                        Final Year Thesis
                      </span>
                      <span className="text-[10px] bg-slate-900 text-white font-bold px-2.5 py-0.5 rounded-md">
                        {edu.thesis.status}
                      </span>
                    </div>
                    <h5 className="text-lg font-extrabold text-slate-900 leading-snug">
                      {edu.thesis.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 italic leading-relaxed">
                      {edu.thesis.description}
                    </p>
                  </div>
                )}

                {/* Achievement Box if available */}
                {edu.achievement && (
                  <div className="bg-emerald-50/70 p-4 sm:p-5 rounded-2xl border border-emerald-200/80 flex items-start gap-4">
                    <div className="text-2xl shrink-0">🏆</div>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-900 leading-relaxed">
                      {edu.achievement}
                    </p>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Credential Verified
                </span>
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
