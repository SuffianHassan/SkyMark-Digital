"use client"

import { CheckCircle, Cpu, Database, Settings } from "lucide-react"
// import type { LucideIcon } from "lucide-react"

interface ServiceSectionProps {
  title: string
  description: string
  icon: "cpu" | "settings" | "database"
  features: string[]
  reversed?: boolean
}

const iconMap = {
  cpu: Cpu,
  settings: Settings,
  database: Database,
}


export function ServiceSection({ title, description, icon, features, reversed = false }: ServiceSectionProps) {
  const Icon = iconMap[icon]
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="inline-flex items-center justify-center w-14 h-14 bg-sky-500/10 rounded-xl mb-6">
          <Icon className="h-7 w-7 text-[#0ea5e9]" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`relative ${reversed ? "lg:order-1" : ""}`}>
        <div className="aspect-video rounded-2xl bg-secondary overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-sky-500/5 to-amber-500/5 flex items-center justify-center">
            <Icon className="h-24 w-24 text-sky-500/20" />
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sky-500/10 rounded-xl -z-10" />
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-500/10 rounded-xl -z-10" />
      </div>
    </div>
  )
}
