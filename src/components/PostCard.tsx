
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { MessageSquare, BookOpen } from "lucide-react";

interface PostCardProps {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  commentsCount: number;
  createdAt: string;
}

const PostCard = ({ id, title, content, author, commentsCount, createdAt }: PostCardProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center space-x-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-secondary">{title}</h3>
          <p className="text-sm text-muted-foreground">
            Posted by {author.name} • {createdAt}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-secondary/80 line-clamp-3">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" className="flex items-center space-x-2">
          <MessageSquare className="h-4 w-4" />
          <span>{commentsCount} Comments</span>
        </Button>
        <Link to={`/game/${id}/blog`}>
          <Button variant="outline" className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span>Xem Blog</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
