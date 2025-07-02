"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPin, Clock } from "lucide-react"

export function UpcomingEventCard() {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Event</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative rounded-lg overflow-hidden">
          <div className="w-full h-32 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold mb-1">🎵</div>
              <div className="text-sm font-medium">Music Festival</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">Rhythm & Beats Music Festival</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Immerse yourself in electrifying performances by top DJs, live EDM, and hip-hop artists, creating an
            unforgettable night of music and energy.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <CalendarIcon className="w-4 h-4 text-purple-500" />
            <span>Apr 25, 2025</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 text-purple-500" />
            <span>8:00 PM - 2:00 AM</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 text-purple-500" />
            <span>Downtown Arena</span>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}
