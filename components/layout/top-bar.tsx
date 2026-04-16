"use client"

import { Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-[#0c4a6e] text-white py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-30 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4 text-amber-400" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Twitter">
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
