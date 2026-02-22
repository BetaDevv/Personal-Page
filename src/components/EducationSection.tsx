"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const education = [
  {
    degree: "Tecnología en Desarrollo de Software",
    institution: "Instituto Tecnológico Metropolitano (ITM)",
    period: "Medellín, Colombia",
    description: "Formación en desarrollo de software, lógica de programación, arquitectura de sistemas y bases de datos.",
    icon: "🎓",
  },
  {
    degree: "Programa de Liderazgo",
    institution: "ITM",
    period: "Universidad",
    description: "Certificación en habilidades de liderazgo, trabajo en equipo y comunicación efectiva.",
    icon: "🏆",
  },
];

const certifications = [
  "Python",
  "Python Intermedio",
  "Fundamentos de Software",
  "Redes y Telecomunicaciones",
  "Administración de Servidores Linux",
  "Django y Django REST Framework",
];

export default function EducationSection() {
  return (
    <section id="formacion" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-purple-500 to-transparent" />
            <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
              Educación
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Formación <span className="gradient-text">académica</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Mi preparación académica y las certificaciones que respaldan mis habilidades
            técnicas.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card glow-border rounded-2xl p-6"
            >
              <div className="text-3xl mb-4">{edu.icon}</div>
              <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                {edu.period}
              </span>
              <h3 className="text-lg font-semibold text-white mt-3 mb-1">{edu.degree}</h3>
              <p className="text-sm text-purple-300/70 mb-3">{edu.institution}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Certificaciones</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/25 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-300 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
