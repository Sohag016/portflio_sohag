"use client";

import { motion } from "framer-motion";
import { Code, Brain, Network, PieChart, Rocket, UserCheck } from "lucide-react";
import { skillsCategories } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={32} className="text-blue-500" />,
  brain: <Brain size={32} className="text-emerald-500" />,
  network: <Network size={32} className="text-purple-500" />,
  "pie-chart": <PieChart size={32} className="text-amber-500" />,
  rocket: <Rocket size={32} className="text-cyan-500" />,
  "user-check": <UserCheck size={32} className="text-rose-500" />,
};

const hoverBgColors: Record<string, string> = {
  "highlight-blue": "group-hover:bg-blue-600 group-hover:border-blue-600",
  "highlight-green": "group-hover:bg-emerald-600 group-hover:border-emerald-600",
  "highlight-purple": "group-hover:bg-purple-600 group-hover:border-purple-600",
  "highlight-orange": "group-hover:bg-amber-600 group-hover:border-amber-600",
  "highlight-cyan": "group-hover:bg-cyan-600 group-hover:border-cyan-600",
  "highlight-red": "group-hover:bg-rose-600 group-hover:border-rose-600",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-[40px] sm:py-32 bg-[#0b0f1a] text-white overflow-hidden scroll-mt-24"
    >
      <div className="container w-[90%] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-5">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Advanced skills in Artificial Intelligence, Machine Learning, and Data Engineering.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#161b2b] hover:bg-[#1c233a] border border-white/10 hover:border-blue-500/80 p-8 sm:p-10 rounded-3xl transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  {iconMap[category.icon]}
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {category.subtitle && (
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-extrabold mb-5">
                    {category.subtitle}
                  </p>
                )}

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-4 py-2 rounded-xl text-sm font-bold bg-white/10 text-white border border-white/15 transition-all duration-300 ${
                        hoverBgColors[category.highlightClass]
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
