import { Metadata } from "next"
import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceBanner } from "@/components/services/service-banner"
import { ServiceSection } from "@/components/services/service-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { 
  Megaphone, 
  Search, 
  Share2, 
  Target, 
  Users, 
  Mail 
} from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Marketing Services | Skymark Digital",
  description: "Comprehensive digital marketing services including SEO, social media marketing, Google & Meta advertising, lead generation, and email marketing.",
}

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Dominate search results with our data-driven SEO strategies. We optimize your website to rank higher on Google and other search engines, driving organic traffic and increasing visibility.",
    features: [
      "Comprehensive keyword research and analysis",
      "On-page and technical SEO optimization",
      "Content strategy and optimization",
      "Link building and authority development",
      "Local SEO for location-based businesses",
      "Regular performance tracking and reporting",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a powerful social media presence that engages your audience and drives results. Our social media experts create compelling content and strategies across all major platforms.",
    features: [
      "Platform-specific content strategies",
      "Community management and engagement",
      "Influencer partnership coordination",
      "Social media advertising campaigns",
      "Brand reputation monitoring",
      "Analytics and performance insights",
    ],
  },
  {
    icon: Target,
    title: "Google & Meta Advertising",
    description: "Maximize your ROI with targeted advertising campaigns on Google and Meta platforms. Our certified experts create and optimize campaigns that deliver measurable results.",
    features: [
      "Google Ads management and optimization",
      "Facebook and Instagram advertising",
      "Audience targeting and segmentation",
      "A/B testing and conversion optimization",
      "Remarketing and retargeting campaigns",
      "Budget management and ROI tracking",
    ],
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Generate high-quality leads that convert into customers. Our lead generation strategies combine multiple channels to create a consistent flow of potential clients.",
    features: [
      "Landing page design and optimization",
      "Lead magnet creation and promotion",
      "Marketing funnel development",
      "Lead scoring and qualification",
      "CRM integration and automation",
      "Conversion rate optimization",
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with strategic email marketing campaigns. We create personalized email sequences that drive engagement and conversions.",
    features: [
      "Email campaign strategy and planning",
      "Newsletter design and copywriting",
      "Marketing automation workflows",
      "List segmentation and personalization",
      "A/B testing and optimization",
      "Deliverability monitoring and improvement",
    ],
  },
]

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
      <ServiceBanner
        title="Digital Marketing"
        description="Drive growth and maximize your online presence with our comprehensive digital marketing solutions tailored to your business needs."
        icon={Megaphone}
        breadcrumb="Digital Marketing"
        gradient="gradient-digital"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0ea5e9] font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From SEO to email marketing, we offer end-to-end digital marketing services 
              that help you reach your target audience and achieve your business goals.
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
        title="Ready to Boost Your Online Presence?"
        description="Let our digital marketing experts create a customized strategy that drives real results for your business."
      />

      <Footer />
    </main>
  )
}
