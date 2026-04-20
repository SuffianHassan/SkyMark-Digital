"use client"

import { ChevronRight, Megaphone, TrendingUp, Users } from "lucide-react"
import Link from "next/link"


export function CreativeMarketingBanner() {
  return (
    <section className="relative overflow-hidden bg-[#2bccfa]">
      {/* <div className="relative overflow-hidden rounded-2xl p-6 md:p-2"> */}
      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0">
        {/* TOP RIGHT BIG CIRCLE */}
        <div className="absolute -top-40 right-10 w-[300px] h-[300px] bg-yellow-400 rounded-full opacity-100" />

        <div className="absolute -top-50 left-160 w-[300px] h-[300px] bg-yellow-400 rounded-full opacity-100" />

        {/* BOTTOM LEFT CIRCLE */}
        <div className="absolute -bottom-32 left-10 w-[260px] h-[260px] bg-yellow-300 rounded-full opacity-80" />

        {/* SMALL ACCENT CIRCLE */}
        <div className="absolute bottom-10 right-[35%] w-[120px] h-[120px] bg-yellow-200 rounded-full opacity-60" />
      </div>
      {/* CENTER BACKGROUND IMAGE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/banners/creative.png"
          alt="Creative background"
          className="w-[600px] md:w-[750px] lg:w-[1000px] opacity-10 object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-35 grid lg:grid-cols-2 items-center gap-12">

        <div>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-gray-500 text-sm mb-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/#services" className="hover:text-blue-600">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Creative Services</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Craft Stunning Visuals with<br />
            <span className="text-yellow-400">Creative Services</span>
          </h1>

          <p className="text-white text-lg mb-10 max-w-xl">
            Elevate your brand with eye-catching designs, engaging content, and
            creative strategies that leave a lasting impression.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-8">

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition">
                <Megaphone className="w-5 h-5 text-yellow-500" />
              </div>
              <span className="text-sm text-gray-700">Brand Identity Design</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition">
                <TrendingUp className="w-5 h-5 text-yellow-500" />
              </div>
              <span className="text-sm text-gray-700">Creative Campaigns</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition">
                <Users className="w-5 h-5 text-yellow-500" />
              </div>
              <span className="text-sm text-gray-700">Visual Storytelling</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE DESIGN */}
        <div className="relative flex justify-center lg:justify-end">

          {/* OUTER RING */}
          <div className="absolute w-[360px] h-[360px] border-[14px] border-yellow-400 rounded-full" />

          {/* INNER IMAGE */}
          <div className="relative w-[330px] h-[330px] rounded-full overflow-hidden left-6 -top-6 border-8 border-white shadow-xl">
            <img
              src="/images/banners/creative.webp"
              alt="Marketing"
              className="w-full h-full object-cover animate-[zoomSlow_25s_ease-in-out_infinite_alternate]"
            />
          </div>

          {/* DOTTED ARC */}
          <div className="absolute">
            <div className="w-[360px] h-[360px] border-r-8 border-dotted border-blue-400 rounded-full" />
          </div>
        </div>
      </div>

    </section>
  )
}