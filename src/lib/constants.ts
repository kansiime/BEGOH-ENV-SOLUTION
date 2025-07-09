import {
  HardHat,
  Leaf
  // only keep what's used in `services`
} from 'lucide-react'

export const services = [
  {
    id: 'occupational-health',
    title: 'Occupational Health & Safety',
    description: 'Comprehensive workplace safety programs and training to protect your employees.',
    icon: HardHat,
    fullDescription: 'We develop and implement occupational health and safety procedures, regulations and policies both onsite and offsite. Our services include inspections, monitoring, auditing, customized trainings, assessments and reporting. We also procure and supply personal protective equipment, safety signage, firefighting equipment and first aid equipment.',
    features: [
      'Safety procedure development',
      'Workplace inspections',
      'Customized training',
      'PPE procurement',
      'Compliance auditing'
    ]
  },
  {
    id: 'environmental-management',
    title: 'Environmental Management',
    description: 'Sustainable solutions for environmental compliance and stewardship.',
    icon: Leaf,
    fullDescription: 'Our environmental management services include customized trainings, environmental and social impact assessments, auditing, implementation of environmental management systems, environmental restoration and clean ups, and climate change adaption and mitigation-based solutions.',
    features: [
      'Impact assessments',
      'Management systems',
      'Environmental audits',
      'Restoration services',
      'Climate solutions'
    ]
  },
  // Add all other services similarly
]

export const projects = [
  {
    id: 'project-1',
    title: 'Industrial Wastewater Treatment',
    description: 'Designed and constructed a wastewater treatment plant for a manufacturing facility in Kampala.',
    image: '/images/projects/project1.jpg',
    tags: ['Water Treatment', 'Industrial', 'Construction']
  },
  // Add more projects
]

export const team = [
  {
    name: 'Stephen Opoya',
    role: 'EHS Specialist and Team Leader',
    bio: 'With over 10 years experience in occupational health and safety, Stephen leads our team with expertise in workplace safety compliance.',
    image: '/images/team/stephen.jpg'
  },
  // Add other team members
]

export const testimonials = [
  {
    id: 1,
    name: 'John Mugisha',
    company: 'Kampala Manufacturing Co.',
    text: 'BEGOH provided exceptional environmental consulting that helped us achieve full compliance with new regulations.',
    rating: 5
  },
  // Add more testimonials
]