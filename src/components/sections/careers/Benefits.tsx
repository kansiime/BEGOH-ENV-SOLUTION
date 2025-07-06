const benefits = [
  "Competitive salaries",
  "Health insurance",
  "Professional development",
  "Flexible work arrangements",
  "Impactful projects"
]

export default function Benefits() {
  return (
    <div className="bg-green-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Employee Benefits</h3>
      <ul className="space-y-2">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start">
            <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}