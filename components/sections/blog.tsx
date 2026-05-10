"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useContent } from "@/app/context/ContentContext"
import { useEffect, useState } from "react"
import { fetchBlogs } from "../services/BlogService"

function getPreview(text: string, words = 20) {
  const cleaned = text
    .replace(/<[^>]+>/g, "")     // remove HTML tags
    .replace(/&nbsp;/g, " ")     // fix non-breaking spaces
    .replace(/\u00A0/g, " ");    // extra safety

  return cleaned.split(" ").slice(0, words).join(" ") + "...";
}

export function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const slug = "home";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  useEffect(() => {
    const loadBlogs = async () => {
      const blogs = await fetchBlogs();

      // only latest 3
      setPosts(blogs.slice(0, 3));
    };

    loadBlogs();
  }, []);

  const blog = sectionsBySlug[slug]?.["Blog"]?.blocks;

  if (loading && !sectionsBySlug[slug]) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-md">
            {blog?.heading1?.text}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            {blog?.heading2?.text}
          </h2>
          <p className="text-muted-foreground text-lg">
            {blog?.paragraph1?.text}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="group overflow-hidden bg-white border-border hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden bg-secondary">
                <Image
                  src={(post.imageUrl || "/images/blog/ai-marketing.jpg")}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.createdAt?.seconds
                      ? new Date(
                        post.createdAt.seconds * 1000
                      ).toLocaleDateString()
                      : ""}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {getPreview(post.content, 20)}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
