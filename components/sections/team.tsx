"use client"

import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Michael Chen",
    role: "CEO & Founder",
    image: "/images/team/michael.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Marketing",
    image: "/images/team/sarah.jpg",
  },
  {
    name: "David Williams",
    role: "Lead Developer",
    image: "/images/team/david.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    image: "/images/team/emily.jpg",
  },
]

export function Team() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Meet Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            The Experts Behind Your Success
          </h2>
          <p className="text-muted-foreground text-lg">
            Our diverse team of professionals brings together expertise from various domains 
            to deliver exceptional results for every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden bg-secondary aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
