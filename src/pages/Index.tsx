
import React from "react";
import Navigation from "../components/Navigation";
import PostCard from "../components/PostCard";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";

// Temporary mock data
const posts = [
  {
    id: 1,
    title: "Welcome to our Forum!",
    content: "This is a place where you can discuss various topics with other members. Feel free to explore and engage in meaningful conversations.",
    author: {
      name: "Admin",
      avatar: "",
    },
    commentsCount: 5,
    likesCount: 10,
    createdAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Getting Started Guide",
    content: "New to the forum? Here's everything you need to know about participating in discussions and making the most of your experience.",
    author: {
      name: "Moderator",
      avatar: "",
    },
    commentsCount: 3,
    likesCount: 7,
    createdAt: "5 hours ago",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-secondary mb-2">Recent Discussions</h1>
            <p className="text-muted-foreground">Join the conversation or start your own topic</p>
          </div>
          
          <Button className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>New Post</span>
          </Button>
        </div>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
