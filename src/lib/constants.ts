import {
  HardHat,
  Leaf,
  Droplet,
  Flame,
  Map,
  CookingPot,
  Beaker,
  Recycle
  // only keep what's used in `services`
} from 'lucide-react'

export const services = [
  {
    id: 'occupational-health',
    title: 'OCCUPATIONAL HEALTH AND SAFETY SERVICES',
    description: 'Comprehensive workplace safety programs and training to protect your employees.',
    icon: HardHat,
    fullDescription: 'We develop and implement occupational health and safety procedures, regulations and policies both onsite and offsite. Our services include inspections, monitoring, auditing, customized trainings, assessments and reporting. We also procure and supply personal protective equipment, safety signage, firefighting equipment and first aid equipment.',
    features: [
      'Safety procedure development',
      'Workplace inspections, monitoring and auditing',
      'Customized trainings',
      'Assessments and reporting',
      'Documentation',
      'Procurement and supply of PPE, safety signage, firefighting and first aid equipment'
    ]
  },

  {
    id: 'environmental-management',
    title: 'ENVIRONMENTAL MANAGEMENT',
    description: 'Sustainable environmental management and compliance solutions.',
    icon: Leaf,
    fullDescription: 'We provide tailored environmental management solutions, impact assessments, restoration and climate change adaptation strategies.',
    features: [
      'Customized environmental trainings',
      'Environmental and social impact assessments',
      'Environmental and social impact auditing',
      'Implementation of environmental management systems',
      'Environmental restoration and clean ups',
      'Climate change adaptation and mitigation solutions'
    ]
  },

  {
    id: 'water-resource-management',
    title: 'WATER RESOURCE MANAGEMENT',
    description: 'Integrated water resource management and WASH project solutions.',
    icon: Droplet,
    fullDescription: 'We provide sustainable water resource management solutions including construction, protection and restoration of water sources.',
    features: [
      'WASH project implementation and management',
      'Wastewater treatment plant design and construction',
      'Construction of stabilization ponds/lagoons and tanks',
      'Construction and protection of open wells and springs',
      'Construction of boreholes and dug wells',
      'Rainwater harvesting',
      'Water supply systems and irrigation modules',
      'Water resource protection and restoration'
    ]
  },

  {
    id: 'biogas',
    title: 'BIOGAS',
    description: 'Affordable biogas solutions for sustainable energy.',
    icon: Flame,
    fullDescription: 'We design, construct and maintain biogas plants, ensuring clean energy access for institutions and communities.',
    features: [
      'Biogas evaluation and site survey',
      'Fixed dome biogas plant designs and construction',
      'Biogas equipment installation and maintenance'
    ]
  },

  {
    id: 'gis-mapping',
    title: 'GEOGRAPHICAL INFORMATION SYSTEM AND MAPPING',
    description: 'Accurate GIS mapping and spatial data solutions.',
    icon: Map,
    fullDescription: 'We train, collect, analyze and develop customized mapping solutions for effective planning and decision-making.',
    features: [
      'Training in GIS and mapping',
      'Spatial data collection',
      'Spatial data analysis',
      'Geographical mapping',
      'Customized map creation'
    ]
  },

  {
    id: 'energy-saving-stoves',
    title: 'INSTITUTIONAL ENERGY SAVING STOVE',
    description: 'Energy-saving institutional stove construction and accessories.',
    icon: CookingPot,
    fullDescription: 'We construct institutional rocket Lorena stoves and fabricate durable accessories to promote energy efficiency.',
    features: [
      'Construction of institutional rocket Lorena energy saving stoves',
      'Fabrication of durable stove accessories'
    ]
  },

  {
    id: 'research-development',
    title: 'RESEARCH AND DEVELOPMENT',
    description: 'Innovative research collaborations for sustainable solutions.',
    icon: Beaker,
    fullDescription: 'Begoh Env Solution Limited encourages, collaborates and conducts research in different fields promoting sustainable development. We believe in creation of new ideas, innovations and solutions to problems hindering sustainability and systems development.',
    features: [
      'Collaborative research projects',
      'Innovation and idea development',
      'Sustainability-focused solutions',
      'System development support'
    ]
  },

  {
    id: 'waste-management',
    title: 'WASTE MANAGEMENT',
    description: 'Effective waste management and sustainable disposal solutions.',
    icon: Recycle,
    fullDescription: 'We provide waste management solutions for sustainable communities and institutions.',
    features: [
      'Waste collection and disposal',
      'Recycling solutions',
      'Sustainable waste management practices'
    ]
  }
]


export const projects = [
  {
    id: 'project-1',
    title: 'Industrial Wastewater Treatment',
    description: 'Designed and constructed a wastewater treatment plant for a manufacturing facility in Kampala.',
    image: '/images/projects/project1.jpg',
    tags: ['Water Treatment', 'Industrial', 'Construction']
  },
    {
    id: 'project-2',
    title: 'Industrial Wastewater Treatment',
    description: 'Designed and constructed a wastewater treatment plant for a manufacturing facility in Kampala.',
    image: '/images/projects/project2.jpg',
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