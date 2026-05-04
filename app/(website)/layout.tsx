import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Skymark Digital | IT Solutions & Digital Marketing Services',
  description: 'Skymark Digital provides comprehensive IT solutions, digital marketing, web development, AI automation, and business services to help your business grow.',
  keywords: 'IT solutions, digital marketing, web development, AI automation, SEO, social media marketing, cyber security',
}
export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  console.log("Website Layout Loaded");
  return (
   
    <>
      <div>
        <Header />
         <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </>
  );
}
