"use client"

import Image from "next/image"

const partners = [
  { logo: "/images/logos/arif.png" },
  { logo: "/images/logos/gdc.png" },
  { logo: "/images/logos/emad.png" },
  { logo: "/images/logos/road.png" },
  { logo: "/images/logos/hamza.jpeg" },
  { logo: "/images/logos/salman.png" },
  { logo: "/images/logos/sf.png" },
  { logo: "/images/logos/st.png" },
  { logo: "/images/logos/unknown.png" },
  { logo: "/images/logos/gwg.png" },
]

export function Partners() {
  return (
   <section className="py-20 bg-gradient-to-b bg-gradient-to-b from-slate-400 to-sky-100">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-md">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Trusted by Leading Brands
          </h2>
        </div>

        {/* Cards Layout */}
        <div className="relative flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">

          {partners.map((partner, index) => (
            <div
              key={index}
              className={`
                w-32 h-32 md:w-36 md:h-36
                bg-white rounded-2xl
                flex items-center justify-center
                shadow-md
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-2
                hover:shadow-[0_10px_30px_rgba(250,190,41,0.35)]
                hover:ring-2 hover:ring-[#fabe29]/50
                border border-[#fabe29]/50
                group
                ${getOffsetClass(index)}
              `}
            >
              <div className="relative w-30 h-20 md:w-33 md:h-24 opacity-70 group-hover:opacity-100 transition duration-300">
                <Image
                  src={partner.logo}
                  alt="partner logo"
                  fill
                  className="object-contain group-hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

/**
 * Adds slight random/staggered positioning like the reference image
 */
function getOffsetClass(index: number) {
  const offsets = [
    "translate-y-0",
    "translate-y-4",
    "-translate-y-4",
    "translate-y-6",
    "-translate-y-6",
    "translate-y-2",
    "-translate-y-2",
    "translate-y-8",
  ]

  return offsets[index % offsets.length]
}