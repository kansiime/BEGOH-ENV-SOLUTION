'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Providing sustainable environmental solutions since 2019.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our History</h3>
            <p className="text-gray-600 mb-6">
              BEGOH ENV-SOLUTION LIMITED was established in 2019 to provide a wide range of 
              Environmental, Social, Health & Safety Engineering services.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="bg-gray-200 rounded-lg h-64 md:h-80 w-full">
            {/* Placeholder for company image */}
          </div>
        </div>
      </div>
    </section>
  );
}