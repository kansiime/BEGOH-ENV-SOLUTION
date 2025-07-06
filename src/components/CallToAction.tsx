'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-green-600 to-emerald-800 dark:from-green-800 dark:to-emerald-900 text-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Environmental & Safety Practices?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you achieve your sustainability and safety goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}