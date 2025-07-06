'use client'

import { m } from 'framer-motion'

export default function MissionVision() {
  return (
    <section className="py-12">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
      >
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-green-800">Our Vision</h3>
          <p className="text-gray-700">
            Providing sustainable services and solutions that transcend expectations through reliability and validity of our core competences.
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-green-800">Our Mission</h3>
          <p className="text-gray-700">
            BEGOH ENV SOLUTION LIMITED strives to provide quality services and cost-effective solutions as a pride to our clients with utmost professionalism and integrity.
          </p>
        </div>
      </m.div>
    </section>
  )
}