import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Work With Us?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your environmental and safety needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-green-600 bg-white hover:bg-gray-100"
          >
            Get In Touch
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-white/10"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}