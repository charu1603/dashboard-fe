import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Pricing () {
  return (
    <section id="pricing" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              Choose the plan that's right for your pizza business.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Starter Plan */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
              <p className="mt-2 text-gray-600">Perfect for small pizza shops just getting started.</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">$29</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                {["Up to 100 orders/month", "Basic analytics", "Email support"].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="mt-8 block rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-medium text-white transition-all hover:bg-gray-800"
              >
                Get started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="relative flex flex-col rounded-2xl border-2 border-orange-500 bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-sm font-medium text-white">
                Most Popular
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
              <p className="mt-2 text-gray-600">For growing pizza businesses with multiple locations.</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">$79</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                {["Unlimited orders", "Advanced analytics", "Priority support", "Multi-location support"].map(
                  (feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ),
                )}
              </ul>
              <Link
                href="/register"
                className="mt-8 block rounded-lg bg-orange-500 px-4 py-3 text-center text-sm font-medium text-white transition-all hover:bg-orange-600"
              >
                Get started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
              <p className="mt-2 text-gray-600">For large pizza chains with custom requirements.</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">$199</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                {[
                  "Unlimited everything",
                  "Custom reporting",
                  "Dedicated support",
                  "Custom integrations",
                  "SLA guarantees",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="mt-8 block rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-medium text-white transition-all hover:bg-gray-800"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}
