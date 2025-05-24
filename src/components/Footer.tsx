import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
        <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
                    <path d="M4.93 4.93a8 8 0 0 1 11.32 11.32M7.76 7.76a5 5 0 0 1 7.07 7.07"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  PizzaDash
                </span>
              </Link>
              <p className="mt-4 text-sm text-gray-600">
                The ultimate dashboard for pizza businesses. Manage orders,
                track deliveries, and grow your business.
              </p>
           
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                {["Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {["Privacy", "Terms", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} PizzaDash. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer