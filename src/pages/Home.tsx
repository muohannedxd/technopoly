import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sponsors />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
