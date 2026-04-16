"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const posts = [
  {
    title: "The Future of AI in Digital Marketing",
    excerpt: "Discover how artificial intelligence is revolutionizing the way businesses connect with their customers.",
    image: "/images/blog/ai-marketing.jpg",
    author: "Michael Chen",
    date: "March 15, 2026",
    category: "AI & Technology",
  },
  {
    title: "10 SEO Strategies for 2026",
    excerpt: "Stay ahead of the competition with these proven search engine optimization techniques.",
    image: "/images/blog/seo-strategies.jpg",
    author: "Sarah Johnson",
    date: "March 12, 2026",
    category: "Digital Marketing",
  },
  {
    title: "Building Secure Web Applications",
    excerpt: "Essential security practices every developer should implement in their web projects.",
    image: "/images/blog/web-security.jpg",
    author: "David Williams",
    date: "March 10, 2026",
    category: "Web Development",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Latest Insights & Updates
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay informed with our latest articles on technology, digital marketing, 
            and business growth strategies.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="group overflow-hidden bg-white border-border hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden bg-secondary">
                <Image
                  src={post.image}
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
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
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
