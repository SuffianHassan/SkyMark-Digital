"use client"

import { useEffect, useRef, useState } from "react"
import {
  Building2,
  UtensilsCrossed,
  Heart,
  Car,
  ShoppingCart,
  GraduationCap,
  CarIcon,
  Building,
  HeartPlus,
  School,
} from "lucide-react"
import Link from "next/link"
import { Inter_Tight } from "next/font/google"

const industries = [
  { icon: Building2, title: "Real Estate", desc: "Property & Lead Systems" },
  { icon: Building, title: "Beauty Salon", desc: "Customers Scheduling" },
  { icon: UtensilsCrossed, title: "Restaurants", desc: "Ordering & Marketing" },
  { icon: Heart, title: "Dental Clinics", desc: "Patient Systems" },
  { icon: CarIcon, title: "Driving Schools", desc: "Scheduling & SEO" },
  { icon: Car, title: "Automotive", desc: "Dealer Platforms" },
  { icon: HeartPlus, title: "Doctors Clinics", desc: "Patient Systems" },
  { icon: School, title: "Schools", desc: "Attendance & Scheduling" },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Online Stores" },
]

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
})

export function Industries() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let pos = 0

    const interval = setInterval(() => {
      if (paused) return

      pos += 0.5
      slider.style.transform = `translateY(-${pos}px)`

      if (pos > slider.scrollHeight / 2) {
        pos = 0
      }
    }, 20)

    return () => clearInterval(interval)
  }, [paused])

  return (
    <section className="relative py-20 md:py-28 lg:py-28 bg-gradient-to-r from-sky-500 via-white to-sky-400 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

        <div className="order-1 lg:hidden text-center mb-10">
          <h2 className="text-3xl font-bold tracking-[0.3em] text-transparent bg-gradient-to-r from-[#fab925] to-[#c40d40] bg-clip-text">
            SKYMARK DIGITAL
          </h2>
        </div>
        {/* LEFT → SLIDER */}
        <div
          className="order-2 lg:order-1 relative h-[300px] sm:h-[360px] md:h-[560px] overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Fade top/bottom */}
          <div className="absolute top-0 left-0 w-full h-24 md:h-28 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-28 bg-gradient-to-t from-white to-transparent z-10" />

          <div ref={sliderRef} className="flex flex-col gap-5">
            {[...industries, ...industries].map((item, i) => (
              <div
                key={i}
                className="bg-[#f3f4f6] border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fe9a00]">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:order-2 lg:flex items-center justify-center">
          <div className="text-center rotate-90 whitespace-nowrap leading-[1.2]">
            <span className="block text-8xl font-bold text-transparent stroke-text tracking-[0.2em]">
              Skymark
            </span>
            <span className="block text-8xl font-bold text-transparent stroke-text tracking-[0.2em] mt-2">
              Digital
            </span>
          </div>
        </div>

        {/* RIGHT → CONTENT */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We have worked across multiple industries, delivering tailored digital
            solutions that help businesses streamline operations, enhance customer
            experiences, and achieve sustainable growth. Our approach combines innovation,
            strategy, and technology to ensure real, measurable results.
          </p>
          <Link href="/#contact">
            <button className="bg-[#fe9a00] px-6 py-3 rounded-full shadow-md hover:scale-105 transition-all">
              Let’s Talk →
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}