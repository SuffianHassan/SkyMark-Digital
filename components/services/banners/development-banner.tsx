"use client"

import Link from "next/link"
import { Code, Smartphone, Layers, ChevronRight } from "lucide-react"

export function DevelopmentBanner() {
  return (
    <section className="w-full relative overflow-hidden">

      {/* FULL BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#01E1EB] to-[#00336b]" />

      {/* OPTIONAL LIGHT GRID (very subtle, remove if not needed) */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.65) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="text-white">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/#services" className="hover:text-white">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">Development</span>
          </nav>

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build Powerful Apps with <br />
            <span className="bg-gradient-to-r from-[#0c2b9a] to-blue-500 bg-clip-text text-transparent">
              Web & Mobile Development
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/80 text-lg mb-10 max-w-xl">
            From scalable web platforms to feature-rich mobile applications,
            we create fast, secure, and user-focused digital solutions
            tailored to your business growth.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-8">

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#ffffff]/20 group-hover:bg-[#ffffff]/60 transition">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-white/90">Web Development</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#ffffff]/20 group-hover:bg-[#ffffff]/30 transition">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-white/90">Mobile Applications</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#ffffff]/20 group-hover:bg-[#ffffff]/30 transition">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-white/90">Scalable Solutions</span>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE (NO CIRCLE, CLEAN) */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/banners/web.png" // <-- your dev image
            alt="Development"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[650px] object-contain drop-shadow-2xl animate-[zoomDev_3s_ease-in-out_infinite_alternate]"
          />
        </div>

      </div>
    </section>
  )
}