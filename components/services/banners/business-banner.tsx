"use client"

import Link from "next/link"
import { Briefcase, LineChart, Handshake, ChevronRight } from "lucide-react"

export function BusinessServicesBanner() {
  return (
    <section className="relative overflow-hidden">

      {/* RIGHT SIDE (IMAGE + OVERLAY) */}
      <div className="absolute inset-0">
        <img
          src="/images/banners/business.jpg" // <-- your image
          alt="Business Services"
          className="w-full h-full object-cover animate-[zoomSlow_30s_ease-in-out_infinite_alternate]"
        />

        {/* BLUE OVERLAY */}
        {/* <div className="absolute inset-0 bg-[#1BADF6]/20" /> */}
      </div>
      {/* LEFT DIAGONAL PANEL */}
      <div
        className="absolute inset-0 bg-[#0c4a6e]"
        style={{
          clipPath: "polygon(0 0, 65% 0, 40% 100%, 0% 100%)"
        }}
      />
    
      {/* RADIAL SPIRAL GLOW */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#0EA5E9]/20 rounded-full blur-3xl" />

      {/* SECOND GLOW (depth) */}
      <div className="absolute bottom-[-100px] left-[100px] w-[400px] h-[400px] bg-white/10 rounded-full blur-2xl" />

      {/* SUBTLE GRID LINES */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
        linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
        }}
      />


      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/#services" className="hover:text-white">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">Business Services</span>
          </nav>

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Empower Your Growth with <br />
            <span className="text-[#0EA5E9]">Business Solutions</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/80 text-lg mb-10">
            Streamline operations, improve efficiency, and scale your business
            with smart solutions tailored to your goals and industry demands.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-8">

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-white/90">Business Strategy</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur">
                <LineChart className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-white/90">Performance Analytics</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur">
                <Handshake className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-white/90">Consulting Services</span>
            </div>

          </div>
        </div>

        {/* RIGHT EMPTY (just to keep grid spacing correct) */}
        <div />
      </div>
    </section>
  )
}