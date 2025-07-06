import { motion } from 'framer-motion'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-800 dark:from-green-800 dark:to-emerald-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Environment, Health & Safety Engineering Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Providing sustainable services and solutions that transcend expectations through reliability and validity of our core competences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Our Services
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}