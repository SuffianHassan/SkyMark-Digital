import { Metadata } from "next"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { CreativeMarketingBanner } from "@/components/services/banners/creative-banner"

export const metadata: Metadata = {
  title: "Creative Services | Skymark Digital",
  description: "Professional graphic design, video editing, UI/UX design, content management, and brand identity services to elevate your brand.",
}

const services = [
  {
    image: "/images/services/graphic.jfif",
    title: "Graphic Designing",
    description: "Make a lasting impression with stunning visual designs. Our creative team crafts compelling graphics that communicate your message effectively and strengthen your brand identity.",
    features: [
      "Marketing collateral design",
      "Social media graphics",
      "Print design (brochures, flyers, posters)",
      "Infographics and data visualization",
      "Packaging design",
      "Presentation design",
    ],
  },
  {
    image: "/images/services/video.jpg",
    title: "Professional Video Editing",
    description: "Transform raw footage into captivating stories. Our video editors create polished, professional videos that engage your audience and deliver your message with impact.",
    features: [
      "Corporate video production",
      "Promotional and marketing videos",
      "Social media video content",
      "Motion graphics and animation",
      "Video post-production",
      "YouTube channel management",
    ],
  },
  {
    image: "/images/services/ui-design.webp",
    title: "UI/UX Designing",
    description: "Create intuitive, user-centered digital experiences. Our UI/UX designers combine aesthetics with functionality to deliver interfaces that users love.",
    features: [
      "User research and analysis",
      "Wireframing and prototyping",
      "Interface design",
      "Usability testing",
      "Design systems creation",
      "Responsive design",
    ],
  },
  {
    image: "/images/services/content.webp",
    title: "Content Management",
    description: "Keep your content fresh, relevant, and engaging. Our content management services ensure your digital presence stays current and continues to attract your target audience.",
    features: [
      "Content strategy development",
      "Blog writing and management",
      "Website content updates",
      "Content calendar planning",
      "SEO content optimization",
      "Content performance analytics",
    ],
  },
  {
    image: "/images/services/brand.jpg",
    title: "Brand Identity & Branding",
    description: "Build a powerful brand that resonates with your audience. We create cohesive brand identities that differentiate you from competitors and build lasting connections.",
    features: [
      "Logo design and development",
      "Brand strategy and positioning",
      "Brand guidelines creation",
      "Visual identity system",
      "Brand messaging and voice",
      "Brand refresh and rebranding",
    ],
  },
]

export default function CreativeServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
      <CreativeMarketingBanner />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0ea5e9] font-semibold uppercase tracking-wider text-sm">
              Our Creative Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Design That Makes an Impact
            </h2>
            <p className="text-muted-foreground text-lg">
              From graphic design to brand identity, we offer creative services that 
              help your business stand out and connect with your audience.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceSection
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready to Transform Your Brand?"
        description="Let our creative team help you build a visual identity that captures attention and drives results."
      />

      <Footer />
    </main>
  )
}
