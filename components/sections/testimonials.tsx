"use client"

import { useState } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "CEO, TechStart Inc.",
    image: "/images/testimonials/jennifer.jpg",
    content: "Skymark Digital transformed our online presence completely. Their SEO and digital marketing strategies helped us increase our organic traffic by 300% in just 6 months. Highly recommended!",
    rating: 5,
  },
  {
    name: "Robert Thompson",
    role: "Founder, GreenLeaf Restaurants",
    image: "/images/testimonials/robert.jpg",
    content: "The web development team at Skymark created an amazing online ordering system for our restaurant chain. Customer orders have increased by 150% since launch. Outstanding work!",
    rating: 5,
  },
  {
    name: "Amanda Lee",
    role: "Marketing Director, Urban Realty",
    image: "/images/testimonials/amanda.jpg",
    content: "Their AI automation solutions have streamlined our lead generation process incredibly. We&apos;ve reduced manual work by 70% while doubling our qualified leads. A game-changer for our business!",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CTO, SecureNet Solutions",
    image: "/images/testimonials/david.jpg",
    content: "The cybersecurity audit and implementation by Skymark Digital gave us peace of mind. Their team is professional, knowledgeable, and truly understands enterprise security needs.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Dont just take our word for it. Here&apos;s what our clients have to say about 
            working with Skymark Digital.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
            <Quote className="h-12 w-12 text-primary/20 mb-6" />
            
            <div className="min-h-[200px]">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                {testimonials[currentIndex].content}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary/10">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-primary/20"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
