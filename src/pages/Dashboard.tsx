"use client"

import { Search, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StatsCards } from "@/components/StatsCards"
import { ChartsSection } from "@/components/ChartsSection"
import { AllEventsSection } from "@/components/AllEventsSection"
import { RecentBookings } from "@/components/RecentBookings"
import { UpcomingEventCard } from "@/components/UpcomingEventCard"
import { CalendarWidget } from "@/components/CalendarWidget"
import { RecentActivity } from "@/components/RecentActivity"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/ThemeToggle"


export function DashboardContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">{"Here's what's happening today"}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                placeholder="Search anything"
                className="pl-10 w-80 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 dark:hover:bg-gray-700">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full"></span>
            </Button>

            <ThemeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-purple-100 text-purple-700 font-semibold">OL</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-gray-900 dark:text-white">Orlando Lawrence</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Column - Main Dashboard */}
            <div className="lg:col-span-3 space-y-6">
              <StatsCards />
              <ChartsSection />
              <AllEventsSection />
              <RecentBookings />
            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="space-y-6">
              <UpcomingEventCard />
              <CalendarWidget />
              <RecentActivity />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
