"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Bot, ChevronRight } from "lucide-react"
// import type { LucideIcon } from "lucide-react"

interface ServiceBannerProps {
  title: string
  description: string
  icon: "bot"
  breadcrumb: string
  gradient?: string
}

const iconMap = {
  bot: Bot,
}

export function ServiceBanner({ 
  title, 
  description, 
  icon, 
  breadcrumb,
  gradient = "gradient-digital"
}: ServiceBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const Icon = iconMap[icon]
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      container.style.setProperty("--mouse-x", `${x}%`)
      container.style.setProperty("--mouse-y", `${y}%`)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className={`relative py-28 md:py-36 overflow-hidden ${gradient}`}
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
    >
      {/* Mesh overlay */}
      <div className="absolute inset-0 mesh-overlay" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mouse-following glow */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
            left: "calc(var(--mouse-x) - 300px)",
            top: "calc(var(--mouse-y) - 300px)",
          }}
        />
        
        {/* Floating morphing shapes */}
        <div className="absolute top-10 right-[10%] w-72 h-72 bg-white/10 animate-morph animate-float blur-2xl" />
        <div className="absolute bottom-10 left-[5%] w-80 h-80 bg-white/5 animate-morph animate-float-delayed blur-2xl" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-1/2 right-[30%] w-48 h-48 bg-amber-400/10 animate-morph animate-pulse-glow blur-2xl" style={{ animationDelay: '-8s' }} />
        
        {/* Orbiting elements */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2">
          <div className="animate-orbit" style={{ animationDuration: '30s' }}>
            <div className="w-3 h-3 bg-white/40 rounded-full blur-sm" />
          </div>
        </div>
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Particle effects */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/50 rounded-full animate-particle"
            style={{
              left: `${20 + i * 20}%`,
              bottom: '0',
              animationDelay: `${i * 2}s`,
              animationDuration: `${10 + i * 2}s`
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-white/60 text-sm mb-10">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white font-medium">{breadcrumb}</span>
        </nav>

        <div className="max-w-4xl">
          {/* Icon with glow effect */}
          <div className="relative inline-flex items-center justify-center w-24 h-24 mb-10 animate-fade-in">
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl animate-pulse-glow" />
            <div className="relative flex items-center justify-center w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Icon className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 animate-slide-up leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl animate-fade-in animation-delay-200 leading-relaxed">
            {description}
          </p>
          
          {/* Decorative element */}
          <div className="mt-10 flex items-center gap-3 animate-fade-in animation-delay-400">
            <div className="w-12 h-1 bg-amber-400 rounded-full" />
            <div className="w-3 h-3 bg-amber-400/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
