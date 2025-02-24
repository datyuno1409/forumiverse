
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageSquare, User, Shield } from "lucide-react";

const Navigation = () => {
  // Temporarily hardcoded - will be replaced with actual auth
  const userRole = "guest";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <MessageSquare className="h-6 w-6 text-accent" />
            <span className="text-xl font-semibold text-secondary">Forum</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {userRole === "admin" && (
              <Button variant="outline" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Admin</span>
              </Button>
            )}
            
            {userRole === "guest" ? (
              <div className="flex items-center space-x-2">
                <Button variant="ghost">Sign In</Button>
                <Button>Sign Up</Button>
              </div>
            ) : (
              <Button variant="outline" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
