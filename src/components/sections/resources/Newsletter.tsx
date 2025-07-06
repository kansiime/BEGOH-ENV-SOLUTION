import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Newsletter() {
  return (
    <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for the latest environmental insights and company news.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Your email address"
            className="flex-1"
          />
          <Button className="bg-green-600 hover:bg-green-700">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  )
}