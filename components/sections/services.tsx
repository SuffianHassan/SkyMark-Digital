"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  Megaphone,
  Bot,
  Code,
  Shield,
  Palette,
  Briefcase,
  ArrowRight
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic SEO, social media marketing, Google & Meta advertising, lead generation, and email marketing to boost your online presence.",
    href: "/services/digital-marketing",
    color: "bg-[#1d4ed8]",
    image: "/images/marketing.jpg"
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom website design, mobile app development, and software solutions tailored to your unique business requirements.",
    href: "/services/web-development",
    color: "bg-[#f59e0b]",
    image: "/images/web.png"
  },
  {
    icon: Palette,
    title: "Creative Services",
    description:
      "Professional graphic design, video editing, UI/UX design, content management, and brand identity development.",
    href: "/services/creative-services",
    color: "bg-[#e11d48]",
    image: "/images/creative.png"
  },
  {
    icon: Bot,
    title: "Automation & AI",
    description:
      "AI automation solutions, smart operations management, and comprehensive ERP solutions to streamline your business processes.",
    href: "/services/automation-ai",
    color: "bg-[#374151]",
    image: "/images/automation.png"
  },
  
  {
    icon: Shield,
    title: "IT & Security",
    description:
      "Robust cyber security services, system & network management, and technical consulting to protect your digital assets.",
    href: "/services/it-security",
    color: "bg-[#1f2937]",
    image: "/images/security.jfif"
  },
  
  {
    icon: Briefcase,
    title: "Business Services",
    description:
      "Amazon store setup, accounting & bookkeeping, and HR consulting to support your business operations.",
    href: "/services/business-services",
    color: "bg-[#047857]",
    image: "/images/business.jfif"
  },
]

/* -------------------- SCROLL HOOK -------------------- */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect() // run once
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

/* -------------------- COMPONENT -------------------- */
export function Services() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section
      id="services"
      className="relative py-20 bg-sky-50 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0ea5e9] font-semibold uppercase tracking-wider text-sm">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Solutions for Your Business Growth
          </h2>
          <p className="text-muted-foreground text-lg">
            From digital marketing to IT security, we provide end-to-end services designed
            to help your business thrive in the digital age.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">

              <Card
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
                className={`
                  relative overflow-hidden group
                  h-full bg-white border border-gray-200

                  hover:border-sky-300
                  hover:shadow-xl hover:shadow-sky-500/10

                  transition-all duration-700

                  hover:-translate-y-2 hover:scale-[1.02]

                  ${isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                  }
                `}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-all duration-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20 group-hover:via-white/40 group-hover:to-white/30 transition-all duration-500" />
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />

                <CardContent className="p-5 md:p-6 relative z-10">

                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center w-12 h-12
                    ${service.color}
                    rounded-lg mb-4
                    group-hover:scale-110 group-hover:rotate-3
                    transition-all duration-300
                  `}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center text-[#0ea5e9] font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>

                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}