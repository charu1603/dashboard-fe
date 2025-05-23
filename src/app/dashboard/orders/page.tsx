"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Edit, Search, Trash2 } from "lucide-react"

// Mock data for pizza orders
const mockOrders = [
  {
    id: "PZA001",
    customerName: "John Doe",
    pizzaType: "Margherita",
    quantity: 2,
    orderDate: "2023-05-15 14:30",
    status: "Delivered",
  },
  {
    id: "PZA002",
    customerName: "Jane Smith",
    pizzaType: "Pepperoni",
    quantity: 1,
    orderDate: "2023-05-15 15:45",
    status: "Preparing",
  },
  {
    id: "PZA003",
    customerName: "Robert Johnson",
    pizzaType: "Veggie Supreme",
    quantity: 3,
    orderDate: "2023-05-15 16:20",
    status: "Out for Delivery",
  },
  {
    id: "PZA004",
    customerName: "Emily Davis",
    pizzaType: "Hawaiian",
    quantity: 2,
    orderDate: "2023-05-15 17:10",
    status: "Pending",
  },
  {
    id: "PZA005",
    customerName: "Michael Brown",
    pizzaType: "BBQ Chicken",
    quantity: 1,
    orderDate: "2023-05-15 18:05",
    status: "Cancelled",
  },
  {
    id: "PZA006",
    customerName: "Sarah Wilson",
    pizzaType: "Meat Lovers",
    quantity: 2,
    orderDate: "2023-05-16 12:15",
    status: "Delivered",
  },
  {
    id: "PZA007",
    customerName: "David Miller",
    pizzaType: "Buffalo Chicken",
    quantity: 1,
    orderDate: "2023-05-16 13:30",
    status: "Preparing",
  },
  {
    id: "PZA008",
    customerName: "Jennifer Taylor",
    pizzaType: "Cheese",
    quantity: 4,
    orderDate: "2023-05-16 14:45",
    status: "Pending",
  },
  {
    id: "PZA009",
    customerName: "Christopher Anderson",
    pizzaType: "Supreme",
    quantity: 2,
    orderDate: "2023-05-16 15:20",
    status: "Out for Delivery",
  },
  {
    id: "PZA010",
    customerName: "Lisa Thomas",
    pizzaType: "Mushroom",
    quantity: 1,
    orderDate: "2023-05-16 16:10",
    status: "Delivered",
  },
]

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  let colorClasses = ""

  switch (status) {
    case "Pending":
      colorClasses = "bg-yellow-100 text-yellow-800"
      break
    case "Preparing":
      colorClasses = "bg-blue-100 text-blue-800"
      break
    case "Out for Delivery":
      colorClasses = "bg-purple-100 text-purple-800"
      break
    case "Delivered":
      colorClasses = "bg-green-100 text-green-800"
      break
    case "Cancelled":
      colorClasses = "bg-red-100 text-red-800"
      break
    default:
      colorClasses = "bg-gray-100 text-gray-800"
  }

  return <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClasses}`}>{status}</span>
}

export default function OrdersPage() {
  const [orders, setOrders] = useState(mockOrders)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortConfig, setSortConfig] = useState<{
    key: string
    direction: "ascending" | "descending"
  } | null>(null)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Handle sorting
  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending"

    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }

    setSortConfig({ key, direction })
  }

  // Apply sorting, filtering, and searching
  const getProcessedOrders = () => {
    let processedOrders = [...orders]

    // Apply search
    if (searchTerm) {
      processedOrders = processedOrders.filter(
        (order) =>
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.pizzaType.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply status filter
    if (statusFilter !== "all") {
      processedOrders = processedOrders.filter((order) => order.status === statusFilter)
    }

    // Apply sorting
    if (sortConfig) {
      processedOrders.sort((a, b) => {
        if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }

    return processedOrders
  }

  const processedOrders = getProcessedOrders()

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-8 w-[200px] animate-pulse rounded-md bg-gray-200"></div>
        <div className="h-10 w-full animate-pulse rounded-md bg-gray-200"></div>
        <div className="h-[400px] w-full animate-pulse rounded-md bg-gray-200"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Pizza Orders</h1>
        <p className="mt-2 text-gray-600">Manage and track all your pizza orders</p>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-medium text-gray-900">Orders</h2>
          <p className="mt-1 text-sm text-gray-600">View and manage all pizza orders in one place</p>
        </div>

        <div className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:w-64">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:w-auto"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Preparing">Preparing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      <button
                        onClick={() => requestSort("id")}
                        className="group flex items-center font-medium text-gray-500 hover:text-gray-700"
                      >
                        Order ID
                        <span className="ml-1.5 flex-none rounded text-gray-400 group-hover:visible group-hover:text-gray-500">
                          {sortConfig?.key === "id" ? (
                            sortConfig.direction === "ascending" ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )
                          ) : (
                            <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                          )}
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      <button
                        onClick={() => requestSort("customerName")}
                        className="group flex items-center font-medium text-gray-500 hover:text-gray-700"
                      >
                        Customer
                        <span className="ml-1.5 flex-none rounded text-gray-400 group-hover:visible group-hover:text-gray-500">
                          {sortConfig?.key === "customerName" ? (
                            sortConfig.direction === "ascending" ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )
                          ) : (
                            <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                          )}
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Pizza Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      <button
                        onClick={() => requestSort("orderDate")}
                        className="group flex items-center font-medium text-gray-500 hover:text-gray-700"
                      >
                        Order Date
                        <span className="ml-1.5 flex-none rounded text-gray-400 group-hover:visible group-hover:text-gray-500">
                          {sortConfig?.key === "orderDate" ? (
                            sortConfig.direction === "ascending" ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )
                          ) : (
                            <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                          )}
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      <button
                      
                        className="group flex items-center font-medium text-gray-500 hover:text-gray-700"
                      >
                        Status
                        <span className="ml-1.5 flex-none rounded text-gray-400 group-hover:visible group-hover:text-gray-500">
                       
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {processedOrders.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500">
                        No orders found.
                      </td>
                    </tr>
                  ) : (
                    processedOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{order.customerName}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{order.pizzaType}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{order.quantity}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{order.orderDate}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          <StatusBadge status={order.status} />
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button className="rounded-md p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="rounded-md p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
