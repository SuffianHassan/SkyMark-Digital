"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

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
      // className="relative min-h-[100vh] flex items-start pt-24 lg:pt-28 overflow-hidden gradient-hero"
      className="relative min-h-[80vh] lg:min-h-[60vh] flex items-start pt-20 lg:pt-24 overflow-hidden gradient-hero"
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-particle"
            style={{
              left: `${15 + i * 15}%`,
              bottom: '0',
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + i * 2}s`
            }}
          />
        ))}
      </div>

      {/* <div className="max-w-7xl mx-auto px-6 lg:px-2 relative z-10"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-2 relative z-10 pb-28 sm:pb-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-400" />
              IT Solutions & Digital Marketing
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transforming Ideas Into{" "}
              <span className="text-amber-400">Digital Reality</span>
            </h1>

            <p className="text-lg text-white/80 max-w-xl mb-10">
              We deliver cutting-edge IT solutions and result-driven digital marketing strategies
              that propel your business to new heights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-8 py-6 text-lg"
              >
                <Link href="/#contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg"
              >
                <Link href="/#services">
                  <Play className="mr-2 h-5 w-5" />
                  Our Services
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT VISUAL SECTION */}
          <div className="relative flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
            <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] bg-white rounded-2xl shadow-2xl flex items-center justify-center z-10 overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src="/images/hero-globe.png"
                alt="Skymark Digital Logo"
                className="w-full h-full object-contain scale-110 animate-[zoomSlow_18s_ease-in-out_infinite_alternate]"
              />
            </div>

            {/* Floating Card - Top Left*/}
            <div className="absolute -top-6 right-45 -translate-x-1/2 animate-float-slow">
              <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg text-center">
                <p className="text-xs text-gray-500">Projects</p>
                <p className="text-sm font-bold text-blue-600">250+</p>
              </div>
            </div>

             {/* Floating Card - Middle Right */}
            <div className="absolute left-1/2 -translate-x-[140px] sm:-translate-x-[180px] md:-translate-x-[220px] top-[65%] -translate-y-1/2 animate-float-slow delay-500">
              <div className="bg-white/90 backdrop-blur-md px-3 py-3 rounded-xl shadow-lg text-center">
                <p className="text-xs text-gray-500">Experience</p>
                <p className="text-sm font-bold text-red-500">5+ Years</p>
              </div>
            </div>

            {/* Floating Card - Middle Left */}
            <div className="absolute left-1/3 translate-x-[140px] sm:translate-x-[180px] md:translate-x-[240px] -translate-y-2/3 animate-float-slow delay-400">
              <div className="bg-white/90 backdrop-blur-md px-3 py-3 rounded-xl shadow-lg text-center">
                <p className="text-xs text-gray-500">Satisfaction</p>
                <p className="text-sm font-bold text-green-600">98%</p>
              </div>
            </div>

            {/* Floating Card - Bottom Left */}
            <div className="absolute top-[92%] left-70 -translate-x-1/2 animate-float-slow delay-300">
              <div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg text-center">
                <p className="text-xs text-gray-500">Countries</p>
                <p className="text-sm font-bold text-orange-500">8+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating animation */}
      <style jsx>{`
        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <div className="absolute bottom-0 left-0 w-full h-56 pointer-events-none z-0 flex justify-center">
        <div className="w-full max-w-5xl text-center mt-25 pt-8 border-t border-white/10">
          <p className="text-md text-white/60 mb-4">
            Trusted by leading companies worldwide
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["Google", "Microsoft", "Amazon", "Meta", "Salesforce"].map((company) => (
              <span key={company} className="text-xl font-bold text-white">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}