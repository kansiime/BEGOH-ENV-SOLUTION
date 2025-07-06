import ServicesOverview from '@/components/sections/ServicesOverview'
import ServiceDetails from '@/components/sections/ServiceDetails'
import CTA from '@/components/sections/CTA'

export default function ServicesPage() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive environmental, health and safety solutions tailored to your needs.
            </p>
          </div>

          <ServicesOverview />
        </div>
      </div>

      <ServiceDetails />
      <CTA />
    </>
  )
}