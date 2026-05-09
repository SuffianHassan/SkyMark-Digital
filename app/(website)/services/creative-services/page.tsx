"use client";
// import { Metadata } from "next"
// import { TopBar } from "@/components/layout/top-bar"
// import { Header } from "@/components/layout/header"
// import { Footer } from "@/components/layout/footer"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { CreativeMarketingBanner } from "@/components/services/banners/creative-banner"
import { useContent } from "@/app/context/ContentContext";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Creative Services | Skymark Digital",
//   description: "Professional graphic design, video editing, UI/UX design, content management, and brand identity services to elevate your brand.",
// }

export default function CreativeServicesPage() {
  const slug = "creative";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  const main = sectionsBySlug[slug]?.["Main"]?.blocks;
  const graphic = sectionsBySlug[slug]?.["Graphic"]?.blocks;
  const video = sectionsBySlug[slug]?.["Video"]?.blocks;
  const ui = sectionsBySlug[slug]?.["UI"]?.blocks;
  const content = sectionsBySlug[slug]?.["Content"]?.blocks;
  const brand = sectionsBySlug[slug]?.["Brand"]?.blocks;
  const cta = sectionsBySlug[slug]?.["CTA"]?.blocks;
  const getUrl = (imageId?: string) =>
    media.find((m) => m.id === imageId)?.mediaUrl || null;

  const services = [
    {
      image: getUrl(graphic?.image1?.imageId) || "/images/services/graphic.jfif",
      title: graphic?.heading1.text,
      description: graphic?.paragraph1.text,
      features: [
        graphic?.heading2?.text,
        graphic?.heading3?.text,
        graphic?.heading4?.text,
        graphic?.heading5?.text,
        graphic?.heading6?.text,
        graphic?.heading7?.text,
      ],
    },
    {
      image: getUrl(video?.image1?.imageId) || "/images/services/video.jpg",
      title: video?.heading1.text,
      description: video?.paragraph1.text,
      features: [
        video?.heading2?.text,
        video?.heading3?.text,
        video?.heading4?.text,
        video?.heading5?.text,
        video?.heading6?.text,
        video?.heading7?.text,
      ],
    },
    {
      image: getUrl(ui?.image1?.imageId) || "/images/services/ui-design.webp",
      title: ui?.heading1.text,
      description: ui?.paragraph1.text,
      features: [
        ui?.heading2?.text,
        ui?.heading3?.text,
        ui?.heading4?.text,
        ui?.heading5?.text,
        ui?.heading6?.text,
        ui?.heading7?.text,
      ],
    },
    {
      image: getUrl(content?.image1?.imageId) || "/images/services/content.webp",
      title: content?.heading1.text,
      description: content?.paragraph1.text,
      features: [
        content?.heading2?.text,
        content?.heading3?.text,
        content?.heading4?.text,
        content?.heading5?.text,
        content?.heading6?.text,
        content?.heading7?.text,
      ],
    },
    {
      image: getUrl(brand?.image1?.imageId) || "/images/services/brand.jpg",
      title: brand?.heading1.text,
      description: brand?.paragraph1.text,
      features: [
        brand?.heading2?.text,
        brand?.heading3?.text,
        brand?.heading4?.text,
        brand?.heading5?.text,
        brand?.heading6?.text,
        brand?.heading7?.text,
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

      <CreativeMarketingBanner />

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
