"use client"

import Link from "next/link"
import { ShieldCheck, Lock, Server, ChevronRight } from "lucide-react"
import { useContent } from "@/app/context/ContentContext";
import { useEffect } from "react";

export function ITSecurityBanner() {
  const slug = "security";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  const content = sectionsBySlug[slug]?.["Banner"]?.blocks;
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
    <section className="relative w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 ">
        <img
          // src="/images/banners/security.png"
          src={getUrl(content?.image1?.imageId) || "/images/banners/security.png"}
          alt="IT Security"
          className="w-full h-full object-cover animate-[zoomSlow_15s_ease-in-out_infinite_alternate]"
        />
      </div>

      {/* LEFT GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fdcc34]/15 via-[#fdcc34]/20 to-transparent" />


      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">

        <div className="max-w-2xl text-black">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-black/70 text-sm mb-8">
            <Link href="/" className="hover:text-black">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/#services" className="hover:text-black">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium">IT & Security</span>
          </nav>

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {content?.heading1?.text}<br />
            <span className="text-black">{content?.heading2?.text}</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-black/80 text-lg mb-10">
            {content?.paragraph1?.text}
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-8">

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-black/10 backdrop-blur">
                <ShieldCheck className="w-5 h-5 text-black" />
              </div>
              <span className="text-sm">{content?.heading3?.text}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-black/10 backdrop-blur">
                <Lock className="w-5 h-5 text-black" />
              </div>
              <span className="text-sm">{content?.heading4?.text}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-black/10 backdrop-blur">
                <Server className="w-5 h-5 text-black" />
              </div>
              <span className="text-sm">{content?.heading5?.text}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}