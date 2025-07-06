'use client'

import { services } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ServiceDetails() {
  const [activeTab, setActiveTab] = useState(services[0].id)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-8">Service Details</h2>
          
          <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
            <div className="flex space-x-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === service.id ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === service.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={activeTab === service.id ? 'block' : 'hidden'}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.fullDescription}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <service.icon className="h-5 w-5 text-green-600" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}