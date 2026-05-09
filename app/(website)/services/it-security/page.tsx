"use client";
// import { Metadata } from "next"
// import { TopBar } from "@/components/layout/top-bar"
// import { Header } from "@/components/layout/header"
// import { Footer } from "@/components/layout/footer"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { ITSecurityBanner } from "@/components/services/banners/security-banner"
import { useContent } from "@/app/context/ContentContext";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "IT & Security Services | Skymark Digital",
//   description: "Comprehensive cyber security services, system and network management, and technical consulting to protect and optimize your IT infrastructure.",
// }

export default function ITSecurityPage() {
  const slug = "security";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  const main = sectionsBySlug[slug]?.["Main"]?.blocks;
  const cyber = sectionsBySlug[slug]?.["Cyber"]?.blocks;
  const system = sectionsBySlug[slug]?.["System"]?.blocks;
  const technical = sectionsBySlug[slug]?.["Technical"]?.blocks;
  const cta = sectionsBySlug[slug]?.["CTA"]?.blocks;
  const getUrl = (imageId?: string) =>
    media.find((m) => m.id === imageId)?.mediaUrl || null;

  const services = [
    {
      image: getUrl(cyber?.image1?.imageId) || "/images/services/cyber.jpg",
      title: cyber?.heading1.text,
      description: cyber?.paragraph1.text,
      features: [
        cyber?.heading2?.text,
        cyber?.heading3?.text,
        cyber?.heading4?.text,
        cyber?.heading5?.text,
        cyber?.heading6?.text,
        cyber?.heading7?.text,
      ],
    },
    {
      image: getUrl(system?.image1?.imageId) || "/images/services/network.jpg",
      title: system?.heading1.text,
      description: system?.paragraph1.text,
      features: [
        system?.heading2?.text,
        system?.heading3?.text,
        system?.heading4?.text,
        system?.heading5?.text,
        system?.heading6?.text,
        system?.heading7?.text,
      ],
    },
    {
      image: getUrl(technical?.image1?.imageId) || "/images/services/hr.webp",
      title: technical?.heading1.text,
      description: technical?.paragraph1.text,
      features: [
        technical?.heading2?.text,
        technical?.heading3?.text,
        technical?.heading4?.text,
        technical?.heading5?.text,
        technical?.heading6?.text,
        technical?.heading7?.text,
      ],
    }
  ]

  if (loading && !sectionsBySlug[slug]) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* <TopBar />
      <Header /> */}

      <ITSecurityBanner />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0ea5e9] font-semibold uppercase tracking-wider text-md">
              {main?.heading1?.text}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              {main?.heading2?.text}
            </h2>
            <p className="text-muted-foreground text-lg">
              {main?.paragraph1?.text}
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceSection
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features as string[]}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        label={cta?.heading2?.text}
        title={cta?.heading1?.text}
        description={cta?.paragraph1?.text}
      />

      {/* <Footer /> */}
    </main>
  )
}
