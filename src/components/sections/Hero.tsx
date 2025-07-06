'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Environmental solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Sustainable Environmental & Safety Solutions
          </h1>
          <p className="text-xl mb-8">
            Providing innovative and reliable environmental, health and safety engineering services across Uganda.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">
              Our Services
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scrolling stats at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-green-800/80 text-white py-4">
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