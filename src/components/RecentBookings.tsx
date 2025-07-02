"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { Badge } from "./ui/badge"

const bookings = [
  {
    invoice: "INV001",
    date: "2024/03/15",
    customer: "Jackson Moore",
    event: "Symphony Under the Stars",
    qty: 2,
    amount: "$90",
    status: "Confirmed",
  },
  {
    invoice: "INV002",
    date: "2024/03/16",
    customer: "Alicia Smithson",
    event: "Runway Revolution 2024",
    qty: 1,
    amount: "$30",
    status: "Pending",
  },
  {
    invoice: "INV003",
    date: "2024/03/17",
    customer: "Marcus Rashford",
    event: "Gamer Wellness Summit",
    qty: 2,
    amount: "$240",
    status: "Confirmed",
  },
  {
    invoice: "INV004",
    date: "2024/03/18",
    customer: "Patrick Cooper",
    event: "Champions League Screening Night",
    qty: 1,
    amount: "$30",
    status: "Cancelled",
  },
  {
    invoice: "INV005",
    date: "2024/03/19",
    customer: "Olivia Santos",
    event: "Artistry Unveiled: Modern Art Exhibition",
    qty: 1,
    amount: "$50",
    status: "Confirmed",
  },
]

export function RecentBookings() {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Recent Bookings</CardTitle>
        <Button
          variant="outline"
          size="sm"
          className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
        >
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-200 dark:border-gray-700">
                <TableHead className="text-gray-600 dark:text-gray-300">Invoice</TableHead>
                <TableHead className="text-gray-600 dark:text-gray-300">Date</TableHead>
                <TableHead className="text-gray-600 dark:text-gray-300">Customer</TableHead>
                <TableHead className="text-gray-600 dark:text-gray-300">Event</TableHead>
                <TableHead className="text-gray-600 dark:text-gray-300">Qty</TableHead>
                <TableHead className="text-gray-600 dark:text-gray-300">Amount</TableHead>
                <TableHead className="text-gray-600 dark:text-gray-300">Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow
                  key={booking.invoice}
                  className="border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <TableCell className="font-medium text-gray-900 dark:text-white">{booking.invoice}</TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">{booking.date}</TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">{booking.customer}</TableCell>
                  <TableCell className="max-w-xs truncate text-gray-600 dark:text-gray-300">{booking.event}</TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">{booking.qty}</TableCell>
                  <TableCell className="font-medium text-gray-900 dark:text-white">{booking.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        booking.status === "Confirmed"
                          ? "default"
                          : booking.status === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                      className={
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400"
                          : booking.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
