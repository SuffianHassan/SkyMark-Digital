// "use client"

// import Link from "next/link"
// import { Megaphone, TrendingUp, Users, ChevronRight } from "lucide-react"

// export function DigitalMarketingBanner() {
//   return (
//     <section className="relative overflow-hidden">

//       {/* BACKGROUND SPLIT */}
//       {/* <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
//         <div className="bg-white"></div>
//         <div className="bg-[#f59e0b]"></div>
//       </div> */}
//       <div className="absolute inset-0 bg-white" />
//       {/* WAVE DIVIDER */}
//       <div className="absolute inset-0 pointer-events-none">
//         <svg
//           className="absolute bottom-0 left-0 w-full wave-animate"
//           style={{ height: "clamp(60px, 10vw, 140px)" }}
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//         >
//           <path
//             className="wave-shadow"
//             fill="#ffffff"
//             fillOpacity="0.95"
//             d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,181.3C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64V320H0Z"
//           />
//         </svg>
//       </div>

//       {/* DECORATIVE SHAPES */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-10 left-10 w-32 h-32 bg-[#f59e0b]/20 rounded-full blur-2xl" />
//         <div className="absolute bottom-10 right-10 w-40 h-40 bg-black/10 rounded-full blur-2xl" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-24 lg:py-32 grid lg:grid-cols-2 items-center gap-12">

//         {/* LEFT CONTENT */}
//         <div>

//           {/* Breadcrumb */}
//           <nav className="flex items-center gap-2 text-gray-500 text-sm mb-8">
//             <Link href="/">Home</Link>
//             <ChevronRight className="h-4 w-4" />
//             <Link href="/#services">Services</Link>
//             <ChevronRight className="h-4 w-4" />
//             <span className="text-gray-800 font-medium">Digital Marketing</span>
//           </nav>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             Grow Your Brand with<br />
//             <span className="text-[#f59e0b]">Digital Marketing</span>
//           </h1>

//           <p className="text-gray-600 text-lg mb-10 max-w-xl">
//             Drive traffic, generate leads, and boost conversions with 
//             data-driven marketing strategies tailored for your business.
//           </p>

//           {/* FEATURES */}
//           <div className="flex flex-wrap gap-8">

//             <div className="flex items-center gap-3 group">
//               <div className="p-3 rounded-xl bg-[#f59e0b]/10 group-hover:bg-[#f59e0b]/20 transition">
//                 <Megaphone className="w-5 h-5 text-[#f59e0b]" />
//               </div>
//               <span className="text-sm text-gray-700">Campaign Strategy</span>
//             </div>

//             <div className="flex items-center gap-3 group">
//               <div className="p-3 rounded-xl bg-[#f59e0b]/10 group-hover:bg-[#f59e0b]/20 transition">
//                 <TrendingUp className="w-5 h-5 text-[#f59e0b]" />
//               </div>
//               <span className="text-sm text-gray-700">Growth Marketing</span>
//             </div>

//             <div className="flex items-center gap-3 group">
//               <div className="p-3 rounded-xl bg-[#f59e0b]/10 group-hover:bg-[#f59e0b]/20 transition">
//                 <Users className="w-5 h-5 text-[#f59e0b]" />
//               </div>
//               <span className="text-sm text-gray-700">Audience Targeting</span>
//             </div>

//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center lg:justify-end">

//           {/* CIRCLE BACKGROUND */}
//           <div className="absolute w-[420px] h-[420px] bg-white rounded-full shadow-4xl" />

//           {/* IMAGE */}
//           <div className="relative w-[410px] h-[410px] rounded-full overflow-hidden border-8 border-white shadow-xl">
//             <img
//               src="/images/banners/marketing-person.jpg" // replace image
//               alt="Marketing"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* SMALL FLOATING DOTS */}
//           <div className="absolute top-0 right-10 w-3 h-3 bg-black rounded-full" />
//           <div className="absolute bottom-10 left-10 w-2 h-2 bg-black rounded-full" />

//         </div>

//       </div>
//     </section>
//   )
// }
"use client"

import Link from "next/link"
import { Megaphone, TrendingUp, Users, ChevronRight } from "lucide-react"

export function DigitalMarketingBanner() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#f59e0b]/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-black/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 
                      pt-24 pb-20 
                      md:pt-32 md:pb-24 
                      lg:pt-40 lg:pb-32 
                      grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-8 mt-4 md:mt-0">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/#services" className="hover:text-black transition">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-800 font-medium">Digital Marketing</span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                         font-bold text-gray-900 mb-6 leading-tight">
            Grow Your Brand with<br />
            <span className="text-[#f59e0b]">Digital Marketing</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
            Drive traffic, generate leads, and boost conversions with 
            data-driven marketing strategies tailored for your business.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-6 sm:gap-8">

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-[#f59e0b]/10 group-hover:bg-[#f59e0b]/20 transition duration-300">
                <Megaphone className="w-5 h-5 text-[#f59e0b] group-hover:rotate-12 transition" />
              </div>
              <span className="text-xs sm:text-sm text-gray-700">Campaign Strategy</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-[#f59e0b]/10 group-hover:bg-[#f59e0b]/20 transition duration-300">
                <TrendingUp className="w-5 h-5 text-[#f59e0b] group-hover:-translate-y-1 transition" />
              </div>
              <span className="text-xs sm:text-sm text-gray-700">Growth Marketing</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-3 rounded-xl bg-[#f59e0b]/10 group-hover:bg-[#f59e0b]/20 transition duration-300">
                <Users className="w-5 h-5 text-[#f59e0b] group-hover:scale-110 transition" />
              </div>
              <span className="text-xs sm:text-sm text-gray-700">Audience Targeting</span>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">

          {/* BACK CIRCLE (responsive) */}
          <div className="absolute 
                          w-[260px] h-[260px] 
                          sm:w-[320px] sm:h-[320px] 
                          md:w-[380px] md:h-[380px] 
                          lg:w-[420px] lg:h-[420px] 
                          bg-white rounded-full shadow-2xl" />

          {/* IMAGE */}
          <div className="relative 
                          w-[240px] h-[240px] 
                          sm:w-[300px] sm:h-[300px] 
                          md:w-[360px] md:h-[360px] 
                          lg:w-[400px] lg:h-[400px] 
                          rounded-full overflow-hidden border-8 border-white shadow-xl">
            <img
              src="/images/banners/marketing-person.jpg"
              alt="Marketing"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* FLOATING DOTS */}
          <div className="absolute top-0 right-10 w-3 h-3 bg-black rounded-full animate-pulse" />
          <div className="absolute bottom-10 left-10 w-2 h-2 bg-black rounded-full animate-pulse" />

        </div>
      </div>

      {/* WAVE DIVIDER (FIXED POSITION) */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        style={{ height: "clamp(60px, 10vw, 140px)" }}
        viewBox="0 0 1440 350"
        preserveAspectRatio="none"
      >
        {/* <path
          className="wave-shadow"
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,181.3C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64V320H0Z"
        /> */}
        <path
  className="wave-shadow"
  fill="#fbbf29"   // 👈 light gray instead of pure white
  fillOpacity="1"
  d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,181.3C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64V320H0Z"
/>
      </svg>
    </section>
  )
}