'use client'
import { useState } from 'react'

import ProjectFilters from '@/components/sections/projects/ProjectFilters'
import ProjectGrid from '@/components/sections/projects/ProjectGrid'
import { projects } from '@/lib/constants'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of environmental and safety projects across Uganda.
          </p>
        </div>

        <ProjectFilters activeFilter={filter} onFilterChange={setFilter} />
        <ProjectGrid projects={filteredProjects} />
      </div>
    </div>
  )
}