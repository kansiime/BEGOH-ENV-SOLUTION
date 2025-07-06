'use client'

import { m } from 'framer-motion'

export default function HistoryTimeline() {
  return (
    <section className="py-12">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full mb-12"
      >
        <h2 className="text-2xl font-bold mb-6">Our History</h2>
        <div className="relative">
          <div className="absolute left-4 h-full w-0.5 bg-green-200"></div>
          <div className="space-y-8">
            <div className="relative pl-12">
              <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Founded in 2019</h3>
              <p className="text-gray-600">
                BEGOH ENV-SOLUTION LIMITED was established to provide comprehensive Environmental, Social, Health & Safety Engineering services.
              </p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Early Projects</h3>
              <p className="text-gray-600">
                Successfully completed our first major environmental impact assessments and safety audits for clients in Kampala.
              </p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Expansion</h3>
              <p className="text-gray-600">
                Grew our team of specialists to include environmental engineers, GIS experts, and safety professionals.
              </p>
            </div>
          </div>
        </div>
      </m.div>
    </section>
  )
}