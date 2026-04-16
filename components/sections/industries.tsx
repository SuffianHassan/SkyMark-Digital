"use client"

import { 
  Building2, 
  UtensilsCrossed, 
  Heart, 
  Car, 
  ShoppingCart,
  GraduationCap
} from "lucide-react"

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description: "Digital solutions for property listings, virtual tours, and lead generation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Online ordering systems, menu management, and social media marketing.",
  },
  {
    icon: Heart,
    title: "Dental Clinics",
    description: "Patient management systems, appointment booking, and healthcare marketing.",
  },
  {
    icon: GraduationCap,
    title: "Driving Schools",
    description: "Student registration systems, scheduling software, and local SEO.",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Inventory management, dealership websites, and digital advertising.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Online store development, payment integration, and conversion optimization.",
  },
]

export function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Tailored Solutions for Every Industry
          </h2>
          <p className="text-muted-foreground text-lg">
            We understand that every industry has unique challenges. Our specialized solutions 
            are designed to address the specific needs of various sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-2xl" />
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <industry.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {industry.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
