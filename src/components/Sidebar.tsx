import { Calendar, Home, Users } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-950 h-screen p-4 border-r dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-6">SKart</h2>
      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary">
          <Home className="w-5 h-5" /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary">
          <Calendar className="w-5 h-5" /> Events
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary">
          <Users className="w-5 h-5" /> Vendors
        </a>
      </nav>
    </div>
  );
}