'use client'

import { m } from 'framer-motion'

const steps = [
  {
    title: "Submit Application",
    description: "Send your CV and cover letter through our portal"
  },
  {
    title: "Initial Screening",
    description: "Our HR team will review your qualifications"
  },
  {
    title: "Interviews",
    description: "Meet with our team members"
  },
  {
    title: "Offer",
    description: "Successful candidates receive an offer"
  }
]

export default function ApplicationProcess() {
  return (
    <section className="py-8">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <h3 className="text-xl font-bold mb-6">Application Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <m.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-800 font-bold mb-3">
                {index + 1}
              </div>
              <h4 className="font-semibold mb-1">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  )
}