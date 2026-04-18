"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

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
  { name: "Contact Us", href: "/#contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#0c4a6e] text-white">
      <div className="max-w-6xl mx-auto py-16 md:px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo-white.png"
              alt="Skymark Digital"
              width={160}
              height={53}
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Empowering businesses with innovative IT solutions and digital marketing services. 
              Your success is our mission.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/80 hover:text-amber-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  123 Business Avenue, Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-white/80">info@skymarkdigital.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/80 text-sm">
              &copy; {new Date().getFullYear()} Skymark Digital. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-white/80 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/80 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
