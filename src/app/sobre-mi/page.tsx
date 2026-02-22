"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import Avatar from "@/components/Avatar";

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Curiosidad",
    description: "Siempre busco entender el porqué detrás de las cosas. La curiosidad intelectual es mi motor principal.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Disciplina",
    description: "Del ajedrez y el boxeo aprendí que la disciplina y la estrategia son fundamentales para alcanzar cualquier meta.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Eficiencia",
    description: "Backends escalables, código limpio y soluciones optimizadas. Cada línea de código tiene un propósito.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Propósito",
    description: "Mi sueño es contribuir en la industria de IA para que la tecnología sea un complemento que mejore la vida de las personas.",
  },
];

const interests = [
  "Inteligencia Artificial", "Python", "Backend Development", "Ajedrez",
  "Boxeo", "Linux", "Automatización", "Resolución de problemas", "Lectura",
];

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 grid-bg">
        {/* Background orbs */}
        <div className="gradient-orb w-[500px] h-[500px] bg-purple-600 top-[5%] left-[-10%]" />
        <div className="gradient-orb w-[400px] h-[400px] bg-indigo-600 bottom-[10%] right-[-5%]" style={{ animationName: "float-delayed" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0"
            >
              <Avatar size={300} />
            </motion.div>

            <AnimatedSection className="flex-1 text-center lg:text-left" direction="right">
              <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-purple-500 to-transparent" />
                <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
                  Sobre mí
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Construyendo con{" "}
                <span className="gradient-text">propósito</span>
              </h1>
              <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                <p>
                  Soy Miguel Betancur, un joven desarrollador de software de Medellín, Colombia,
                  que sueña con ser AI Developer. Me apasiona la lógica y la solución de
                  problemas complejos. Soy un aprendiz eterno con curiosidad intelectual
                  insaciable.
                </p>
                <p>
                  Me encanta afrontar desafíos que se cruzan en mi camino como developer
                  y resolver acertijos que llevan a un propósito más grande. Creo firmemente
                  que la tecnología debe ser un complemento para la humanidad, no un sustituto.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Values */}
          <AnimatedSection className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Mis <span className="gradient-text">valores</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass-card glow-border rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center text-purple-400 mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Personal Journey */}
          <AnimatedSection className="mb-24">
            <div className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                  Mi <span className="gradient-text">historia</span>
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4 text-slate-400 leading-relaxed">
                    <p>
                      Mi viaje en la programación comenzó con una curiosidad innata
                      por entender cómo funcionan las cosas. Siempre me ha fascinado
                      la lógica, resolver acertijos y enfrentar problemas que parecen
                      imposibles. Esa misma mentalidad la aplico como developer.
                    </p>
                    <p>
                      Actualmente soy Tecnólogo en Desarrollo de Software del ITM en
                      Medellín. Hice mis prácticas en XM optimizando scripts Python para
                      procesamiento de datos eléctricos, y trabajo como autónomo para
                      Media&Concept, una agencia de marketing digital alemana.
                    </p>
                  </div>
                  <div className="space-y-4 text-slate-400 leading-relaxed">
                    <p>
                      Mi especialización es Python: Django, Django REST Framework y FastAPI.
                      Sé implementar backends escalables e integrarles sistemas de
                      inteligencia artificial. He construido desde chatbots RAG hasta
                      sistemas de automatización para marketing.
                    </p>
                    <p>
                      Cuando no estoy programando, me encontrarás jugando ajedrez,
                      entrenando boxeo, o explorando las últimas novedades en
                      inteligencia artificial. Mi sueño más grande es contribuir
                      técnicamente en la industria de IA para ayudar a que la tecnología
                      sea un complemento y no un sustituto para la humanidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Interests */}
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Intereses y <span className="gradient-text">pasiones</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {interests.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="skill-badge px-5 py-2.5 rounded-xl text-sm text-purple-300 font-medium cursor-default"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
