import { Metadata } from "next"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceBanner } from "@/components/services/service-banner"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
// import { 
//   Bot, 
//   Cpu, 
//   Settings, 
//   Database 
// } from "lucide-react"

export const metadata: Metadata = {
  title: "Automation & AI Solutions | Skymark Digital",
  description: "Transform your business with AI automation solutions, smart operations management, and comprehensive ERP systems.",
}

const services = [
  {
    icon: "cpu",
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
    icon: "settings",
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
    icon: "database",
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
      
      <ServiceBanner
        title="Automation & AI"
        description="Transform your business operations with cutting-edge AI automation solutions that drive efficiency and innovation."
        icon="bot"
        breadcrumb="Automation & AI"
        gradient="gradient-automation"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0ea5e9] font-semibold uppercase tracking-wider text-sm">
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
                icon={service.icon}
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
