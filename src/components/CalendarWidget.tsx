"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CalendarWidget() {
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  // Generate calendar days for March 2025
  const daysInMonth = 31 // March has 31 days
  const firstDayOfMonth = 6 // March 1, 2025 is a Saturday (6)

 const calendarDays: (number | null)[] = []
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">March 2025</CardTitle>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-700">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-700">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => (
            <div key={index} className="aspect-square flex items-center justify-center">
              {day && (
                <button
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                    day === 15
                      ? "bg-purple-500 text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300"
                  }`}
                >
                  {day}
                </button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
