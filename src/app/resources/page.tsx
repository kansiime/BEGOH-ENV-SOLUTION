import ResourceList from '@/components/sections/resources/ResourceList'
import Newsletter from '@/components/sections/resources/Newsletter'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resources & Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest articles, case studies, and environmental resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Read our expert insights on environmental management, safety practices, and sustainability.
              </p>
              <Link 
                href="#articles"
                className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
              >
                Browse Articles
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Case Studies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Explore our successful projects and the impact we've made for our clients.
              </p>
              <Link 
                href="#case-studies"
                className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
              >
                View Case Studies
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Downloads</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Access helpful guides, checklists, and templates for your environmental needs.
              </p>
              <Link 
                href="#downloads"
                className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
              >
                View Downloads
              </Link>
            </CardContent>
          </Card>
        </div>

        <ResourceList />
        <Newsletter />
      </div>
    </div>
  )
}