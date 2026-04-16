"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Award, Briefcase, Globe, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Worldwide",
    color: "from-sky-500 to-cyan-400",
    bgColor: "bg-sky-500/10",
    iconColor: "text-sky-500",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "In Industry",
    color: "from-amber-500 to-orange-400",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Briefcase,
    value: 1200,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully",
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Globe,
    value: 30,
    suffix: "+",
    label: "Countries Served",
    description: "Globally",
    color: "from-rose-500 to-pink-400",
    bgColor: "bg-rose-500/10",
    iconColor: "text-rose-500",
  },
]

function AnimatedCounter({ value, suffix, color, size = "text-4xl md:text-5xl" }: { value: number; suffix: string; color: string; size?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  // const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)

          let start = 0
          const duration = 2000
          const steps = 60
          const increment = value / steps

          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, duration / steps)

        } else {
          setIsVisible(false)
          setCount(0) // 👈 reset when leaving viewport
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [value])

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      {/* <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}> */}
      <span className={`${size} font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        {count.toLocaleString()}
        {suffix}
      </span>
    </div>
  )
}

export function Stats() {
  return (
    // <section className="py-20 bg-white relative overflow-hidden">
    <section className="pt-28 pb-36 md:pt-36 bg-white relative overflow-hidden">
      {/* Background decorations */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div> */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Center Glow */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[500px] h-[500px] bg-[#fffff]/7 rounded-full blur-3xl" />
        </div>

        {/* Side Accents */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ffffff]/5 rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ffffff]/5 rounded-full blur-3xl" />

      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[#0ea5e9] font-semibold uppercase tracking-wider text-sm mb-4">
            <TrendingUp className="h-4 w-4" />
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Numbers That Speak for Themselves
          </h2>
          {/* <p className="text-muted-foreground text-lg">
            Our track record demonstrates our commitment to excellence and client success.
          </p> */}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-5 md:p-6 border border-gray-200 
                hover:border-transparent hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/10 
                transition-all duration-500 hover:-translate-y-2 shine-effect stagger-${index + 1}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 
                group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`} />
              <div className="absolute inset-[1px] rounded-2xl bg-white -z-10" />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} 
                rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-6 w-6 ${stat.iconColor} icon`} />
              </div>

              {/* Counter */}

              <AnimatedCounter size="text-3xl sm:text-4xl md:text-5xl" value={stat.value} suffix={stat.suffix} color={stat.color} />

              {/* Label */}
              <h3 className="text-lg font-semibold text-foreground mt-3 mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} 
                opacity-0 group-hover:opacity-10 rounded-bl-full rounded-tr-2xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
