"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useContent } from "@/app/context/ContentContext"
import test from "node:test"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // 4 seconds

    return () => clearInterval(interval)
  }, [])

  const slug = "home";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, [slug]);

  const testimonis = sectionsBySlug[slug]?.["Testimonial"]?.blocks;
  const getUrl = (imageId?: string) =>
    media.find((m) => m.id === imageId)?.mediaUrl || null;

  const testimonials = [
  {
    name: testimonis?.heading3?.text,
    role: testimonis?.heading4?.text,
    image: getUrl(testimonis?.image1?.imageId),
    content: testimonis?.paragraph2?.text,
    rating: 5,
  },
  {
    name: testimonis?.heading5?.text,
    role: testimonis?.heading6?.text,
    image: getUrl(testimonis?.image2?.imageId),
    content: testimonis?.paragraph3?.text,
    rating: 5,
  },
  {
    name: testimonis?.heading7?.text,
    role: testimonis?.heading8?.text,
    image: getUrl(testimonis?.image3?.imageId),
    content: testimonis?.paragraph4?.text,
    rating: 4,
  },
  {
    name: testimonis?.heading9?.text,
    // role: testimonis?.heading8?.text,
    image: getUrl(testimonis?.image5?.imageId),
    content: testimonis?.paragraph5?.text,
    rating: 4,
  },
  {
    name: testimonis?.heading10?.text,
    // role: testimonis?.heading8?.text,
    image: getUrl(testimonis?.image6?.imageId),
    content: testimonis?.paragraph6?.text,
    rating: 4,
  },
]

   if (loading && !sectionsBySlug[slug]) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          // src="/images/testimonis.jpg" // 👈 add your image here
          src={getUrl(testimonis?.image4?.imageId) || "/images/testimonis.jpg"}
          alt="background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#fab925]/40 to-[#fa353e]/50" />
      {/* <div className="container mx-auto px-4"> */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-md">
            {testimonis?.heading1?.text}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-3 text-balance">
            {testimonis?.heading2?.text}
          </h2>
          <p className="text-foreground text-lg">
            {testimonis?.paragraph1?.text}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
            <Quote className="h-8 w-8 text-primary/50" />

            <div className="min-h-[250px]">
              <p className="text-md md:text-md text-foreground leading-relaxed mb-8">
                {testimonials[currentIndex].content}
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary/50">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt="Reviewer Image"
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
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-primary/20"
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
