'use client'

import { projects } from '@/lib/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

const ProjectsGallery = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See some of our recent work delivering sustainable solutions across Uganda.
          </p>
        </motion.div>

        <motion.div 
          ref={carousel} 
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="min-w-[300px] md:min-w-[400px]"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-60">
  
                                <Image 
                                  src="/images/water_reesource.jpg" 
                                  alt="BEGOH ENV-SOLUTION team or office" 
                                  fill
                                  className="object-cover rounded-lg"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsGallery