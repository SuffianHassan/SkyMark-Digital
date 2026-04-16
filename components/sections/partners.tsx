"use client"

const partners = [
  { name: "Google", logo: "Google" },
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Amazon AWS", logo: "AWS" },
  { name: "Meta", logo: "Meta" },
  { name: "Shopify", logo: "Shopify" },
  { name: "HubSpot", logo: "HubSpot" },
  { name: "Salesforce", logo: "Salesforce" },
  { name: "Adobe", logo: "Adobe" },
]

export function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Digital Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
            Certified Partners & Technology Alliances
          </h2>
        </div>

        {/* Partners Logos */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-6 py-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <span className="text-2xl font-bold text-muted-foreground hover:text-primary transition-colors">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
