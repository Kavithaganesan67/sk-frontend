
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function ChartsSection() {
  const chartData = [
    { month: "Jan", value: 40 },
    { month: "Feb", value: 65 },
    { month: "Mar", value: 30 },
    { month: "Apr", value: 80 },
    { month: "May", value: 45 },
    { month: "Jun", value: 90 },
    { month: "Jul", value: 35 },
    { month: "Aug", value: 70 },
    { month: "Sep", value: 25 },
    { month: "Oct", value: 85 },
    { month: "Nov", value: 50 },
    { month: "Dec", value: 75 },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Ticket Sales Chart */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Ticket Sales</CardTitle>
          <p className="text-sm text-gray-500 dark:text-gray-400">This Week</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-40 h-40">
              <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200 dark:text-gray-700"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${70 * 2.51} ${100 * 2.51}`}
                  className="text-purple-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">2,780</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Total</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Sold Out</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">1,251</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Day Booked</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">834</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Available</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">695</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sales Revenue Chart */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Sales Revenue</CardTitle>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last 6 Months</p>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">$348,805</div>
          <div className="text-sm text-green-500 mb-6 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            +15% vs last period
          </div>

          <div className="space-y-3">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-xs text-gray-500 dark:text-gray-400 w-8 text-right">{item.month}</div>
                <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-2 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 w-12 text-right">
                  ${Math.floor(item.value * 50)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
