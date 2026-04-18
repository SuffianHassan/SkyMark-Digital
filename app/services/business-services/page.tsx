import { Metadata } from "next"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceBanner } from "@/components/services/banners/automation-banner"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { 
  Briefcase, 
  ShoppingBag, 
  Calculator, 
  Users 
} from "lucide-react"

export const metadata: Metadata = {
  title: "Business Services | Skymark Digital",
  description: "Professional business services including Amazon store setup, accounting & bookkeeping, and HR consulting to support your business growth.",
}

const services = [
  {
    icon: ShoppingBag,
    title: "Amazon Store Setup",
    description: "Launch and grow your Amazon business with our comprehensive store setup and management services. We help you navigate the Amazon marketplace and maximize your sales potential.",
    features: [
      "Seller account setup and verification",
      "Product listing optimization",
      "A+ Content creation",
      "Inventory management setup",
      "Amazon PPC advertising",
      "Performance monitoring and reporting",
    ],
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description: "Keep your finances in order with our professional accounting and bookkeeping services. We provide accurate, timely financial management so you can focus on growing your business.",
    features: [
      "Monthly bookkeeping services",
      "Financial statement preparation",
      "Accounts payable/receivable management",
      "Bank reconciliation",
      "Tax preparation support",
      "Financial reporting and analysis",
    ],
  },
  {
    icon: Users,
    title: "HR Consulting",
    description: "Build and manage a high-performing team with our HR consulting services. We help you attract, develop, and retain top talent while ensuring compliance with regulations.",
    features: [
      "Recruitment and hiring support",
      "Employee handbook development",
      "Performance management systems",
      "Compensation and benefits planning",
      "HR policy development",
      "Employee relations consulting",
    ],
  },
]

export default function BusinessServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
      <ServiceBanner
        title="Business Services"
        description="Streamline your operations with our comprehensive business services designed to support your growth and success."
        icon={Briefcase}
        breadcrumb="Business Services"
        gradient="gradient-business"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0ea5e9] font-semibold uppercase tracking-wider text-sm">
              Our Business Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Support Services for Business Success
            </h2>
            <p className="text-muted-foreground text-lg">
              From e-commerce to accounting to HR, we provide essential business services 
              that help you operate efficiently and scale effectively.
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
        title="Ready to Optimize Your Business Operations?"
        description="Partner with us to streamline your processes and focus on what matters most—growing your business."
      />

      <Footer />
    </main>
  )
}
