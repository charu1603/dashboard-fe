"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  ArrowUpRight,
  BarChart3,
  Clock,
  DollarSign,
  ShoppingBag,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Hello, {session?.user?.name || "Guest"}!
        </h1>
        <p className="mt-2 text-gray-600">
          Here's what's happening with your pizza business today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Orders */}
        <div className="overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Total Orders
              </h3>
              <div className="mt-1 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">24</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>10%</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Orders */}
        <div className="overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Clock className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Active Orders
              </h3>
              <div className="mt-1 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">8</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>5%</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customers */}
        <div className="overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Customers</h3>
              <div className="mt-1 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">573</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>12%</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue */}
        <div className="overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <DollarSign className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
              <div className="mt-1 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">$1,254</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>18%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Sales Chart */}
        <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">
                Sales Overview
              </h3>
              <div className="inline-flex items-center rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                <span>Last 7 days</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="h-64 w-full">
              <svg className="h-full w-full" viewBox="0 0 400 200">
                {/* Grid lines */}
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="25"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 25"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Y-axis labels */}
                <g className="text-xs fill-gray-500">
                  <text x="15" y="25" textAnchor="end">
                    $2000
                  </text>
                  <text x="15" y="65" textAnchor="end">
                    $1500
                  </text>
                  <text x="15" y="105" textAnchor="end">
                    $1000
                  </text>
                  <text x="15" y="145" textAnchor="end">
                    $500
                  </text>
                  <text x="15" y="185" textAnchor="end">
                    $0
                  </text>
                </g>

                {/* Area chart */}
                <defs>
                  <linearGradient
                    id="salesGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                    <stop
                      offset="100%"
                      stopColor="#f97316"
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                </defs>

                {/* Sales data points */}
                <path
                  d="M 50 120 L 90 100 L 130 110 L 170 80 L 210 90 L 250 60 L 290 70 L 330 50"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Area fill */}
                <path
                  d="M 50 120 L 90 100 L 130 110 L 170 80 L 210 90 L 250 60 L 290 70 L 330 50 L 330 180 L 50 180 Z"
                  fill="url(#salesGradient)"
                />

                {/* Data points */}
                <circle
                  cx="50"
                  cy="120"
                  r="4"
                  fill="#f97316"
                  className="drop-shadow-sm"
                />
                <circle
                  cx="90"
                  cy="100"
                  r="4"
                  fill="#f97316"
                  className="drop-shadow-sm"
                />
                <circle
                  cx="130"
                  cy="110"
                  r="4"
                  fill="#f97316"
                  className="drop-shadow-sm"
                />
                <circle
                  cx="170"
                  cy="80"
                  r="4"
                  fill="#f97316"
                  className="drop-shadow-sm"
                />
                <circle
                  cx="210"
                  cy="90"
                  r="4"
                  fill="#f97316"
                  className="drop-shadow-sm"
                />
                <circle
                  cx="250"
                  cy="60"
                  r="4"
                  fill="#f97316"
                  className="drop-shadow-sm"
                />
                <circle
                  cx="290"
                  cy="70"
                  r="4"
                  fill="#f97316"
                  className="drop-shadow-sm"
                />
                <circle
                  cx="330"
                  cy="50"
                  r="4"
                  fill="#f97316"
                  className="drop-shadow-sm"
                />

                {/* X-axis labels */}
                <g className="text-xs fill-gray-500">
                  <text x="50" y="195" textAnchor="middle">
                    Mon
                  </text>
                  <text x="90" y="195" textAnchor="middle">
                    Tue
                  </text>
                  <text x="130" y="195" textAnchor="middle">
                    Wed
                  </text>
                  <text x="170" y="195" textAnchor="middle">
                    Thu
                  </text>
                  <text x="210" y="195" textAnchor="middle">
                    Fri
                  </text>
                  <text x="250" y="195" textAnchor="middle">
                    Sat
                  </text>
                  <text x="290" y="195" textAnchor="middle">
                    Sun
                  </text>
                  <text x="330" y="195" textAnchor="middle">
                    Today
                  </text>
                </g>
              </svg>
            </div>

            {/* Chart summary */}
            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-gray-600">Daily Revenue</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Total this week</p>
                <p className="text-lg font-semibold text-gray-900">$8,420</p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Items */}
        <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">
                Popular Items
              </h3>
              <div className="inline-flex items-center rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                <span>This month</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { name: "Pepperoni Pizza", sales: 124, percent: 28 },
                { name: "Margherita Pizza", sales: 98, percent: 22 },
                { name: "Hawaiian Pizza", sales: 82, percent: 18 },
                { name: "Veggie Supreme", sales: 65, percent: 15 },
                { name: "Meat Lovers", sales: 54, percent: 12 },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="h-8 w-8 rounded-md bg-orange-100">
                    <div className="flex h-full w-full items-center justify-center text-xs font-medium text-orange-600">
                      {i + 1}
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">{item.sales} sold</p>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-gray-100">
                      <div
                        className="h-2 rounded-full bg-orange-500"
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">
              Recent Activity
            </h3>
            <Link
              href="/dashboard/orders"
              className="text-sm font-medium text-orange-600 hover:text-orange-500"
            >
              View all
            </Link>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            {
              icon: ShoppingBag,
              title: "New order received",
              description: "Order #PZA024 - Pepperoni Pizza (2)",
              time: "Just now",
              color: "orange",
            },
            {
              icon: Clock,
              title: "Order status updated",
              description: 'Order #PZA023 - Status changed to "Delivered"',
              time: "2 hours ago",
              color: "blue",
            },
            {
              icon: DollarSign,
              title: "Payment received",
              description: "Payment for order #PZA022 - $42.50",
              time: "5 hours ago",
              color: "green",
            },
          ].map((activity, i) => (
            <div key={i} className="px-6 py-4">
              <div className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${activity.color}-50 text-${activity.color}-600`}
                >
                  <activity.icon className="h-5 w-5" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {activity.description}
                  </p>
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
        <div className="border-b border-gray-200 p-6">
          <h3 className="text-base font-semibold text-gray-900">
            Quick Actions
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3">
          <button className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-4 text-gray-700 shadow-sm transition-all hover:border-orange-500 hover:text-orange-500">
            <ShoppingBag className="mr-2 h-5 w-5" />
            <span>Add New Order</span>
          </button>
          <button className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-4 text-gray-700 shadow-sm transition-all hover:border-orange-500 hover:text-orange-500">
            <Users className="mr-2 h-5 w-5" />
            <span>Add Customer</span>
          </button>
          <button className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-4 text-gray-700 shadow-sm transition-all hover:border-orange-500 hover:text-orange-500">
            <BarChart3 className="mr-2 h-5 w-5" />
            <span>Generate Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}
