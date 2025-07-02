"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const activities = [
  {
    user: "Admin Stefanos Wilson",
    action: "received a refund request for tickets",
    event: "SKY2024",
    time: "2 min ago",
    avatar: "SW",
    color: "bg-blue-100 text-blue-700",
  },
  {
    user: "Wella Michelle",
    action: "updated ticket prices for the event",
    event: "Autumn Harvest Festival 2024",
    time: "5 min ago",
    avatar: "WM",
    color: "bg-green-100 text-green-700",
  },
  {
    user: "Patrick Cooper",
    action: "organized a cooking with professional chefs",
    event: "Culinary Delights Festival",
    time: "10 min ago",
    avatar: "PC",
    color: "bg-orange-100 text-orange-700",
  },
  {
    user: "Andrew Shaw",
    action: "created a new event",
    event: "Symphony Under the Stars",
    time: "15 min ago",
    avatar: "AS",
    color: "bg-purple-100 text-purple-700",
  },
]

export function RecentActivity() {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3">
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarFallback className={`${activity.color} text-xs font-semibold`}>{activity.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white">
                  <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                  <span className="font-medium text-purple-600 dark:text-purple-400">"{activity.event}"</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
