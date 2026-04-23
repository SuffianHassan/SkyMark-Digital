"use client"

import { Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function TopBar() {
  return (
    <div className="bg-[#0c4a6e] text-white py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4 text-amber-400" />
          <span>+1 (416) 832-4050</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://www.facebook.com/skymarkdigitalinc" target="_blank" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link href="https://www.instagram.com/skymarkdigitalinc" className="hover:text-amber-400 transition-colors" target="_blank" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link href="https://www.linkedin.com/company/skymark-digital-inc-canada/" className="hover:text-amber-400 transition-colors" target="_blank" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link href="https://www.youtube.com/@SkymarkDigital" className="hover:text-amber-400 transition-colors" target="_blank" aria-label="Twitter">
            <Youtube className="h-4 w-4" />
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
  )
}
