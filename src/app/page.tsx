import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white">
                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500"></span>
                </span>
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
              <span className="text-xl font-bold text-gray-900">PizzaDash</span>
            </Link>
          </div>
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-orange-600"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-orange-600"
            >
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 transition-colors hover:text-orange-600">
              Pricing
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Login
            </Link>
          </nav>
          <button className="rounded-md p-2 text-gray-500 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
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
                Streamline your pizza business with our intuitive dashboard. Track orders, manage inventory, and grow
                your business with powerful analytics.
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
                    <div key={i} className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                      <div
                        className={`h-full w-full bg-gradient-to-br from-orange-${i * 100} to-orange-${i * 100 + 100}`}
                      >
                        <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-white">
                          {String.fromCharCode(64 + i)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="ml-3 text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">500+</span> pizza shops trust us
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
                            <div key={i} className="w-full rounded-t bg-orange-400" style={{ height: `${h}%` }}></div>
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
                          <div key={i} className="flex items-center justify-between rounded-md bg-gray-50 p-2">
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

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to run your pizza business
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              Our dashboard provides all the tools you need to manage orders, track deliveries, and grow your business.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl bg-gray-50 transition-all group-hover:block"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Order Management</h3>
                <p className="mt-2 text-gray-600">
                  Easily track and manage all your pizza orders in one place. Filter by status, search for specific
                  orders, and update order status in real-time.
                </p>
                <div className="mt-4 flex items-center text-orange-600">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl bg-gray-50 transition-all group-hover:block"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Analytics & Reporting</h3>
                <p className="mt-2 text-gray-600">
                  Get insights into your business with powerful analytics. Track sales, popular pizza types, and
                  customer preferences to optimize your menu.
                </p>
                <div className="mt-4 flex items-center text-blue-600">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl bg-gray-50 transition-all group-hover:block"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Delivery Tracking</h3>
                <p className="mt-2 text-gray-600">
                  Keep track of all your deliveries in real-time. Monitor delivery times, assign drivers, and ensure
                  customer satisfaction with timely deliveries.
                </p>
                <div className="mt-4 flex items-center text-green-600">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by pizza shops worldwide
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              See what our customers have to say about our pizza management dashboard.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-6">
                    <p className="text-lg font-medium text-gray-900">
                      "This dashboard has completely transformed how we manage our pizza orders. We've reduced delivery
                      times by 20% and increased customer satisfaction."
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-500">
                      <div className="flex h-full w-full items-center justify-center font-semibold text-white">MR</div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Marco Rossi</p>
                    <p className="text-sm text-gray-500">Rossi's Pizzeria, New York</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-6">
                    <p className="text-lg font-medium text-gray-900">
                      "The analytics feature has been a game-changer for our business. We've optimized our menu based on
                      the data and seen a 30% increase in sales."
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500">
                      <div className="flex h-full w-full items-center justify-center font-semibold text-white">SC</div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Sophia Chen</p>
                    <p className="text-sm text-gray-500">Dragon Pizza, San Francisco</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-6">
                    <p className="text-lg font-medium text-gray-900">
                      "The ease of use is what sets this dashboard apart. Our staff picked it up quickly, and it's made
                      our operations so much more efficient."
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-400 to-green-500">
                      <div className="flex h-full w-full items-center justify-center font-semibold text-white">JW</div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">James Wilson</p>
                    <p className="text-sm text-gray-500">Wilson's Pizza, Chicago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your pizza business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
              Join thousands of pizza shops already using our dashboard to grow their business.
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

      {/* Footer */}
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
                <span className="text-xl font-bold text-gray-900">PizzaDash</span>
              </Link>
              <p className="mt-4 text-sm text-gray-600">
                The ultimate dashboard for pizza businesses. Manage orders, track deliveries, and grow your business.
              </p>
              <div className="mt-6 flex space-x-4">
                {["twitter", "facebook", "instagram", "github"].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{social}</span>
                    <div className="h-6 w-6 rounded-full bg-gray-100"></div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Product</h3>
              <ul className="mt-4 space-y-3">
                {["Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Company</h3>
              <ul className="mt-4 space-y-3">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-3">
                {["Privacy", "Terms", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
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
    </div>
  )
}
