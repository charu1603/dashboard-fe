import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your pizza business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
              Join thousands of pizza shops already using our dashboard to grow
              their business.
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link
                href="/register"
                className="rounded-lg bg-orange-500 px-5 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-orange-600"
              >
                Get started for free
              </Link>
              <Link
                href="#"
                className="rounded-lg bg-gray-800 px-5 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-gray-700"
              >
                Schedule a demo
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CTA