"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function ContactCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="gradient-orb w-[600px] h-[600px] bg-purple-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <motion.div
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-10 lg:p-16 relative overflow-hidden"
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-purple-500/20 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-purple-500/20 rounded-br-3xl" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              ¿Tienes un proyecto en{" "}
              <span className="gradient-text">mente</span>?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
              Estoy abierto a oportunidades en desarrollo backend, IA y
              automatización. ¡Hablemos!
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="mailto:contacto@miguel.dev"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-medium overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="relative z-10 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="relative z-10">Enviar email</span>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-slate-300 font-medium border border-slate-700 hover:border-purple-500/40 hover:text-white hover:bg-purple-500/5 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
