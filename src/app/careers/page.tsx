import JobOpenings from '@/components/sections/careers/JobOpenings'
import Benefits from '@/components/sections/careers/Benefits'
import ApplicationProcess from '@/components/sections/careers/ApplicationProcess'

export default function CareersPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us create sustainable environmental solutions while growing your career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <JobOpenings />
          </div>
          <div>
            <Benefits />
          </div>
        </div>

        <ApplicationProcess />
      </div>
    </div>
  )
}