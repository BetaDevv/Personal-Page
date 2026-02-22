"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Backend & Python",
    skills: ["Python", "Django", "Django REST Framework", "FastAPI", "SQLAlchemy", "PostgreSQL"],
  },
  {
    title: "IA & Datos",
    skills: ["Langchain", "RAG", "OpenAI API", "Pandas", "Asyncio"],
  },
  {
    title: "Herramientas & DevOps",
    skills: ["Git", "Docker", "Linux", "WordPress", "CSS/HTML", "VS Code"],
  },
  {
    title: "Soft Skills",
    skills: ["Liderazgo", "Curiosidad intelectual", "Resolución de problemas", "Aprendizaje continuo"],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-purple-500 to-transparent" />
            <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
              Habilidades
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Stack <span className="gradient-text">tecnológico</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Las tecnologías y herramientas que utilizo para dar vida a las ideas.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <AnimatedSection key={category.title} delay={catIdx * 0.1} className="h-full">
              <div className="glass-card rounded-2xl p-6 h-full">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1 + i * 0.04 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="skill-badge px-4 py-2 rounded-xl text-sm text-purple-300 font-medium cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
