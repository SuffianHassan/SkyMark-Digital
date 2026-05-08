"use client"

import { useEffect, useRef, useState } from "react"
import {
  Building2,
  UtensilsCrossed,
  Heart,
  Car,
  ShoppingCart,
  GraduationCap,
  CarIcon,
  Building,
  HeartPlus,
  School,
} from "lucide-react"
import Link from "next/link"
import { Inter_Tight } from "next/font/google"
import { useContent } from "@/app/context/ContentContext"


const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
})

export function Industries() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const slug = "home";

  const { sectionsBySlug, loadSectionsBySlug, loading, media } = useContent();

  // ✅ FIRST EFFECT
  useEffect(() => {
    loadSectionsBySlug(slug);
  }, []);

  // ✅ DATA AFTER HOOKS
  const industry = sectionsBySlug?.[slug]?.["Industries"]?.blocks;

  const industries = [
    { icon: Building2, title: industry?.heading2?.text, desc: industry?.heading3?.text },
    { icon: Building, title: industry?.heading4?.text, desc: industry?.heading5?.text },
    { icon: UtensilsCrossed, title: industry?.heading6?.text, desc: industry?.heading7?.text },
    { icon: Heart, title: industry?.heading8?.text, desc: industry?.heading9?.text },
    { icon: CarIcon, title: industry?.heading10?.text, desc: industry?.heading11?.text },
    { icon: Car, title: industry?.heading12?.text, desc: industry?.heading13?.text },
    { icon: HeartPlus, title: industry?.heading14?.text, desc: industry?.heading15?.text },
    { icon: School, title: industry?.heading16?.text, desc: industry?.heading17?.text },
    { icon: ShoppingCart, title: industry?.heading18?.text, desc: industry?.heading19?.text },
  ];

  // ✅ SECOND EFFECT
useEffect(() => {
  const slider = sliderRef.current;

  if (!slider || !industry) return;

  let pos = 0;
  let animationFrame: number;

  const animate = () => {
    if (!paused) {
      pos += 0.5;

      slider.style.transform = `translateY(-${pos}px)`;

      // use scrollHeight AFTER content exists
      const maxScroll = slider.scrollHeight / 2;

      if (pos >= maxScroll) {
        pos = 0;
      }
    }

    animationFrame = requestAnimationFrame(animate);
  };

  // small delay ensures DOM is painted
  const timeout = setTimeout(() => {
    animationFrame = requestAnimationFrame(animate);
  }, 100);

  return () => {
    clearTimeout(timeout);
    cancelAnimationFrame(animationFrame);
  };
}, [paused, industry]);


  // ✅ CONDITIONAL RETURN AFTER HOOKS
  if (loading && !sectionsBySlug[slug]) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }
  
  return (
    <section className="relative py-20 md:py-28 lg:py-28 bg-gradient-to-r from-sky-500 via-white to-sky-400 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

        <div className="order-1 lg:hidden text-center mb-10">
          <h2 className="text-3xl font-bold tracking-[0.3em] text-transparent bg-gradient-to-r from-[#fab925] to-[#c40d40] bg-clip-text">
            SKYMARK DIGITAL
          </h2>
        </div>
        {/* LEFT → SLIDER */}
        <div
          className="order-2 lg:order-1 relative h-[300px] sm:h-[360px] md:h-[560px] overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Fade top/bottom */}
          <div className="absolute top-0 left-0 w-full h-24 md:h-28 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-28 bg-gradient-to-t from-white to-transparent z-10" />

          <div ref={sliderRef} className="flex flex-col gap-5">
            {[...industries, ...industries].map((item, i) => (
              <div
                key={i}
                className="bg-[#f3f4f6] border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fe9a00]">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:order-2 lg:flex items-center justify-center">
          <div className="text-center rotate-90 whitespace-nowrap leading-[1.2]">
            <span className="block text-8xl font-bold text-transparent stroke-text tracking-[0.2em]">
              Skymark
            </span>
            <span className="block text-8xl font-bold text-transparent stroke-text tracking-[0.2em] mt-2">
              Digital
            </span>
          </div>
        </div>

        {/* RIGHT → CONTENT */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {industry?.heading1.text}
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {industry?.paragraph1.text}
          </p>
          <Link href="/#contact">
            <button className="bg-[#fe9a00] px-6 py-3 rounded-full shadow-md hover:scale-105 transition-all">
              Let’s Talk →
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}