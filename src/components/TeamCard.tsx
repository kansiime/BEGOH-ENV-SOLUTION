'use client'

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface TeamCardProps {
  name: string
  role: string
  description: string
  index: number
}

export function TeamCard({ name, role, description, index }: TeamCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('')
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={`/team/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`} />
          <AvatarFallback className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xl font-medium">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-green-600 dark:text-green-400 mb-2">{role}</p>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}