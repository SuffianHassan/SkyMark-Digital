"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const services = [
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Automation & AI", href: "/services/automation-ai" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "IT & Security", href: "/services/it-security" },
  { name: "Creative Services", href: "/services/creative-services" },
  { name: "Business Services", href: "/services/business-services" },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Services", href: "/#services", hasDropdown: true },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact Us", href: "/#contact" }
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-black.png"
              alt="Skymark Digital"
              width={180}
              height={60}
              className="h-15 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-[#0ea5e9] font-medium transition-colors">
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link href={service.href} className="cursor-pointer ">
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-[#0ea5e9] font-medium transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all">
              <Link href="/#contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name} className="flex flex-col gap-2">
                    <span className="font-medium text-foreground">{link.name}</span>
                    <div className="pl-4 flex flex-col gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="text-muted-foreground hover:text-[#0ea5e9] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-medium text-foreground hover:text-[#0ea5e9] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Button asChild className="mt-4 bg-[#0ea5e9] hover:bg-[#0284c7] text-white w-fit shadow-md">
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
