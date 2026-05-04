import { Metadata } from "next"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { DevelopmentBanner } from "@/components/services/banners/development-banner"

export const metadata: Metadata = {
  title: "Web Development Services | Skymark Digital",
  description: "Professional website design and development, mobile app development, and custom software solutions for businesses of all sizes.",
}

const services = [
  {
    image: "/images/services/web-development.avif",
    title: "Website Design & Development",
    description: "Create stunning, high-performance websites that captivate visitors and convert them into customers. Our web development team builds responsive, SEO-friendly websites using the latest technologies.",
    features: [
      "Custom responsive web design",
      "E-commerce website development",
      "Content management systems (CMS)",
      "Website redesign and modernization",
      "Landing page development",
      "Website maintenance and support",
    ],
  },
  {
    image: "/images/services/mobile-development.jfif",
    title: "Mobile App Development",
    description: "Bring your ideas to life with custom mobile applications for iOS and Android. We develop user-friendly apps that deliver exceptional experiences and drive engagement.",
    features: [
      "Native iOS and Android development",
      "Cross-platform app development",
      "App UI/UX design",
      "App store optimization",
      "App maintenance and updates",
      "Integration with existing systems",
    ],
  },
  {
    image: "/images/services/e-commerce.jpg", 
    title: "E-Commerce Solutions",
    description: "Launch and scale your online store with powerful, conversion-focused e-commerce solutions. We build secure, fast, and user-friendly platforms that maximize sales and customer experience.",
    features: [
      "Custom e-commerce website development",
      "Shopify, WooCommerce & custom platforms",
      "Secure payment gateway integration",
      "Product & inventory management systems",
      "Shopping cart and checkout optimization",
      "Performance, SEO & conversion optimization",
    ],
  },
  {
    image: "/images/services/custom.png",
    title: "Custom Software Development",
    description: "Get tailored software solutions that address your unique business challenges. Our developers create scalable, secure applications that streamline your operations.",
    features: [
      "Custom web applications",
      "API development and integration",
      "Database design and management",
      "Cloud-based solutions",
      "Legacy system modernization",
      "Quality assurance and testing",
    ],
  },
]

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* <TopBar />
      <Header /> */}

      <DevelopmentBanner />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0ea5e9] font-semibold uppercase tracking-wider text-md">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Full-Stack Development Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From websites to mobile apps to custom software, we deliver comprehensive
              development solutions that drive your business forward.
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
        title="Ready to Build Something Amazing?"
        description="Partner with our development team to create digital solutions that exceed expectations."
      />

      {/* <Footer /> */}
    </main>
  )
}
