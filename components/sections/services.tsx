"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { FaBullhorn, FaLaptopCode } from "react-icons/fa"
import { HiOutlineCode } from "react-icons/hi"
import { MdAutoGraph, MdCampaign, MdOutlineSecurity } from "react-icons/md"
import { AiOutlineRobot } from "react-icons/ai"
import { FaPalette } from "react-icons/fa"
import { FaBriefcase } from "react-icons/fa"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: MdCampaign,
    title: "Digital Marketing",
    description:
      "Strategic SEO, social media marketing, Google & Meta advertising, lead generation, and email marketing to boost your online presence.",
    href: "/services/digital-marketing",
    color: "bg-gradient-to-br from-blue-500 via-sky-700 to-cyan-400",
    image: "/images/marketing.jpg"
  },
  {
    icon: FaLaptopCode,
    title: "Development Services",
    description:
      "Custom website design, mobile app development, and software solutions tailored to your unique business requirements.",
    href: "/services/web-development",
    color: "bg-gradient-to-br from-amber-400 via-orange-600 to-yellow-500",
    image: "/images/web.png"
  },
  {
    icon: FaPalette,
    title: "Creative Services",
    description:
      "Professional graphic design, video editing, UI/UX design, content management, and brand identity development.",
    href: "/services/creative-services",
    color: "bg-gradient-to-br from-red-500 via-rose-800 to-red-500",
    image: "/images/creative.png"
  },
  {
    icon: MdAutoGraph,
    title: "Automation & AI",
    description:
      "AI automation solutions, smart operations management, and comprehensive ERP solutions to streamline your business processes.",
    href: "/services/automation-ai",
    color: "bg-gradient-to-br from-slate-600 via-gray-800 to-zinc-800",
    image: "/images/automation.png"
  },
  {
    icon: MdOutlineSecurity,
    title: "IT & Security",
    description:
      "Robust cyber security services, system & network management, and technical consulting to protect your digital assets.",
    href: "/services/it-security",
    color: "bg-gradient-to-br from-blue-700 via-blue-500 to-black",
    image: "/images/security.jfif"
  },
  {
    icon: FaBriefcase,
    title: "Business Services",
    description:
      "Amazon store setup, accounting & bookkeeping, and HR consulting to support your business operations.",
    href: "/services/business-services",
    color: "bg-gradient-to-br from-emerald-500 via-green-800 to-teal-500",
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
      className="relative py-20 overflow-hidden bg-gradient-to-br from-[#fff7e6] via-[#F6B224]/60 to-[#F6B224]/20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0ea5e9] font-semibold uppercase tracking-wider text-md">
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
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20 group-hover:via-white/10 group-hover:to-white/10 transition-all duration-500" />
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />

                <CardContent className="p-5 md:p-6 relative z-10">

                    <div className={`
                      relative inline-flex items-center justify-center w-14 h-14
                      rounded-xl mb-5
                      ${service.color}
                      shadow-md
                      group-hover:shadow-lg group-hover:shadow-sky-500/20
                      transition-all duration-300
                    `}>
                  {/* Glow layer */}
                   <div className={`
                      absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20
                      ${service.color} blur-xl transition-all duration-500
                    `}></div>

                    {/* Icon */}
                    <service.icon className="h-6 w-6 text-white relative z-10 group-hover:scale-110 transition-transform" />
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