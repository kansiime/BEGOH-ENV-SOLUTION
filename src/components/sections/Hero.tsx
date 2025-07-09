'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [autoScroll, setAutoScroll] = useState(true)

  const carouselItems = [
    {
      image: '/images/Reseearch.jpg',
      title: 'Safety Training',
      description: 'Comprehensive occupational health programs'
    },
    {
      image: '/images/GIS.jpg',
      title: 'RGEOGRAPHICAL INFORMATION SYSTEM AND MAPPING',
      description: 'Solar energy solutions for a greener future'
    },
    {
      image: '/images/occupation.jpg',
      title: 'Environmental Solutions',
      description: 'Innovative approaches to sustainable development'
    },
    {
      image: '/images/water_resource.jpg',
      title: 'Water Management',
      description: 'Clean water solutions for communities'
    },
    {
      image: '/images/biogas.jpg',
      title: 'Renewable Energy',
      description: 'Biogas technology implementation'
    }
  ]

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === carouselItems.length - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval)
  }, [autoScroll, carouselItems.length])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === carouselItems.length - 1 ? 0 : prev + 1))
    setAutoScroll(false) // Pause auto-scroll after manual navigation
    setTimeout(() => setAutoScroll(true), 10000) // Resume auto-scroll after 10 seconds
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? carouselItems.length - 1 : prev - 1))
    setAutoScroll(false)
    setTimeout(() => setAutoScroll(true), 10000)
  }

  const goToSlide = (index: number): void => {
    setCurrentSlide(index)
    setAutoScroll(false)
    setTimeout(() => setAutoScroll(true), 10000)
  }

  return (
    <section 
      className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Carousel slides */}
      <div className="flex h-full w-full relative">
        {carouselItems.map((item, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 20 : 10
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Background image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Content overlay */}
            <div className="container mx-auto relative z-30 text-white max-w-2xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {item.title}
                </h1>
                <p className="text-xl mb-8">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg cursor-pointer transition-colors duration-300"
                  >
                    Our Services
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg cursor-pointer transition-colors duration-300"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation arrows - only show on hover */}
      {isHovered && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all cursor-pointer backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all cursor-pointer backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-green-800/80 text-white py-4 z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <p className="text-3xl font-bold">30+</p>
              <p className="text-sm">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Client Satisfaction</p>
            </motion.div> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero