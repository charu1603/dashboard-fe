import type React from "react";
import Link from "next/link";
import {
  BarChart3,
  Home,
  LogOut,
  Menu,
  PieChart,
  ShoppingBag,
  Users,
  X,
} from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  //   const toggleSidebar = () => {
  //     setIsSidebarOpen(!isSidebarOpen)
  //   }

  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  // Don't render anything on the server to avoid hydration mismatch

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-sm transition-transform duration-300 ease-in-out md:relative md:translate-x-0">
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex h-16 items-center justify-between border-b px-4">
            <Link href="/dashboard" className="flex items-center space-x-2">
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
            <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none md:hidden">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Sidebar Content */}
          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <div className="mb-6">
              <p className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Main
              </p>
              <ul className="mt-3 space-y-1">
                <li>
                  <Link
                    href="/dashboard"
                    className="flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <Home className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/orders"
                    className="flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <ShoppingBag className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Orders</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <Users className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Customers</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Reports
              </p>
              <ul className="mt-3 space-y-1">
                <li>
                  <a
                    href="#"
                    className="flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <BarChart3 className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Analytics</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <PieChart className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Sales Reports</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="border-t p-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <LogoutButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <div className="flex items-center">
            <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none">
              <Menu className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative rounded-full bg-gray-100 p-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                3
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
