
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

type UserRole = "admin" | "user" | "guest";

const Navigation = () => {
  // Temporarily hardcoded - will be replaced with actual auth
  const userRole: UserRole = "guest";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo and main navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-green-600">GAME</span>
              <span className="text-xl font-bold text-gray-800">HAYVL</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="font-medium hover:text-green-600 transition-colors">
                HOME
              </Link>
              <Link to="/game" className="font-medium hover:text-green-600 transition-colors">
                GAME
              </Link>
              <Link to="/app" className="font-medium hover:text-green-600 transition-colors">
                APP
              </Link>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
