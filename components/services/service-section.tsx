"use client";

import Image from "next/image"
import { CheckCircle } from "lucide-react"

interface ServiceSectionProps {
  title: string
  description: string
  image: string
  thumbnail?: string
  features: string[]
  reversed?: boolean
}

export function ServiceSection({
  title,
  description,
  image,
  thumbnail,
  features,
  reversed = false,
}: ServiceSectionProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* TEXT SIDE */}
      <div className={reversed ? "lg:order-2" : ""}>

        {/* SMALL IMAGE / ICON */}
        {thumbnail && (
          <div className="w-14 h-14 mb-6 relative">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        )}

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-[#0ea5e9] mt-1" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE SIDE */}
      <div className={`relative ${reversed ? "lg:order-1" : ""}`}>

        {/* GLOW */}
        <div className="absolute inset-0 bg-[#0ea5e9]/20 blur-3xl rounded-2xl opacity-30" />

        {/* IMAGE */}
        <div className="relative aspect-video rounded-2xl overflow-hidden group">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#021c2b]/40 to-transparent" />
        </div>

        {/* DECORATIVE BLOCKS */}
        <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#0ea5e9]/10 rounded-xl -z-10" />
        <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#0ea5e9]/10 rounded-xl -z-10" />
      </div>

    </div>
  )
}