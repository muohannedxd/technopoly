import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Agenda } from '@/components/Agenda'
import About from '@/components/About/About'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Agenda/>
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
