'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { FiShield, FiDroplet, FiWind, FiMap, FiSun, FiDatabase, FiLayers, FiActivity } from 'react-icons/fi'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  index: number
}

const iconMap: Record<string, IconType> = {
  'FiShield': FiShield,
  'FiDroplet': FiDroplet,
  'FiWind': FiWind,
  'FiMap': FiMap,
  'FiSun': FiSun,
  'FiDatabase': FiDatabase,
  'FiLayers': FiLayers,
  'FiActivity': FiActivity,
}

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const IconComponent = iconMap[icon]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-4">
          {IconComponent && <IconComponent className="w-6 h-6" />}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}