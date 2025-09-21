// src/components/sections/about/TeamSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Team data with proper image paths
const team = [
  {
    name: "STEPHEN OPOYA",
    role: "EHS SPECIALIST AND TEAM LEADER",
    bio: "Stephen leads our environmental health and safety initiatives with over 8 years of industry experience.",
    image: "/images/team/stephen-opoya.jpg"
  },
  {
    name: "ADRICO VICTOR",
    role: "ENVIRONMENT AND SOCIAL SPECIALIST",
    bio: "Adrico specializes in environmental impact assessments and community engagement strategies.",
    image: "/images/team/adrico-victor.jpg"
  },
  {
    name: "OWINO JACOB",
    role: "ACCOUNTANCY AND PROCUREMENT SPECIALIST",
    bio: "Jacob manages our financial operations and ensures efficient procurement processes.",
    image: "/images/team/owino-jacob.jpg"
  },
  {
    name: "AINEMBABAZI LUCY",
    role: "ENVIRONMENTAL ENGINEERING PRACTITIONER",
    bio: "Lucy brings technical expertise in environmental engineering solutions and sustainable practices.",
    image: "/images/team/ainembabazi-lucy.jpg"
  }
]

export default function TeamSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals behind our success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="h-full hover:shadow-lg transition-shadow duration-300 text-center bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-green-100 flex items-center justify-center text-green-800 font-bold text-2xl hidden"
                    style={{ display: 'none' }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-2">{member.name}</h3>
                <p className="text-green-600 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-4 flex-grow">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}