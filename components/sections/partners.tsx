"use client"

import { useContent } from "@/app/context/ContentContext";
import Image from "next/image"
import { useEffect } from "react";

export function Partners() {
  const slug = "home";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

   useEffect(() => {
      loadSectionsBySlug(slug);
    }, [slug]);
    
    const brands = sectionsBySlug[slug]?.["Brands"]?.blocks;

    const getUrl = (imageId?: string) =>
      media.find((m) => m.id === imageId)?.mediaUrl || null;

const partners = [
  { logo: getUrl(brands?.image1?.imageId) || "images/logos/arif.png" },
  { logo: getUrl(brands?.image2?.imageId) || "images/logos/gdc.png" },
  { logo: getUrl(brands?.image3?.imageId) || "images/logos/emad.png" },
  { logo: getUrl(brands?.image4?.imageId) || "images/logos/road.png" },
  { logo: getUrl(brands?.image5?.imageId) || "images/logos/hamza.jpeg" },
  { logo: getUrl(brands?.image6?.imageId) || "images/logos/salman.png" },
  { logo: getUrl(brands?.image7?.imageId) || "images/logos/sf.png" },
  { logo: getUrl(brands?.image8?.imageId) || "images/logos/st.png" },
  { logo: getUrl(brands?.image9?.imageId) || "images/logos/gwg.png" },
]

// duplicate for seamless loop
const loopPartners = [...partners, ...partners]

    if (loading && !sectionsBySlug[slug]) {
      return (
        <div className="flex items-center justify-center h-screen w-full">
          <p className="text-xl font-bold">Loading...</p>
        </div>
      );
    }


  return (
    <section className="py-10 bg-gradient-to-b from-slate-900 to-sky-300 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-primary font-semibold uppercase tracking-wider text-2xl">
            {brands?.heading1?.text}
          </span>
          {/* <h2 className="text-3xl md:text-4xl font-bold ">
            Trusted by Leading Brands
          </h2> */}
        </div>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-slide">

            {loopPartners.map((partner, index) => (
              <div key={index} className="px-4">
              <div
                // key={index}
                className="w-32 h-32 flex-shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-md"
              >
                <div className="relative w-24 h-20 opacity-70 hover:opacity-100 transition">
                  <Image
                    src={partner.logo}
                    alt="partner logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}