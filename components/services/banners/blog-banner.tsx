"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function BlogBanner() {
  
  return (
    <section className="relative w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/banners/blog.png"
          alt="Blog Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">

        <div className="max-w-2xl text-white">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/80 text-sm mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-white">Our Blogs</span>
          </nav>

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Insights, Ideas & <br />
            <span className="text-yellow-300">Industry Trends</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/90 text-lg mb-10">
            Explore our latest articles on technology, digital marketing, 
            and creative strategies to help your business grow and stay ahead.
          </p>

        </div>
      </div>
    </section>
  )
}