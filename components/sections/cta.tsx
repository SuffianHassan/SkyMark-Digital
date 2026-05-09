"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles } from "lucide-react"
import { useEffect } from "react";
import { useContent } from "@/app/context/ContentContext";

export function CTA() {
  const slug = "home";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  const cta = sectionsBySlug[slug]?.["Call To Action"]?.blocks;
  const getUrl = (imageId?: string) =>
    media.find((m) => m.id === imageId)?.mediaUrl || null;

  if (loading && !sectionsBySlug[slug]) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Mesh overlay */}
      <div className="absolute inset-0 mesh-overlay" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-[10%] w-64 h-64 bg-amber-400/20 animate-morph animate-float blur-2xl" />
        <div className="absolute bottom-10 left-[5%] w-72 h-72 bg-white/10 animate-morph animate-float-delayed blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit" style={{ animationDuration: '40s' }}>
            <div className="w-2 h-2 bg-amber-400/60 rounded-full blur-sm" />
          </div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-amber-400" />
            {cta?.heading1?.text}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {cta?.heading2?.text}
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {cta?.paragraph1?.text}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-8 py-6 text-lg group shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 transition-all"
            >
              <Link href="/#contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg transition-all"
            >
              <a href="tel:+15551234567">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
