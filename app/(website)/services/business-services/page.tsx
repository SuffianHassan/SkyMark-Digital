"use client";
// import { Metadata } from "next"
// import { TopBar } from "@/components/layout/top-bar"
// import { Header } from "@/components/layout/header"
// import { Footer } from "@/components/layout/footer"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
// import { 
//   Briefcase, 
//   ShoppingBag, 
//   Calculator, 
//   Users 
// } from "lucide-react"
import { BusinessServicesBanner } from "@/components/services/banners/business-banner"
import { useContent } from "@/app/context/ContentContext";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Business Services | Skymark Digital",
//   description: "Professional business services including Amazon store setup, accounting & bookkeeping, and HR consulting to support your business growth.",
// }

export default function BusinessServicesPage() {
  const slug = "business";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  const main = sectionsBySlug[slug]?.["Main"]?.blocks;
  const amazon = sectionsBySlug[slug]?.["Amazon"]?.blocks;
  const accounting = sectionsBySlug[slug]?.["Accounting"]?.blocks;
  const hr = sectionsBySlug[slug]?.["HR"]?.blocks;
  const cta = sectionsBySlug[slug]?.["CTA"]?.blocks;
  const getUrl = (imageId?: string) =>
    media.find((m) => m.id === imageId)?.mediaUrl || null;

  const services = [
    {
      image: getUrl(amazon?.image1?.imageId) || "/images/services/amazon.jfif",
      title: amazon?.heading1.text,
      description: amazon?.paragraph1.text,
      features: [
        amazon?.heading2?.text,
        amazon?.heading3?.text,
        amazon?.heading4?.text,
        amazon?.heading5?.text,
        amazon?.heading6?.text,
        amazon?.heading7?.text,
      ],
    },
    {
      image: getUrl(accounting?.image1?.imageId) || "/images/services/accounting.jfif",
      title: accounting?.heading1.text,
      description: accounting?.paragraph1.text,
      features: [
        accounting?.heading2?.text,
        accounting?.heading3?.text,
        accounting?.heading4?.text,
        accounting?.heading5?.text,
        accounting?.heading6?.text,
        accounting?.heading7?.text,
      ],
    },
    {
      image: getUrl(hr?.image1?.imageId) || "/images/services/hrconsulting.jfif",
      title: hr?.heading1.text,
      description: hr?.paragraph1.text,
      features: [
        hr?.heading2?.text,
        hr?.heading3?.text,
        hr?.heading4?.text,
        hr?.heading5?.text,
        hr?.heading6?.text,
        hr?.heading7?.text,
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

      <BusinessServicesBanner />

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
