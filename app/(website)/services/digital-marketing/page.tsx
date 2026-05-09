"use client";

import { Metadata } from "next"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { DigitalMarketingBanner } from "@/components/services/banners/digital-banner"
import { useContent } from "@/app/context/ContentContext"
import { useEffect } from "react"

// export const metadata: Metadata = {
//   title: "Digital Marketing Services | Skymark Digital",
//   description: "Comprehensive digital marketing services including SEO, social media marketing, Google & Meta advertising, lead generation, and email marketing.",
// }

export default function DigitalMarketingPage() {
  const slug = "digital-marketing";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  const main = sectionsBySlug[slug]?.["Main"]?.blocks;
  const seo = sectionsBySlug[slug]?.["SEO"]?.blocks;
  const smm = sectionsBySlug[slug]?.["SMM"]?.blocks;
  const google = sectionsBySlug[slug]?.["Google"]?.blocks;
  const lead = sectionsBySlug[slug]?.["Lead"]?.blocks;
  const email = sectionsBySlug[slug]?.["Email"]?.blocks;
  const cta = sectionsBySlug[slug]?.["CTA"]?.blocks;
  const getUrl = (imageId?: string) =>
    media.find((m) => m.id === imageId)?.mediaUrl || null;

  const services = [
    {
      image: getUrl(seo?.image1?.imageId) || "/images/services/seo.avif",
      title: seo?.heading1.text,
      description: seo?.paragraph1.text,
      features: [
        seo?.heading2?.text,
        seo?.heading3?.text,
        seo?.heading4?.text,
        seo?.heading5?.text,
        seo?.heading6?.text,
        seo?.heading7?.text,
      ],
    },
    {
      image: getUrl(smm?.image1?.imageId) || "/images/services/smm.png",
      title: smm?.heading1.text,
      description: smm?.paragraph1.text,
      features: [
        smm?.heading2?.text,
        smm?.heading3?.text,
        smm?.heading4?.text,
        smm?.heading5?.text,
        smm?.heading6?.text,
        smm?.heading7?.text,
      ],
    },
    {
      image: getUrl(google?.image1?.imageId) || "/images/services/meta.jpg",
      title: google?.heading1.text,
      description: google?.paragraph1.text,
      features: [
        google?.heading2?.text,
        google?.heading3?.text,
        google?.heading4?.text,
        google?.heading5?.text,
        google?.heading6?.text,
        google?.heading7?.text,
      ],
    },
    {
      image: getUrl(lead?.image1?.imageId) || "/images/services/lead.webp",
      title: lead?.heading1.text,
      description: lead?.paragraph1.text,
      features: [
        lead?.heading2?.text,
        lead?.heading3?.text,
        lead?.heading4?.text,
        lead?.heading5?.text,
        lead?.heading6?.text,
        lead?.heading7?.text,
      ],
    },
    {
      image: getUrl(email?.image1?.imageId) || "/images/services/email.jfif",
      title: email?.heading1.text,
      description: email?.paragraph1.text,
      features: [
        email?.heading2?.text,
        email?.heading3?.text,
        email?.heading4?.text,
        email?.heading5?.text,
        email?.heading6?.text,
        email?.heading7?.text,
      ],
    },
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
      <DigitalMarketingBanner />

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
                title={service.title as string}
                description={service.description as string}
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
