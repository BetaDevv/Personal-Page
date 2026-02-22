"use client";

import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "OmniSource",
    description:
      "Chatbot de WhatsApp que facilita datos de documentos (PDFs, Excel, bases de datos SQL). Sistema RAG con Langchain y SQLAlchemy para acceder a toda tu información desde WhatsApp.",
    tags: ["Django", "Langchain", "SQLAlchemy", "WhatsApp API"],
    image: "🤖",
    color: "linear-gradient(135deg, #1a1040 0%, #2d1b69 100%)",
  },
  {
    title: "CRM Media&Concept",
    description:
      "CRM intuitivo enfocado en la facilidad de uso y la comunicación con el cliente. Pensado para fortalecer la relación entre la agencia y sus clientes.",
    tags: ["Python", "Django", "Django REST", "PostgreSQL"],
    image: "📊",
    color: "linear-gradient(135deg, #0f1a35 0%, #1a2d5a 100%)",
  },
  {
    title: "APIs & Automatización LinkedIn",
    description:
      "Implementación de APIs conectando formularios con CRMs y sistemas de automatización para procesos de marketing en LinkedIn con OpenClaw y Python.",
    tags: ["Python", "FastAPI", "OpenClaw", "APIs REST"],
    image: "⚡",
    color: "linear-gradient(135deg, #1a0a2e 0%, #3d1a69 100%)",
  },
];

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-purple-500 to-transparent" />
            <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
              Portafolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Proyectos <span className="gradient-text">destacados</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Proyectos donde combino Python, IA y backend para resolver
            problemas reales con soluciones escalables.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
