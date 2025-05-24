import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#f8f8f8_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm">
                <span className="mr-2 rounded-full bg-orange-600 px-1.5 py-0.5 text-xs font-semibold text-white">
                  New
                </span>
                <span className="text-gray-600">Version 2.0 just launched</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Modern pizza</span>
                <span className="block text-orange-600">management</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Streamline your pizza business with our intuitive dashboard.
                Track orders, manage inventory, and grow your business with
                powerful analytics.
              </p>

              <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-base font-medium text-white transition-all hover:bg-gray-800"
                >
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50"
                >
                  Learn more
                </Link>
              </div>

              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-white"
                    >
                      <div
                        className={`h-full w-full bg-gradient-to-br from-orange-${
                          i * 100
                        } to-orange-${i * 100 + 100}`}
                      >
                        <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-white">
                          {String.fromCharCode(64 + i)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="ml-3 text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">500+</span>{" "}
                  pizza shops trust us
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative h-[500px] w-full overflow-hidden rounded-2xl bg-gray-50 shadow-xl">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 h-14 bg-white/80 backdrop-blur-sm">
                  <div className="mx-4 flex h-full items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 h-6 w-[70%] rounded-md bg-gray-100"></div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-8 pt-16">
                  <div className="grid w-full grid-cols-2 gap-4">
                    <div className="col-span-2 rounded-xl bg-white p-4 shadow-sm">
                      <div className="mb-2 h-4 w-32 rounded bg-gray-200"></div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-lg bg-orange-50 p-4">
                          <div className="mb-2 h-3 w-12 rounded bg-orange-200"></div>
                          <div className="h-6 w-16 rounded bg-orange-300"></div>
                        </div>
                        <div className="rounded-lg bg-blue-50 p-4">
                          <div className="mb-2 h-3 w-12 rounded bg-blue-200"></div>
                          <div className="h-6 w-16 rounded bg-blue-300"></div>
                        </div>
                        <div className="rounded-lg bg-green-50 p-4">
                          <div className="mb-2 h-3 w-12 rounded bg-green-200"></div>
                          <div className="h-6 w-16 rounded bg-green-300"></div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <div className="mb-3 h-3 w-20 rounded bg-gray-200"></div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center">
                            <div className="h-4 w-4 rounded-full bg-orange-200"></div>
                            <div className="ml-2 h-3 w-24 rounded bg-gray-200"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <div className="mb-3 h-3 w-20 rounded bg-gray-200"></div>
                      <div className="h-24 rounded-md bg-gray-100 p-2">
                        <div className="flex h-full items-end space-x-1">
                          {[30, 60, 40, 70, 50, 80].map((h, i) => (
                            <div
                              key={i}
                              className="w-full rounded-t bg-orange-400"
                              style={{ height: `${h}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 rounded-xl bg-white p-4 shadow-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="h-3 w-20 rounded bg-gray-200"></div>
                        <div className="h-6 w-20 rounded-md bg-orange-100 p-1">
                          <div className="h-full w-8 rounded bg-orange-400"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between rounded-md bg-gray-50 p-2"
                          >
                            <div className="flex items-center">
                              <div className="h-6 w-6 rounded bg-gray-200"></div>
                              <div className="ml-2 h-3 w-24 rounded bg-gray-200"></div>
                            </div>
                            <div className="h-3 w-16 rounded bg-gray-200"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-orange-100"></div>
              <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-gray-100"></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero