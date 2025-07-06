'use client'

import { services } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const Services = () => {
  const [activeTab, setActiveTab] = useState(services[0].id)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your environmental and safety needs.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {services.map((service) => (
            <Button
              key={service.id}
              variant={activeTab === service.id ? 'default' : 'outline'}
              onClick={() => setActiveTab(service.id)}
              className="rounded-full"
            >
              {service.title}
            </Button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
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
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.fullDescription}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-4">Service Highlights</h4>
                  <div className="space-y-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <service.icon className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h5 className="font-medium">{feature}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services