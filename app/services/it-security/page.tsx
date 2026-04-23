import { Metadata } from "next"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { ITSecurityBanner } from "@/components/services/banners/security-banner"

export const metadata: Metadata = {
  title: "IT & Security Services | Skymark Digital",
  description: "Comprehensive cyber security services, system and network management, and technical consulting to protect and optimize your IT infrastructure.",
}

const services = [
  {
    image: "/images/services/cyber.jpg",
    title: "Cyber Security Services",
    description: "Protect your business from cyber threats with our comprehensive security solutions. We implement robust security measures to safeguard your data, systems, and reputation.",
    features: [
      "Security assessment and auditing",
      "Vulnerability testing and remediation",
      "Firewall and intrusion detection",
      "Data encryption and protection",
      "Security awareness training",
      "Incident response planning",
    ],
  },
  {
    image: "/images/services/network.jpg",
    title: "System & Network Management",
    description: "Keep your IT infrastructure running smoothly with our expert system and network management services. We ensure optimal performance, reliability, and security.",
    features: [
      "Network design and implementation",
      "Server setup and maintenance",
      "Cloud infrastructure management",
      "24/7 monitoring and support",
      "Backup and disaster recovery",
      "Performance optimization",
    ],
  },
  {
    image: "/images/services/hrconsulting.jfif",
    title: "Technical & HR Consulting",
    description: "Get expert guidance on technology decisions and IT staffing. Our consultants help you make informed choices that align with your business objectives.",
    features: [
      "IT strategy and planning",
      "Technology assessment and selection",
      "IT staffing and recruitment",
      "Team training and development",
      "Vendor management",
      "Compliance consulting",
    ],
  },
]

export default function ITSecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
      <ITSecurityBanner />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0ea5e9] font-semibold uppercase tracking-wider text-md">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Enterprise-Grade IT Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From cyber security to network management, we provide comprehensive IT services 
              that protect your assets and optimize your operations.
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
        title="Ready to Secure Your Business?"
        description="Partner with our IT experts to build a secure, reliable, and efficient technology infrastructure."
      />

      <Footer />
    </main>
  )
}
