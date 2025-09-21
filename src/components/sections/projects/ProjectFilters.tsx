// src/components/sections/projects/ProjectFilters.tsx
import { Button } from '@/components/ui/button'

interface ProjectFiltersProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const filters = ['all', 'water', 'safety', 'energy', 'waste']

export default function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? 'default' : 'outline'}
          onClick={() => onFilterChange(filter)}
          className="capitalize"
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}