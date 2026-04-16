"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles } from "lucide-react"

interface ServiceCTAProps {
  title?: string
  description?: string
}

export function ServiceCTA({ 
  title = "Ready to Get Started?", 
  description = "Contact us today to discuss how our services can help transform your business." 
}: ServiceCTAProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="gradient-hero rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Mesh overlay */}
          <div className="absolute inset-0 mesh-overlay rounded-3xl" />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute top-5 right-[10%] w-40 h-40 bg-amber-400/20 animate-morph animate-float blur-2xl" />
            <div className="absolute bottom-5 left-[5%] w-48 h-48 bg-white/10 animate-morph animate-float-delayed blur-2xl" />
          </div>
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04] rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: "30px 30px"
            }}
          />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Free Consultation
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-6 py-5 group shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 transition-all"
              >
                <Link href="/#contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-6 py-5 transition-all"
              >
                <a href="tel:+15551234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
