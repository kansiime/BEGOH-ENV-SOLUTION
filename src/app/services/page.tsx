// src/app/services/page.tsx
'use client'

import { services } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CTA from '@/components/sections/CTA'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(services[0].id)

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove the '#'
      const service = services.find(s => s.id === hash)
      if (service) {
        setActiveTab(hash)
        // Smooth scroll to the service details section
        const element = document.getElementById('service-details')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    // Check initial hash
    if (typeof window !== 'undefined') {
      handleHashChange()
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleTabChange = (serviceId: string) => {
    setActiveTab(serviceId)
    // Update URL hash without triggering a page reload
    window.history.pushState(null, '', `#${serviceId}`)
    
    // Smooth scroll to service details
    const element = document.getElementById('service-details')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const activeService = services.find(service => service.id === activeTab) || services[0]

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gray-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-gray-500 font-medium">Services</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Header */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive environmental, health and safety solutions tailored to your needs. 
              We provide expert services across multiple domains to ensure your business operates 
              safely, sustainably, and in full compliance with regulations.
            </p>
          </motion.div>

          {/* Services Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group cursor-pointer"
                onClick={() => handleTabChange(service.id)}
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <service.icon className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleTabChange(service.id)
                  }}
                  className="text-green-600 hover:text-green-800 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Navigation Tabs */}
      <section className="py-8 bg-white border-b" id="service-navigation">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((service) => (
              <Button
                key={service.id}
                variant={activeTab === service.id ? 'default' : 'outline'}
                onClick={() => handleTabChange(service.id)}
                className="rounded-full text-sm transition-all duration-300"
                size="sm"
              >
                {service.title.length > 30 
                  ? service.title.substring(0, 30) + '...' 
                  : service.title
                }
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50" id="service-details">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8"
            >
              {/* Service Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center mb-8 pb-8 border-b">
                <div className="bg-green-100 p-4 rounded-full mr-0 md:mr-6 mb-4 md:mb-0">
                  <activeService.icon className="h-10 w-10 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {activeService.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {activeService.description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Get Quote
                  </Button>
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Service Description */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    About This Service
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {activeService.fullDescription}
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Why Choose Us?
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">Expert Team</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">Quality Assured</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">Timely Delivery</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Service Features */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Service Features
                  </h3>
                  <div className="space-y-6">
                    {activeService.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="bg-white p-2 rounded-full mr-4 mt-1 shadow-sm">
                          <activeService.icon className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{feature}</h4>
                          <p className="text-sm text-gray-600">
                            Professional {feature.toLowerCase()} services delivered with expertise and attention to detail.
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process Section */}
              <div className="mt-16 bg-gray-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-8 text-center">Our Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <h4 className="font-semibold mb-2">Assessment</h4>
                    <p className="text-gray-300 text-sm">Initial consultation and needs evaluation</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <h4 className="font-semibold mb-2">Planning</h4>
                    <p className="text-gray-300 text-sm">Customized solution development</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      3
                    </div>
                    <h4 className="font-semibold mb-2">Implementation</h4>
                    <p className="text-gray-300 text-sm">Professional service delivery</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      4
                    </div>
                    <h4 className="font-semibold mb-2">Support</h4>
                    <p className="text-gray-300 text-sm">Ongoing maintenance and follow-up</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}