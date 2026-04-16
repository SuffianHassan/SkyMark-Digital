import { TopBar } from "@/components/layout/top-bar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { Services } from "@/components/sections/services"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Industries } from "@/components/sections/industries"
import { Team } from "@/components/sections/team"
import { Partners } from "@/components/sections/partners"
import { Blog } from "@/components/sections/blog"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Team />
      <Partners />
      <Blog />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </main>
  )
}
