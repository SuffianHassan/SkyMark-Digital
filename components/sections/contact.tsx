"use client";

import { useContent } from "@/app/context/ContentContext";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export function Contact() {
  const slug = "home";
  const { sectionsBySlug, loadSectionsBySlug, loading, media } =
    useContent();

  useEffect(() => {
    loadSectionsBySlug(slug);
  }, []);

  const contact = sectionsBySlug[slug]?.["Contact"]?.blocks;

  const getUrl = (imageId?: string) =>
    media.find((m) => m.id === imageId)?.mediaUrl || null;

  if (loading && !sectionsBySlug[slug]) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-white"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Dots */}
        <div className="absolute w-2 h-2 bg-sky-400/30 rounded-full top-[10%] left-[15%] animate-pulse" />
        <div className="absolute w-2 h-2 bg-sky-400/20 rounded-full top-[35%] left-[20%] animate-pulse" />
        <div className="absolute w-2 h-2 bg-sky-400/25 rounded-full top-[50%] left-[50%] animate-pulse" />
        <div className="absolute w-2 h-2 bg-sky-400/20 rounded-full top-[55%] left-[70%] animate-pulse" />
        <div className="absolute w-2 h-2 bg-sky-400/20 rounded-full top-[60%] left-[10%] animate-pulse" />
        <div className="absolute w-2 h-2 bg-sky-400/20 rounded-full top-[15%] left-[60%] animate-pulse" />

        {/* Gradient Blobs */}
        <div className="absolute w-72 h-72 bg-sky-400/10 blur-3xl rounded-full -top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-cyan-300/10 blur-3xl rounded-full bottom-0 right-0" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Contact Us
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              {contact?.heading1?.text}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8">
              {contact?.paragraph1?.text}
            </p>

            {/* INFO ROWS */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                  <Phone className="text-sky-600" size={18} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[2px] text-gray-400 mb-1">
                    {contact?.heading2?.text}
                  </p>

                  <p className="text-lg font-semibold text-gray-800">
                    {contact?.heading3?.text}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                  <MapPin className="text-sky-600" size={18} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[2px] text-gray-400 mb-1">
                    {contact?.heading4?.text}
                  </p>

                  <p className="text-lg font-semibold text-gray-800">
                    {contact?.heading5?.text}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                  <Clock className="text-sky-600" size={18} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[2px] text-gray-400 mb-1">
                    {contact?.heading6?.text}
                  </p>

                  <p className="text-lg font-semibold text-gray-800">
                    {contact?.heading7?.text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-sky-400/20 blur-3xl"></div>

            {/* Image Ring */}
            <div className="absolute w-[380px] h-[380px] rounded-full border border-sky-200 animate-spin-slow"></div>

            {/* Main Image */}
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-[10px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <img
                src={
                  getUrl(contact?.image1?.imageId) ||
                  "/images/contact.jpg"
                }
                alt="office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CONTACT INFO CARDS */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="grid md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div
              className="
              group
              relative
              rounded-[28px]
              border border-sky-100
              bg-gradient-to-br from-white via-sky-50 to-white
              p-8
              overflow-hidden
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_15px_50px_rgba(14,165,233,0.10)]
            "
            >
              {/* Background Gradient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/30 blur-3xl rounded-full"></div>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-sm border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <Phone className="text-sky-600" size={22} />
              </div>

              {/* Label */}
              <p className="relative z-10 text-[11px] uppercase tracking-[3px] text-slate-400 mb-3">
                {contact?.heading8?.text}
              </p>

              {/* Main Content */}
              <h3 className="relative z-10 text-xl font-bold text-slate-900 leading-snug">
                {contact?.heading9?.text}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-500 mt-4 leading-relaxed text-[15px]">
                {contact?.paragraph2?.text}
              </p>

              {/* Hover Bottom Line */}
              <div className="absolute left-0 bottom-0 h-[3px] w-0 bg-sky-500 transition-all duration-500 group-hover:w-full"></div>
            </div>

            {/* CARD 2 */}
            <div
              className="
              group
              relative
              rounded-[28px]
              border border-sky-100
              bg-gradient-to-br from-white via-sky-50 to-white
              p-8
              overflow-hidden
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_15px_50px_rgba(14,165,233,0.10)]
            "
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/30 blur-3xl rounded-full"></div>

              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-sm border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <MapPin className="text-sky-600" size={22} />
              </div>

              <p className="relative z-10 text-[11px] uppercase tracking-[3px] text-slate-400 mb-3">
                {contact?.heading10?.text}
              </p>

              <h3 className="relative z-10 text-xl font-bold text-slate-900 leading-snug">
                {contact?.heading11?.text}
              </h3>

              <p className="relative z-10 text-slate-500 mt-4 leading-relaxed text-[15px]">
                {contact?.paragraph3?.text}
              </p>

              <div className="absolute left-0 bottom-0 h-[3px] w-0 bg-sky-500 transition-all duration-500 group-hover:w-full"></div>
            </div>

            {/* CARD 3 */}
            <div
              className="
              group
              relative
              rounded-[28px]
              border border-sky-100
              bg-gradient-to-br from-white via-sky-50 to-white
              p-8
              overflow-hidden
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_15px_50px_rgba(14,165,233,0.10)]
            "
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/30 blur-3xl rounded-full"></div>

              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-sm border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <Clock className="text-sky-600" size={22} />
              </div>

              <p className="relative z-10 text-[11px] uppercase tracking-[3px] text-slate-400 mb-3">
                {contact?.heading12?.text}
              </p>

              <h3 className="relative z-10 text-xl font-bold text-slate-900 leading-snug">
                {contact?.heading13?.text}
              </h3>

              <p className="relative z-10 text-slate-500 mt-4 leading-relaxed text-[15px]">
                {contact?.paragraph4?.text}
              </p>

              <div className="absolute left-0 bottom-0 h-[3px] w-0 bg-sky-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}