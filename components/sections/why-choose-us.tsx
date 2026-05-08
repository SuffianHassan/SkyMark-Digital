"use client"

import { useContent } from "@/app/context/ContentContext";
import {
  Zap,
  Target,
  Clock,
  Headphones,
  TrendingUp,
  Shield,
  CheckCircle
} from "lucide-react"
import { useEffect } from "react";

export function WhyChooseUs() {
  const slug = "home";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  if (loading && !sectionsBySlug[slug]) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  const why = sectionsBySlug[slug]?.["Why Choose Us"]?.blocks;

  const features = [
    {
      icon: Zap,
      title: why?.heading6.text,
      description: why?.paragraph2?.text,
    },
    {
      icon: Target,
      title: why?.heading7.text,
      description: why?.paragraph3?.text,
    },
    {
      icon: Clock,
      title: why?.heading8.text,
      description: why?.paragraph4?.text,
    },
    {
      icon: Headphones,
      title: why?.heading9.text,
      description: why?.paragraph5?.text,
    },
    {
      icon: TrendingUp,
      title: why?.heading10.text,
      description: why?.paragraph6?.text,
    },
    {
      icon: Shield,
      title: why?.heading11.text,
      description: why?.paragraph7?.text,
    },
  ]

  const highlights = [
    why?.heading2.text,
    why?.heading3.text,
    why?.heading4?.text,
    why?.heading5?.text,
  ]

  return (
    <section className="relative py-30 bg-white overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Spiral Top Left */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] z-0">
          <div className="spiral-grid" />
        </div>

        {/* Spiral Bottom Right */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] z-0">
          <div className="spiral-grid rotate-180" />
        </div>

        {/* Grid Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] animate-gridMove z-10" />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-sky-200/20 blur-3xl -translate-x-1/2 -translate-y-1/2 rounded-full z-0" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="text-[#0ea5e9] font-semibold uppercase tracking-wider text-md">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {why?.heading1.text}
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {why?.paragraph1?.text}
            </p>

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0ea5e9] flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl 
                  bg-gradient-to-br from-[#e0f2fe] via-white to-[#bae6fd]
                  backdrop-blur-sm
                  border border-white/40
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300 group"
              >
                {/* ICON */}
                <div className="inline-flex items-center justify-center w-12 h-12 
                  bg-[#0ea5e9]/10 rounded-lg mb-4 
                  group-hover:bg-[#0ea5e9]/20 transition-colors"
                >
                  <feature.icon className="h-6 w-6 text-[#0ea5e9]" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
