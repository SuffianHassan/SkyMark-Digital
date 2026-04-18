"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const services = [
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Automation & AI", href: "/services/automation-ai" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "IT & Security", href: "/services/it-security" },
  { name: "Creative Services", href: "/services/creative-services" },
  { name: "Business Services", href: "/services/business-services" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact Us", href: "/#contact" }
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0571b0] via-[#083a57] to-[#021c2b] text-white/90 overflow-hidden [text-shadow:0_0_8px_rgba(255,255,255,0.25)]">    {/* <div className="absolute inset-0 opacity-85 bg-[radial-gradient(circle_at_5%_15%,white,transparent_10%)]" />  */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* BRAND */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo-white.png"
              alt="Skymark Digital"
              width={160}
              height={50}
              className="w-30 h-auto"
            />

            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Empowering businesses with innovative IT solutions and digital marketing services.
            </p>
          </div>
      
          {/* SERVICES */}
          <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white [text-shadow:0_0_10px_rgba(255,255,255,0.6)]">              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white [text-shadow:0_0_10px_rgba(255,255,255,0.6)]">              Company
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT INFO BLOCK */}
          <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white [text-shadow:0_0_10px_rgba(255,255,255,0.6)]">              About
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              We help businesses scale with cutting-edge digital solutions, automation, and IT services.
            </p>

            {/* Decorative Divider */}
            <div className="w-16 h-[2px] bg-white/40 mt-6"></div>

            {/* SOCIAL ICONS (CENTERED like reference) */}
        <div className="flex gap-6 mt-16">
          <Link href="https://www.facebook.com/skymarkdigitalinc" target="_blank" className="text-white/70 hover:text-white transition">
            <Facebook size={20} />
          </Link>
          <Link href="https://www.instagram.com/skymarkdigitalinc" target="_blank" className="text-white/70 hover:text-white transition">
            <Instagram size={20} />
          </Link>
          <Link href="https://www.linkedin.com/company/skymark-digital-inc-canada/" target="_blank" className="text-white/70 hover:text-white transition">
            <Linkedin size={20} />
          </Link>
          <Link href="https://www.youtube.com/@SkymarkDigital" target="_blank" className="text-white/70 hover:text-white transition">
            <Youtube size={20} />
          </Link>
          <Link href="https://www.tiktok.com/@skymark.digital" target="_blank" className="text-white/70 hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.214h-3.356v13.29a2.892 2.892 0 1 1-2.891-2.891c.226 0 .445.024.657.069V9.466a6.24 6.24 0 0 0-.657-.034A6.247 6.247 0 1 0 15.818 15.68V8.545a8.155 8.155 0 0 0 4.771 1.523V6.686z"/>
            </svg>
          </Link>
        </div>
          </div>

        </div>

        

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Skymark Digital. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/60 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>

    </footer>
  )
}