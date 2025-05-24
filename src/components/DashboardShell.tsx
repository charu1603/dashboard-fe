
"use client";

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
import { useState } from "react";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-sm transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative`}>
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between border-b px-4">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white">
                {/* Your Logo SVG */}
              </div>
              <span className="text-xl font-bold text-gray-900">PizzaDash</span>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none md:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <div className="mb-6">
              <p className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Main</p>
              <ul className="mt-3 space-y-1">
                <li>
                  <Link href="/dashboard" className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <Home className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/orders" className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <ShoppingBag className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Orders</span>
                  </Link>
                </li>
                <li>
                  <a href="#" className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <Users className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Customers</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Reports */}
            <div className="mb-6">
              <p className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Reports</p>
              <ul className="mt-3 space-y-1">
                <li>
                  <a href="#" className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <BarChart3 className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Analytics</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <PieChart className="mr-3 h-5 w-5 text-gray-500" />
                    <span>Sales Reports</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t p-4">
            <LogoutButton />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
