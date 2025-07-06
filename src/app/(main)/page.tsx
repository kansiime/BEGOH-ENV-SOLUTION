import Hero from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import AboutPreview from '@/components/sections/AboutPreview'
import ProjectsGallery from '@/components/sections/ProjectsGallery'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <ProjectsGallery />
      <Testimonials />
      <CTA />
    </main>
  )
}