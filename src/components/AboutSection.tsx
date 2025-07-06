'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-200 dark:bg-gray-800">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg text-muted-foreground">Company Image</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About BEGOH ENV-SOLUTION</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Established in 2019, BEGOH ENV-SOLUTION LIMITED provides a wide range of Environmental, Social, Health & Safety Engineering services and solutions to meet the desired customer requirements.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our services focus on occupational health and safety, environmental solutions, and social economic projects to meet sustainable development goals. We pride ourselves on professionalism, integrity, and forming mutually beneficial relationships with our clients.
            </p>
            <Button asChild>
              <Link href="/about">
                Learn More About Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}