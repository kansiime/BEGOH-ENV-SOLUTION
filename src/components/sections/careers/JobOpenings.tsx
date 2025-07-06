import { Button } from '@/components/ui/button'

const jobs = [
  {
    id: 1,
    title: "Environmental Engineer",
    type: "Full-time",
    location: "Kampala",
    description: "Design and implement environmental solutions for our clients."
  },
  {
    id: 2,
    title: "Safety Officer",
    type: "Contract",
    location: "Mbarara",
    description: "Conduct workplace safety assessments and training."
  },
  {
    id: 3,
    title: "GIS Specialist",
    type: "Full-time",
    location: "Kampala",
    description: "Create spatial data visualizations and analysis."
  }
]

export default function JobOpenings() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Current Openings</h3>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">{job.title}</h4>
                <p className="text-sm text-gray-600">{job.type} • {job.location}</p>
              </div>
              <Button variant="outline">Apply Now</Button>
            </div>
            <p className="mt-2 text-gray-700">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}