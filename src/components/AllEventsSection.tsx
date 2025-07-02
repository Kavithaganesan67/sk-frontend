"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPin, Users } from "lucide-react"
import { Badge } from "./ui/badge"

const events = [
  {
    title: "Champions League Screening Night",
    location: "Downtown Sports Bar",
    date: "Apr 20, 2025",
    price: "$30",
    attendees: "2.5K",
    status: "Live",
    gradient: "from-blue-400 to-blue-600",
    emoji: "⚽",
  },
  {
    title: "Culinary Delights Festival",
    location: "Gourmet Plaza, San Francisco, CA",
    date: "Mar 5, 2025",
    price: "$40",
    attendees: "1.8K",
    status: "Live",
    gradient: "from-orange-400 to-red-500",
    emoji: "🍳",
  },
  {
    title: "Artistry Unveiled: Modern Art Exhibition",
    location: "Metropolitan Gallery, Los Angeles, CA",
    date: "Mar 10, 2025",
    price: "$110",
    attendees: "950",
    status: "Draft",
    gradient: "from-purple-400 to-pink-500",
    emoji: "🎨",
  },
]

export function AllEventsSection() {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">All Events</CardTitle>
        <Button
          variant="outline"
          size="sm"
          className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
        >
          View All Events
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative">
                <div className={`w-full h-32 bg-gradient-to-br ${event.gradient} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-3xl mb-2">{event.emoji}</div>
                    <div className="text-sm font-medium opacity-90">Event Image</div>
                  </div>
                </div>
                <Badge
                  className={`absolute top-2 right-2 ${
                    event.status === "Live"
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-gray-500 hover:bg-gray-600 text-white"
                  }`}
                >
                  {event.status}
                </Badge>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{event.title}</h3>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-purple-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-purple-600">{event.price}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
