'use client'

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'John K. Mugisha',
    role: 'Operations Manager, Kampala Industries',
    content: 'BEGOH ENV-SOLUTION transformed our workplace safety standards. Their comprehensive approach and attention to detail significantly reduced our incident rates.',
    initials: 'JM'
  },
  {
    name: 'Sarah N. Okello',
    role: 'Environmental Officer, Green Uganda Ltd',
    content: 'The environmental impact assessment conducted by BEGOH was thorough and professional. Their recommendations helped us implement sustainable practices cost-effectively.',
    initials: 'SO'
  },
  {
    name: 'Robert T. Ssebagala',
    role: 'Project Director, Water for All Initiative',
    content: 'Their water resource management expertise was invaluable for our rural water projects. The team is knowledgeable, reliable, and truly committed to sustainable solutions.',
    initials: 'RS'
  }
]

export function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from organizations that have benefited from our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={`/testimonials/${testimonial.name.toLowerCase().replace(/\s+/g, '-')}.jpg`} />
                  <AvatarFallback className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
             <p className="text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}