"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  link?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  color,
  link = "#",
  index,
}: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group block glass-card glow-border rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image area */}
      <div className="relative h-52 overflow-hidden" style={{ background: color }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-30">{image}</span>
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover arrow */}
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="skill-badge px-3 py-1 rounded-full text-xs text-purple-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
