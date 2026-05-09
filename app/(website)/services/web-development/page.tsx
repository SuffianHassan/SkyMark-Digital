"use client";

// import { Metadata } from "next"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { DevelopmentBanner } from "@/components/services/banners/development-banner"
import { useContent } from "@/app/context/ContentContext";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Web Development Services | Skymark Digital",
//   description: "Professional website design and development, mobile app development, and custom software solutions for businesses of all sizes.",
// }

export default function WebDevelopmentPage() {
  const slug = "web";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  const main = sectionsBySlug[slug]?.["Main"]?.blocks;
  const design = sectionsBySlug[slug]?.["Design"]?.blocks;
  const mobile = sectionsBySlug[slug]?.["Mobile"]?.blocks;
  const commerce = sectionsBySlug[slug]?.["Commerce"]?.blocks;
  const custom = sectionsBySlug[slug]?.["Custom"]?.blocks;
  const cta = sectionsBySlug[slug]?.["CTA"]?.blocks;
  const getUrl = (imageId?: string) =>
    media.find((m) => m.id === imageId)?.mediaUrl || null;

  const services = [
    {
      image: getUrl(design?.image1?.imageId) || "/images/services/web-development.avif",
      title: design?.heading1.text,
      description: design?.paragraph1.text,
      features: [
        design?.heading2?.text,
        design?.heading3?.text,
        design?.heading4?.text,
        design?.heading5?.text,
        design?.heading6?.text,
        design?.heading7?.text,
      ],
    },
    {
      image: getUrl(mobile?.image1?.imageId) || "/images/services/mobile-development.jfif",
      title: mobile?.heading1.text,
      description: mobile?.paragraph1.text,
      features: [
        mobile?.heading2?.text,
        mobile?.heading3?.text,
        mobile?.heading4?.text,
        mobile?.heading5?.text,
        mobile?.heading6?.text,
        mobile?.heading7?.text,
      ],
    },
    {
      image: getUrl(commerce?.image1?.imageId) || "/images/services/e-commerce.jpg",
      title: commerce?.heading1.text,
      description: commerce?.paragraph1.text,
      features: [
        commerce?.heading2?.text,
        commerce?.heading3?.text,
        commerce?.heading4?.text,
        commerce?.heading5?.text,
        commerce?.heading6?.text,
        commerce?.heading7?.text,
      ],
    },
    {
      image: getUrl(custom?.image1?.imageId) || "/images/services/custom.png",
      title: custom?.heading1.text,
      description: custom?.paragraph1.text,
      features: [
        custom?.heading2?.text,
        custom?.heading3?.text,
        custom?.heading4?.text,
        custom?.heading5?.text,
        custom?.heading6?.text,
        custom?.heading7?.text,
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

      <DevelopmentBanner />

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
