"use client"

import Link from "next/link"
import { Megaphone, TrendingUp, Users, ChevronRight } from "lucide-react"

export function DigitalMarketingBanner() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* RIGHT ORANGE BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-br from-[#f59e0b] to-[#fb923c]" />

        {/* GRID PATTERN */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* RADIAL GLOW */}
        <div className="absolute right-[55%] top-[90%] w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl" />

        {/* MARKETING LINES */}
        <svg className="absolute inset-0 opacity-90">
          <polyline
            points="200,500 400,400 600,450 800,300 1000,350"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <polyline
            points="200,600 400,550 600,500 800,450 1000,400"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* CURVED WHITE SHAPE */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1440 800"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="
              M0,0 
              H900 
              C750,200 750,600 400,800 
              H0 
              Z
            "
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="relative overflow-hidden rounded-2xl">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/banners/digital marketing.png"
              alt="Marketing background"
              className="w-full h-full object-cover object-center opacity-10"
            />
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-gray-500 text-sm mb-8">
            <Link href="/" className="hover:text-black">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/#services" className="hover:text-black">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Digital Marketing</span>
          </nav>

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Grow Your Brand with <br />
            <span className="text-[#f59e0b]">Digital Marketing</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            Drive traffic, generate leads, and boost conversions with
            data-driven marketing strategies tailored for your business.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-8">

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-[#f59e0b]/10 group-hover:bg-[#f59e0b]/20 transition">
                <Megaphone className="w-5 h-5 text-[#f59e0b]" />
              </div>
              <span className="text-sm text-gray-700">Campaign Strategy</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-[#f59e0b]/10 group-hover:bg-[#f59e0b]/20 transition">
                <TrendingUp className="w-5 h-5 text-[#f59e0b]" />
              </div>
              <span className="text-sm text-gray-700">Growth Marketing</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-[#f59e0b]/10 group-hover:bg-[#f59e0b]/20 transition">
                <Users className="w-5 h-5 text-[#f59e0b]" />
              </div>
              <span className="text-sm text-gray-700">Audience Targeting</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex justify-center lg:justify-end">

          <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <img
              src="/images/banners/marketing-person.png"
              alt="Marketing"
              className="w-full h-full object-cover animate-[zoomSlow_18s_ease-in-out_infinite_alternate]"
            />
          </div>

          {/* DECOR DOTS */}
          <div className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full opacity-70" />
          <div className="absolute bottom-10 left-10 w-2 h-2 bg-white rounded-full opacity-70" />

        </div>
      </div>
    </section>
  )
}