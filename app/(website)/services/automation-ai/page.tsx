"use client";

import { AutomationBanner } from "@/components/services/banners/automation-banner"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { useContent } from "@/app/context/ContentContext";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Automation & AI Solutions | Skymark Digital",
//   description: "Transform your business with AI automation solutions, smart operations management, and comprehensive ERP systems.",
// }

export default function AutomationAIPage() {
  const slug = "automation";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  const main = sectionsBySlug[slug]?.["Main"]?.blocks;
  const automation = sectionsBySlug[slug]?.["Automation"]?.blocks;
  const smart = sectionsBySlug[slug]?.["Smart"]?.blocks;
  const erp = sectionsBySlug[slug]?.["ERP"]?.blocks;
  const cta = sectionsBySlug[slug]?.["CTA"]?.blocks;
  const getUrl = (imageId?: string) =>
    media.find((m) => m.id === imageId)?.mediaUrl || null;

  const services = [
    {
      image: getUrl(automation?.image1?.imageId) || "/images/services/aisolutions.jpg",
      title: automation?.heading1.text,
      description: automation?.paragraph1.text,
      features: [
        automation?.heading2?.text,
        automation?.heading3?.text,
        automation?.heading4?.text,
        automation?.heading5?.text,
        automation?.heading6?.text,
        automation?.heading7?.text,
      ],
    },
    {
      image: getUrl(smart?.image1?.imageId) || "/images/services/aioperations.jpg",
      title: smart?.heading1.text,
      description: smart?.paragraph1.text,
      features: [
        smart?.heading2?.text,
        smart?.heading3?.text,
        smart?.heading4?.text,
        smart?.heading5?.text,
        smart?.heading6?.text,
        smart?.heading7?.text,
      ],
    },
    {
      image: getUrl(erp?.image1?.imageId) || "/images/services/aierp.jpg",
      title: erp?.heading1.text,
      description: erp?.paragraph1.text,
      features: [
        erp?.heading3?.text,
        erp?.heading4?.text,
        erp?.heading5?.text,
        erp?.heading6?.text,
        erp?.heading7?.text,
        erp?.heading8?.text,
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
      <AutomationBanner />

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
