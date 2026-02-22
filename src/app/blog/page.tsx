import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogGrid from "@/components/BlogGrid";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 grid-bg">
      {/* Background orbs */}
      <div className="gradient-orb w-[400px] h-[400px] bg-purple-600 top-[10%] right-[-5%]" />
      <div className="gradient-orb w-[300px] h-[300px] bg-indigo-600 bottom-[20%] left-[-5%]" style={{ animationName: "float-delayed" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-purple-500 to-transparent" />
            <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
              Blog
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ideas, tutoriales y{" "}
            <span className="gradient-text">reflexiones</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Comparto lo que aprendo sobre desarrollo web, diseño y tecnología.
            Artículos prácticos para desarrolladores de todos los niveles.
          </p>
        </div>

        {/* Blog Grid */}
        <BlogGrid posts={posts} />
      </div>
    </section>
  );
}
