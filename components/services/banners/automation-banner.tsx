"use client"

import Link from "next/link"
import { Bot, Cpu, BarChart3, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useContent } from "@/app/context/ContentContext"

export function AutomationBanner() {
  const [mounted, setMounted] = useState(false)
  const [dots, setDots] = useState<any[]>([])
  const slug = "automation";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  useEffect(() => {
    setMounted(true)

    const generated = [...Array(10)].map(() => ({
      width: Math.random() * 8 + 4,
      height: Math.random() * 8 + 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 6 + Math.random() * 2,
    }))

    setDots(generated)
  }, [])

  const content = sectionsBySlug[slug]?.["Banner"]?.blocks;
  const getUrl = (imageId?: string) =>
    media.find((m) => m.id === imageId)?.mediaUrl || null;

  if (loading && !sectionsBySlug[slug]) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-15 overflow-hidden text-white">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          // src="/images/banners/automation-banner1.png" // <-- put your image here
          src={getUrl(content?.image1?.imageId) || "/images/banners/automation-banner1.png"}
          alt="AI Automation"
          className="w-full h-full object-cover object-center animate-[zoomSlow_20s_ease-in-out_infinite_alternate]"
        />
        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-r from-[#bb093e]/50 via-[#021c2b]/1 to-transparent" />

      </div>

      {/* FLOATING DOTS (like image particles) */}
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((dot, i) => (
          <span
            key={i}
            className="absolute bg-[#0ea5e9] rounded-full opacity-70 animate-float"
            style={{
              width: `${dot.width}px`,
              height: `${dot.height}px`,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animationDuration: `${dot.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-2 relative z-10 pb-28 sm:pb-36">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-white/60 text-sm mb-10">
          <Link href="/">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/#services">Services</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">Automation & AI</span>
        </nav>

        {/* CONTENT */}
        <div className="max-w-2xl">

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {content?.heading1?.text}<br />
            <span className="text-[#0ea5e9]">{content?.heading2?.text}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10">
            {content?.paragraph1?.text}
          </p>

          {/* ICON FEATURES */}
          <div className="flex flex-wrap gap-10">

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 
                              group-hover:scale-110 transition">
                <Bot className="w-6 h-6 text-[#0ea5e9]" />
              </div>
              <span className="text-sm">{content?.heading3?.text}</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 
                              group-hover:scale-110 transition">
                <Cpu className="w-6 h-6 text-[#0ea5e9]" />
              </div>
              <span className="text-sm">{content?.heading4?.text}</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 
                              group-hover:scale-110 transition">
                <BarChart3 className="w-6 h-6 text-[#0ea5e9]" />
              </div>
              <span className="text-sm">{content?.heading5?.text}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}