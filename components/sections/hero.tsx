"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { useContent } from "@/app/context/ContentContext"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const slug = "home";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

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



  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  if (loading && !sectionsBySlug[slug]) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  const hero = sectionsBySlug[slug]?.["Banner"]?.blocks;
  const getUrl = (imageId?: string) =>
    media.find((m) => m.id === imageId)?.mediaUrl || null;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] lg:min-h-[60vh] flex items-start pt-20 lg:pt-16 overflow-hidden gradient-hero"
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
              {hero?.heading1?.text}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {hero?.heading2?.text}{" "}
              <span className="text-amber-400">{hero?.heading3?.text}</span>
            </h1>

            <p className="text-lg text-white/80 max-w-xl mb-10">
              {hero?.paragraph1?.text}
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
          {/* <div className="relative flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
            <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] bg-white rounded-2xl shadow-2xl flex items-center justify-center z-10 overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src="/images/hero-globe.png"
                alt="Skymark Digital Logo"
                className="w-full h-full object-contain scale-110 animate-[zoomSlow_18s_ease-in-out_infinite_alternate]"
              />
            </div>

            <div className="absolute -top-6 right-45 -translate-x-1/2 animate-float-slow">
              <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg text-center">
                <p className="text-xs text-gray-500">{hero?.heading5?.text}</p>
                <p className="text-sm font-bold text-blue-600">{hero?.heading6?.text}</p>
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-[140px] sm:-translate-x-[180px] md:-translate-x-[220px] top-[65%] -translate-y-1/2 animate-float-slow delay-500">
              <div className="bg-white/90 backdrop-blur-md px-3 py-3 rounded-xl shadow-lg text-center">
                <p className="text-xs text-gray-500">{hero?.heading7?.text}</p>
                <p className="text-sm font-bold text-red-500">{hero?.heading8?.text}</p>
              </div>
            </div>

            <div className="absolute left-1/3 translate-x-[140px] sm:translate-x-[180px] md:translate-x-[240px] -translate-y-2/3 animate-float-slow delay-400">
              <div className="bg-white/90 backdrop-blur-md px-3 py-3 rounded-xl shadow-lg text-center">
                <p className="text-xs text-gray-500">{hero?.heading9?.text}</p>
                <p className="text-sm font-bold text-green-600">{hero?.heading10?.text}</p>
              </div>
            </div>

            <div className="absolute top-[92%] left-70 -translate-x-1/2 animate-float-slow delay-300">
              <div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg text-center">
                <p className="text-xs text-gray-500">{hero?.heading11?.text}</p>
                <p className="text-sm font-bold text-orange-500">{hero?.heading12?.text}</p>
              </div>
            </div>
          </div> */}
          
          <div className="relative flex items-center justify-center min-h-[560px] w-full overflow-visible">
            {/* Background Glow */}
            <div className="absolute w-[480px] h-[480px] rounded-full bg-blue-500/25 blur-3xl" />
            <div className="absolute w-[320px] h-[320px] rounded-full bg-amber-400/25 blur-2xl" />

            {/* OUTER ORBIT RING */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-white/30 animate-spin-slow" />

            {/* SECOND ORBIT RING */}
            <div className="absolute w-[340px] h-[340px] rounded-full border border-cyan-400/30 animate-spin-reverse" />

            {/* SEGMENTED SERVICE WHEEL */}
            <div className="relative w-[340px] h-[340px] animate-spin-slow">

              {[
                { label: "Facebook Icon", icon: "/images/facebook.png" },
                { label: "YouTube Icon", icon: "/images/youtube.png" },
                { label: "Instagram Icon", icon: "/images/instagram.png" },
                { label: "TikTok Icon", icon: "/images/tiktok.png" },
                { label: "Twitter Icon", icon: "/images/twitter.png" },
                { label: "LinkedIn Icon", icon: "/images/linkedin.png" },
              ].map((item, i) => {
                const angle = (360 / 6) * i;
                const glowColors = [
                  "shadow-cyan-500/70",
                  "shadow-purple-500/70",
                  "shadow-blue-500/70",
                  "shadow-emerald-500/70",
                  "shadow-pink-500/70",
                  "shadow-amber-500/70",
                ];

                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-155px)`,
                      transformOrigin: "center",
                    }}
                  >
                    <div
                      className={`
              w-[96px]
              h-[96px]
              rounded-2xl
              border
              border-white/40
              bg-white/35
              backdrop-blur-xl
              flex
              flex-col
              items-center
              justify-center
              shadow-xl
              text-center
              hover:scale-105
              transition-transform
              duration-300
              animate-pulse-glow
              ${glowColors[i]}
            `}
                      style={{
                        transform: `rotate(-${angle}deg)`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    >
                      {/* ICON */}
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-14 h-14 mb-1 opacity-100"
                      />

                      {/* LABEL */}
                      {/* <p className="text-white/70 text-[10px] tracking-wide leading-tight px-1">
                        {item.label}
                      </p> */}
                    </div>
                  </div>
                );
              })}

              {/* CENTER CORE */}
              <div className="absolute inset-0 flex items-center justify-center">

                {/* Inner Ring */}
                <div className="absolute w-[190px] h-[190px] rounded-full border border-cyan-400/40 animate-spin-slow" />

                {/* Core Glow */}
                <div className={`
        relative
        w-[150px]
        h-[150px]
        rounded-full
        bg-gradient-to-br
        from-blue-500
        via-cyan-400
        to-amber-300
        flex
        items-center
        justify-center
        shadow-[0_0_80px_rgba(34,211,238,0.35)]
      `}>

                  {/* Glass Layer */}
                  <div className="absolute inset-2 rounded-full bg-black/20 backdrop-blur-xl border border-white/10" />

                  {/* <img
                    src="/images/hero-orbit.png"
                    alt="Digital Services"
                    className="relative z-10 w-[95px] animate-core-float"
                  /> */}
                  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    
                    {/* Core content */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                    
                      {/* Main Title */}
                      <h2 className="text-white text-[14px] md:text-[16px] font-bold tracking-widest uppercase">
                        Digital Growth Engine
                      </h2>

                      {/* Sub text */}
                      {/* <p className="text-white/60 text-[10px] mt-2 max-w-[140px] leading-tight">
                        Turning social presence into measurable business growth
                      </p> */}

                      {/* Optional glow tag */}
                      {/* <div className="mt-3 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                        <p className="text-cyan-300 text-[9px] tracking-widest">
                          ENGAGE • SCALE • CONVERT
                        </p>
                      </div> */}

                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* LEFT FLOATING CARD */}
            <div className="absolute left-0 top-20 animate-float-card">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
                <p className="text-white/50 text-xs tracking-widest">GROWTH</p>
                <h3 className="text-white text-2xl font-bold">+245%</h3>
                <p className="text-cyan-300 text-sm">Revenue Boost</p>
              </div>
            </div>

            {/* RIGHT FLOATING CARD */}
            <div className="absolute right-0 bottom-20 animate-float-card delay-500">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
                <p className="text-white/50 text-xs tracking-widest">TRAFFIC</p>
                <h3 className="text-white text-2xl font-bold">120K</h3>
                <p className="text-amber-300 text-sm">Monthly Users</p>
              </div>
            </div>

            {/* FLOATING DOTS */}
            <div className="absolute top-16 right-20 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
            <div className="absolute top-40 left-16 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <div className="absolute bottom-24 right-10 w-2 h-2 rounded-full bg-blue-400 animate-ping delay-700" />

          </div>

        </div>
      </div>

      {/* floating animation */}
      {/* <style jsx>{`
        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style> */}

      <style jsx>{`
.animate-spin-slow {
  animation: spin 22s linear infinite;
}

.animate-spin-reverse {
  animation: spinReverse 28s linear infinite;
}

.animate-core-float {
  animation: coreFloat 5s ease-in-out infinite;
}

.animate-float-card {
  animation: floatCard 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulseGlow 3s ease-in-out infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spinReverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

@keyframes coreFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 0 rgba(34,211,238,0);
  }
  50% {
    box-shadow: 0 0 25px rgba(34,211,238,0.25);
  }
}
`}
      </style>


      <div className="absolute bottom-0 left-0 w-full h-56 pointer-events-none z-0 flex justify-center">
        <div className="w-full max-w-5xl text-center mt-25 pt-8 border-t border-white/10">
          <p className="text-md text-white/60 mb-4">
            {hero?.paragraph2?.text}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {[
              hero?.heading13?.text,
              hero?.heading14?.text,
              hero?.heading15?.text,
              hero?.heading16?.text,
              hero?.heading17?.text,
            ].map((company, index) => (
              <span key={`${company}-${index}`} className="text-xl font-bold text-white">
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