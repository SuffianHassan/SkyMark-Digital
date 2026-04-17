"use client"

import Image from "next/image"
import { Linkedin, Twitter, Check } from "lucide-react"

const team = [
  {
    name: "Emad H.Qazi",
    role: "CEO & Founder",
    image: "/images/emad.jpeg",
  },
  {
    name: "Aavish Rabbani",
    role: "VP - Creative Head",
    image: "/images/aavish.jpeg",
  },
  {
    name: "Syed Saad Shah",
    role: "Head of Design & Tech",
    image: "/images/saad.jpeg",
  },
  {
    name: "Suleman Bhatti",
    role: "Marketing Head",
    image: "/images/suleman.jpeg",
  },
]

const highlights = [
  "15+ years of industry experience",
  "Agile development methodology",
  "Post-launch support & maintenance",
  "Certified cloud & security professionals",
  "Transparent communication & reporting",
  "100% client data confidentiality",
]

export function Team() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top: About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative w-full h-[350px] sm:h-[420px] lg:h-[500px]">

          {/* Center Main Image */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative w-[80%] h-[70%] rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-500 shadow-[0_0_80px_rgba(21,157,241,0.35)]">
              <Image
                src="/images/team.webp"
                alt="Main"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-[#159df1]/25 via-transparent to-[#159df1]/10" />
              {/* Brand Glow */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl" />
            </div>
          </div>


          {/* Left Middle Card */}
          <div className="hidden sm:block absolute top-2/3 -left-6 -translate-y-1/2 w-40 h-28 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:-translate-x-2 transition duration-300 z-20">
            <Image src="/images/communication.jpg" alt="" fill className="object-cover" />
          </div>


          {/* Top Right Card */}
          <div className="hidden sm:block absolute top-4 right-1 w-44 h-28 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition duration-300 z-20">
            <Image src="/images/experience.jpg" alt="" fill className="object-cover" />
          </div>

          {/* Bottom Right Card */}
          <div className="hidden sm:block absolute bottom-3 right-1 w-44 h-28 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:translate-y-2 transition duration-300 z-20">
            <Image src="/images/data.jpg" alt="" fill className="object-cover" />
          </div>

          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Empowering Businesses Through Technology
            </h2>

            <p className="text-muted-foreground mb-6">
              Skymark Digital is a full-service IT solutions and digital marketing agency
              dedicated to helping businesses thrive in the digital landscape. We partner
              with startups, SMEs, and enterprises globally.
            </p>

            <p className="text-muted-foreground mb-8">
              Our mission is to bridge the gap between technology and business success
              through long-term partnerships.
            </p>

            
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border bg-white/60 backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Team */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Meet Our Team
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            The Experts Behind Your Success
          </h3>
          <p className="text-muted-foreground">
            A passionate team delivering innovation, strategy, and execution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group text-center">

              {/* IMAGE CARD */}
              <div className="relative mb-5 rounded-2xl p-[1px] bg-gradient-to-r from-sky-400/30 via-transparent to-sky-400/30">
                <div className="relative aspect-square rounded-2xl overflow-hidden group">

                  {/* Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Social Icons */}
                  <div className="absolute inset-0 flex items-end justify-center pb-6">
                    <div className="flex gap-3 translate-y-4 opacity-0 
                                    group-hover:opacity-100 group-hover:translate-y-0 
                                    transition-all duration-500">

                      <a className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center 
                                    text-primary hover:bg-primary hover:text-white transition">
                        <Linkedin size={18} />
                      </a>
                      <a className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center 
                                    text-primary hover:bg-primary hover:text-white transition">
                        <Twitter size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* INFO */}
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-primary text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}