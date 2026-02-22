"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group glass-card glow-border rounded-2xl overflow-hidden cursor-pointer h-full"
          >
            {/* Color header */}
            <div className={`h-2 bg-gradient-to-r ${post.color}`} />

            <div className="p-6">
              {/* Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.readTime} lectura</span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs text-slate-500">
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="text-sm text-purple-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Leer más
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.article>
        </Link>
      ))}
    </div>
  );
}
