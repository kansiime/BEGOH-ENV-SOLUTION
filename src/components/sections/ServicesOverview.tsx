import { services } from '@/lib/constants'
import Link from 'next/link'

export default function ServicesOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div key={service.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <service.icon className="text-green-600 w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <Link
            href={`/services#${service.id}`}
            className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
          >
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  )
}