'use client'

import { m } from 'framer-motion'

const values = [
  {
    title: "Integrity",
    description: "We uphold the highest standards of honesty and ethical behavior in all our dealings."
  },
  {
    title: "Professionalism",
    description: "Our team delivers services with expertise, competence, and dedication."
  },
  {
    title: "Innovation",
    description: "We continuously seek creative solutions to environmental challenges."
  },
  {
    title: "Sustainability",
    description: "Our solutions prioritize long-term environmental and social benefits."
  }
]

export default function Values() {
  return (
    <section className="py-12">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <h2 className="text-2xl font-bold mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <m.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-semibold mb-2 text-green-700">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  )
}