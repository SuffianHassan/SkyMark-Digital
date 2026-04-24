"use client"

import { Phone, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute w-2 h-2 bg-[#0ea5e9]/30 rounded-full top-[10%] left-[15%] float-fast" style={{ animationDelay: "2s" }} />
        <div className="absolute w-2 h-2 bg-[#0ea5e9]/20 rounded-full top-[25%] left-[70%] float-fast" style={{ animationDelay: "2s" }} />
        <div className="absolute w-2 h-2 bg-[#0ea5e9]/25 rounded-full top-[60%] left-[20%] float-fast" style={{ animationDelay: "2s" }} />
        <div className="absolute w-2 h-2 bg-[#0ea5e9]/20 rounded-full top-[75%] left-[80%] float-fast" style={{ animationDelay: "2s" }} />
        <div className="absolute w-2 h-2 bg-[#0ea5e9]/30 rounded-full top-[40%] left-[50%] float-fast" style={{ animationDelay: "2s" }} />

        <div className="absolute w-4 h-4 bg-[#0ea5e9]/20 rounded-full top-[15%] left-[85%] float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute w-4 h-4 bg-[#0ea5e9]/25 rounded-full top-[70%] left-[10%] float-slow" style={{ animationDelay: "2s" }} />

        <div className="absolute w-24 h-24 bg-[#0ea5e9]/10 rounded-full blur-xl top-[-40px] left-[-40px] float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute w-32 h-32 bg-[#0ea5e9]/10 rounded-full blur-2xl bottom-[-60px] right-[-60px] float-slow" style={{ animationDelay: "2s" }} />

      </div>



      <div className="container mx-auto px-4">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              CONTACT US
            </h2>

            <p className="text-gray-600 mb-6 max-w-md mx-auto lg:mx-0">
              We are here to meet any business need and to promote your company online!
            </p>

            <div className="w-16 h-[2px] bg-gray-400 mx-auto lg:mx-0 mb-6"></div>

            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Phone:</span> +1 (416) 832-4050 </p>
              <p><span className="font-semibold">Location:</span> Toronto, Ontario, Canada</p>
              <p><span className="font-semibold">Email:</span> info@skymark-digital.com</p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-xl">
              <img
                src="/images/contact.jpg" // place your image in public folder
                alt="office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#0ea5e9] opacity-20 blur-2xl rounded-xl group-hover:opacity-40 transition duration-300"></div>

            <div className="relative bg-[#0ea5e9] text-white p-6 rounded-xl shadow-lg 
                    transition-all duration-300 
                    hover:-translate-y-2 hover:shadow-2xl h-35">

              <div className="flex items-center gap-2 mb-3 font-semibold">
                <Phone size={18} /> CALL US
              </div>

              <p className="text-sm text-white/90">
                +1 (416) 832-4050<br />
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#0ea5e9] opacity-20 blur-2xl rounded-xl group-hover:opacity-40 transition duration-300"></div>

            <div className="relative bg-[#0ea5e9] text-white p-6 rounded-xl shadow-lg 
                    transition-all duration-300 
                    hover:-translate-y-2 hover:shadow-2xl h-35">

              <div className="flex items-center gap-2 mb-3 font-semibold">
                <MapPin size={18} /> LOCATION
              </div>

              <p className="text-sm text-white/90">
                TORONTO, ON, Canada
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#0ea5e9] opacity-20 blur-2xl rounded-xl group-hover:opacity-40 transition duration-300"></div>

            <div className="relative bg-[#0ea5e9] text-white p-6 rounded-xl shadow-lg 
                    transition-all duration-300 
                    hover:-translate-y-2 hover:shadow-2xl h-35">

              <div className="flex items-center gap-2 mb-3 font-semibold">
                <Clock size={18} /> HOURS
              </div>

              <p className="text-sm text-white/90">
                Mon – Fri: 9:00 am – 5:00 pm<br />
              </p>
            </div>
          </div>

        </div>
      </div>
    </section >
  )
}