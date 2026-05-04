import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Providers from './Providers';
import { ToastContainer } from 'react-toastify';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
          <Providers>
            <ToastContainer />
            {children}
          </Providers>
      </body>
    </html>
  )
}
