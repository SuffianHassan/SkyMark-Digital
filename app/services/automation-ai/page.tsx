import { Metadata } from "next"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AutomationBanner } from "@/components/services/banners/automation-banner"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "Automation & AI Solutions | Skymark Digital",
  description: "Transform your business with AI automation solutions, smart operations management, and comprehensive ERP systems.",
}

const services = [
  {
    image: "/images/services/aisolutions.jpg",
    title: "AI Automation Solutions",
    description: "Leverage the power of artificial intelligence to automate repetitive tasks and make data-driven decisions. Our AI solutions help streamline operations and boost productivity.",
    features: [
      "Intelligent process automation (IPA)",
      "Machine learning model development",
      "Natural language processing solutions",
      "Predictive analytics implementation",
      "AI-powered customer service chatbots",
      "Document processing and extraction",
    ],
  },
  {
    image: "/images/services/aioperations.jpg",
    title: "Smart Operations & Management",
    description: "Optimize your business operations with intelligent management systems. We implement smart solutions that enhance efficiency and reduce operational costs.",
    features: [
      "Workflow automation and optimization",
      "Real-time monitoring dashboards",
      "Automated reporting systems",
      "Resource allocation optimization",
      "Quality control automation",
      "Performance analytics and insights",
    ],
  },
  {
    image: "/images/services/aierp.jpg",
    title: "ERP Solutions",
    description: "Integrate all your business processes with comprehensive ERP solutions. We help you select, implement, and customize ERP systems that fit your unique needs.",
    features: [
      "ERP system selection and consulting",
      "Custom ERP implementation",
      "Data migration and integration",
      "Module customization and development",
      "User training and support",
      "Ongoing maintenance and updates",
    ],
  },
]

export default function AutomationAIPage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <AutomationBanner />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0ea5e9] font-semibold uppercase tracking-wider text-md">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Intelligent Automation for Modern Business
            </h2>
            <p className="text-muted-foreground text-lg">
              Embrace the future of business with AI-powered automation solutions that 
              streamline operations, reduce costs, and unlock new opportunities for growth.
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
        title="Ready to Automate Your Business?"
        description="Let our AI experts help you implement smart automation solutions that transform your operations."
      />

      <Footer />
    </main>
  )
}
