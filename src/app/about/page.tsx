import HistoryTimeline from '@/components/sections/about/HistoryTimeline'
import MissionVision from '@/components/sections/about/MissionVision'
import TeamSection from '@/components/sections/about/TeamSection'
import Values from '@/components/sections/about/Values'

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About BEGOH ENV-SOLUTION
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering sustainable environmental and safety solutions since 2019.
          </p>
        </div>

        <HistoryTimeline />
        <MissionVision />
        <Values />
        <TeamSection />
      </div>
    </div>
  )
}