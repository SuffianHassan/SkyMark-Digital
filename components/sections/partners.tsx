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
  // { logo: "/images/logos/unknown.png" },
  { logo: "/images/logos/gwg.jpg" },
]

// duplicate for seamless loop
const loopPartners = [...partners, ...partners]

export function Partners() {
  return (
    <section className="py-10 bg-gradient-to-b from-slate-900 to-sky-300 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-primary font-semibold uppercase tracking-wider text-2xl">
            Trusted By Leading Brands
          </span>
          {/* <h2 className="text-3xl md:text-4xl font-bold ">
            Trusted by Leading Brands
          </h2> */}
        </div>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-slide">

            {loopPartners.map((partner, index) => (
              <div key={index} className="px-4">
              <div
                // key={index}
                className="w-32 h-32 flex-shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-md"
              >
                <div className="relative w-24 h-20 opacity-70 hover:opacity-100 transition">
                  <Image
                    src={partner.logo}
                    alt="partner logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}