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

          <div className="relative flex items-center justify-center min-h-[620px] md:min-h-[420px] sm:min-h-[380px] w-full overflow-visible">

            {/* BACKGROUND GLOW */}
            <div className="absolute w-[620px] h-[620px] rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-3xl" />

            {/* OUTER ORBIT RINGS */}
            <div className="absolute w-[340px] h-[340px] md:w-[520px] md:h-[420px] rounded-full border border-cyan-400/25" />
            <div className="absolute w-[260px] h-[260px] md:w-[420px] md:h-[320px] rounded-full border border-white/10" />

            {/* MAIN ORBIT CONTAINER */}
            <div className="relative w-[340px] h-[340px] md:w-[520px] md:h-[520px] animate-orbit">

              {[
                "/images/facebook.png",
                "/images/youtube.png",
                "/images/instagram.png",
                "/images/tiktok.png",
                "/images/twitter.png",
                "/images/reddit.png",
                "/images/pinterest.png",
                "/images/snapchat.png",
                "/images/whatsapp.png",
                "/images/telegram.png",
                "/images/discord.png",
                "/images/linkedin.png",
              ].map((icon, i) => {

                const total = 12
                const angle = (360 / total) * i
                const radius = typeof window !== "undefined" && window.innerWidth < 768
                  ? 145
                  : 235

                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `
                      rotate(${angle}deg)
                      translateX(${radius}px)
                    `,
                      transformOrigin: "center",
                    }}
                  >

                    {/* KEEP ICON UPRIGHT */}
                    <div
                      style={{
                        transform: `rotate(-${angle}deg)`,
                      }}
                      className="relative flex items-center justify-center"
                    >

                      {/* FLOATING DOTS */}
                      <div
                        className="absolute -top-4 left-1/2 w-2 h-2 rounded-full bg-yellow-300 animate-dotFlash"
                        style={{
                          animationDelay: `${i * 0.3}s`,
                        }}
                      />

                      <div
                        className="absolute top-1/2 -right-5 w-2 h-2 rounded-full bg-white animate-dotFlash"
                        style={{
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />

                      <div
                        className="absolute -bottom-4 left-0 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-dotFlash"
                        style={{
                          animationDelay: `${i * 0.7}s`,
                        }}
                      />

                      {/* CONNECTING LINE */}
                      <div className="absolute w-[2px] h-[240px] bg-gradient-to-b from-cyan-400/60 to-transparent rotate-90 origin-top" />

                      {/* ICON CARD */}
                      <div className={`
                        relative
                        w-[58px] h-[58px] md:w-[92px] md:h-[92px]
                        rounded-[28px]
                        border
                        border-white/20
                        bg-white/10
                        backdrop-blur-xl
                        flex
                        items-center
                        justify-center
                        shadow-[0_0_35px_rgba(34,211,238,0.15)]
                        hover:scale-110
                        transition-all
                        duration-500
                      `}>

                        {/* OUTER GLOW */}
                        <div className="absolute inset-0 rounded-[28px] bg-cyan-400/70 blur-xl" />

                        <img
                          src={icon}
                          alt=""
                          className="relative z-10 w-7 h-7 md:w-12 md:h-12 object-contain"
                        />

                      </div>
                    </div>
                  </div>
                )
              })}

              {/* CENTER SECTION */}
              <div className="absolute inset-0 flex items-center justify-center">

                {/* CENTER RINGS */}
                <div className="absolute w-[170px] h-[170px] md:w-[280px] md:h-[280px] rounded-full border border-cyan-400/20" />
                <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full border border-purple-400/20" />

                {/* CENTER CORE */}
                {/* <div className={`
                    relative
                    w-[140px] h-[140px] md:w-[220px] md:h-[220px]
                    rounded-full
                    bg-gradient-to-br
                    from-cyan-400
                    via-blue-500
                    to-amber-300
                    flex
                    items-center
                    justify-center
                    shadow-[0_0_90px_rgba(34,211,238,0.35)]
                  `}>

                  <div className="absolute inset-[8px] rounded-full bg-[#001A33]/90 border border-white/10 backdrop-blur-xl" />

                  <div className="relative z-10 text-center px-6">
                    <h2 className={`
                      text-white
                      text-[11px] md:text-[20px]
                      font-bold
                      uppercase
                      tracking-[0.08em] md:tracking-[0.15em]
                      leading-tight
                    `}>
                      Digital
                      <br />
                      Growth
                      <br />
                      Engine
                    </h2>
                  </div>
                </div> */}
                <div className="relative z-10 flex items-center justify-center w-[140px] h-[140px] md:w-[220px] md:h-[220px] overflow-hidden rounded-full">

                  <div className={`
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-br
                    from-[#16a0ff]/80
                    via-[#f4c02b]/90
                    to-[#fe9a00]/10
                  `} />

                  {/* GLOSS SHINE */}
                  <div className={`
                    absolute
                    top-0
                    left-0
                    w-full
                    h-1/2
                    rounded-t-full
                    bg-white/20
                    blur-2xl
                    opacity-10
                  `} />

                  {/* INNER GLOW */}
                  <div className={`
                    absolute
                    inset-3
                    rounded-full
                    bg-gradient-to-br
                    from-cyan-400/90
                    to-amber-300/10
                    shadow-[inset_0_0_50px_rgba(255,255,255,0.15)]
                  `} />

                  {/* OUTER SHADOW */}
                  <div className={`
                    absolute
                    inset-0
                    rounded-full
                    shadow-[0_0_80px_rgba(22,160,243,0.45),0_0_120px_rgba(254,154,0,0.25)]
                  `} />

                  {/* GLASS OVERLAY */}
                  <div className={`
                    absolute
                    inset-[10px]
                    rounded-full
                    bg-black/5
                    backdrop-blur-sm
                    border
                    border-white/10
                  `} />

                  {/* CENTER LIGHT */}
                  <div className={`
                    absolute
                    w-[55%]
                    h-[55%]
                    rounded-full
                    bg-white/5
                    blur-1xl
                  `} />
                  {/* TEXT */}
                  <div className="relative z-20 text-center px-6">

                    <h2 className={`
                        text-white
                        text-[11px]
                        md:text-[20px]
                        font-bold
                        uppercase
                        tracking-[0.08em]
                        md:tracking-[0.15em]
                        leading-tight
                        drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]
                      `}>
                      {hero?.heading17?.text}
                      <br />
                      {hero?.heading18?.text}
                      <br />
                      {hero?.heading19?.text}
                    </h2>

                    <p className={`
                      mt-2
                      text-[7px]
                      md:text-[11px]
                      text-white/70
                      tracking-[0.2em]
                      uppercase
                    `}>
                      {hero?.heading20?.text}
                    </p>

                  </div>
                </div>
              </div>
            </div>

            {/* LEFT FLOATING CARD */}
            <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 top-0 md:top-20 animate-float-card">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2 md:px-5 md:py-4 shadow-2xl">
                <p className="text-white/50 text-xs tracking-widest">{hero?.heading5?.text}</p>
                <h3 className="text-white text-lg md:text-2xl font-bold">{hero?.heading6?.text}</h3>
                <p className="text-cyan-300 text-sm">{hero?.heading7?.text}</p>
              </div>
            </div>

            {/* RIGHT FLOATING CARD */}
            <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 bottom-0 md:bottom-20 animate-float-card delay-500">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2 md:px-5 md:py-4 shadow-2xl">
                <p className="text-white/50 text-xs tracking-widest">{hero?.heading9?.text}</p>
                <h3 className="text-white text-lg md:text-2xl font-bold">{hero?.heading10?.text}</h3>
                <p className="text-amber-300 text-sm">{hero?.heading11?.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-orbit {
          animation: orbitRotate 28s linear infinite;
        }

        .animate-float-card {
          animation: floatCard 6s ease-in-out infinite;
        }

        .animate-dotFlash {
          animation: dotFlash 2.5s ease-in-out infinite;
        }

        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes dotFlash {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.8);
          }
        }

      `}</style>

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