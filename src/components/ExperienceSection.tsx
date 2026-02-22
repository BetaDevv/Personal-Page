"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Desarrollador Backend / Automatización",
    company: "Media&Concept (Alemania)",
    period: "2025 — Presente",
    description:
      "Implementación de APIs conectando formularios con CRMs. Desarrollo de sistemas de automatización para marketing en LinkedIn con OpenClaw y Python. Creación de sitios WordPress para clientes de la agencia.",
    skills: ["Python", "FastAPI", "WordPress", "APIs REST", "OpenClaw"],
  },
  {
    role: "Practicante de Desarrollo de Software",
    company: "XM",
    period: "2024 — 2025 (6 meses)",
    description:
      "Refactorización de código y mejora en el manejo de errores en scripts Python para procesamiento de datos. Desarrollo de soluciones óptimas para obtención y análisis de grandes volúmenes de datos eléctricos (I/O Bound).",
    skills: ["Python", "Pandas", "Linux", "Docker"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-purple-500 to-transparent" />
            <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
              Trayectoria
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experiencia <span className="gradient-text">profesional</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Mi camino profesional en el desarrollo de software, creciendo constantemente
            y asumiendo nuevos retos.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] lg:left-1/2 lg:-translate-x-1/2 top-0">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-4 h-4 rounded-full bg-purple-500 border-4 border-[#070b14] shadow-lg shadow-purple-500/30"
                  />
                </div>

                {/* Card */}
                <div className={`flex-1 ml-12 lg:ml-0 ${i % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                  <div className="glass-card rounded-2xl p-6 glow-border">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className="text-sm text-slate-500">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{exp.role}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="skill-badge px-3 py-1 rounded-full text-xs text-purple-300 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
