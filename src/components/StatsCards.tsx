
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  {
    title: "Total Events",
    value: "345",
    change: "+12%",
    trend: "up" as const,
    color: "purple",
  },
  {
    title: "Total Bookings",
    value: "1798",
    change: "+8%",
    trend: "up" as const,
    color: "purple",
  },
  {
    title: "Total Revenue",
    value: "1250",
    change: "+15%",
    trend: "up" as const,
    color: "purple",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center mt-4">
              {stat.trend === "up" ? (
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
