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
      className="relative min-h-[100vh] flex items-start pt-24 lg:pt-28 overflow-hidden gradient-hero"
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
      <div className="max-w-7xl mx-auto px-6 lg:px-2 relative z-10 pb-28 sm:pb-36">
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

            {/* MAIN CARD (white box)
            <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] bg-white rounded-2xl shadow-2xl flex items-center justify-center z-10 transition-transform duration-300 hover:scale-105">
              <img
                src="/images/hero-globe.png"
                alt="Skymark Digital Logo"
                className="w-full h-full object-cover object-contain rounded-lg animate-[zoomSlow_12s_ease-in-out_infinite_alternate]"
              />
            </div> */}
            <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] bg-white rounded-2xl shadow-2xl flex items-center justify-center z-10 overflow-hidden transition-transform duration-300 hover:scale-105">

              <img
                src="/images/hero-globe.png"
                alt="Skymark Digital Logo"
                className="w-full h-full object-contain scale-110 animate-[zoomSlow_7s_ease-in-out_infinite_alternate]"
              />

            </div>

            {/* Floating Card 1 */}
            <div className="absolute -top-4 left-12 animate-float-slow">
              <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg">
                <p className="text-xs text-gray-500">Projects Done</p>
                <p className="text-lg font-bold text-blue-600">250+</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute top-40 -right-2 animate-float-slow delay-500">
              <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg">
                <p className="text-xs text-gray-500">Satisfaction</p>
                <p className="text-lg font-bold text-red-500">98%</p>
              </div>
            </div>

            {/* Floating Card 3 */}
            <div className="absolute right-12 top-56 animate-float-slow delay-500">
              <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg">
                <p className="text-xs text-gray-500">Happy Clients</p>
                <p className="text-lg font-bold text-orange-500">120+</p>
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
        <div className="w-full max-w-5xl text-center mt-20 pt-12 border-t border-white/10">

          <p className="text-md text-white/60 mb-6">
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