import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const resources = [
  {
    id: 1,
    title: 'Environmental Compliance Guide',
    type: 'Guide',
    description: 'A comprehensive guide to environmental regulations in Uganda',
    link: '#'
  },
  {
    id: 2,
    title: 'Waste Management Case Study',
    type: 'Case Study',
    description: 'How we helped a manufacturing company reduce waste by 40%',
    link: '#'
  },
  {
    id: 3,
    title: 'Safety Checklist Template',
    type: 'Template',
    description: 'Downloadable checklist for workplace safety inspections',
    link: '#'
  }
]

export default function ResourceList() {
  return (
    <div id="resources">
      <h2 className="text-2xl font-bold mb-8">Recent Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <span className="text-sm text-green-600">{resource.type}</span>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Link
                href={resource.link}
                className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
              >
                Download Resource
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}