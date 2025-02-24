
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { MessageSquare, ThumbsUp } from "lucide-react";

interface PostCardProps {
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  commentsCount: number;
  likesCount: number;
  createdAt: string;
}

const PostCard = ({ title, content, author, commentsCount, likesCount, createdAt }: PostCardProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-all duration-300 animate-fade-up">
      <CardHeader className="flex flex-row items-center space-x-4">
        <Avatar>
          <AvatarImage src={author.avatar} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
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
        <Button variant="ghost" className="flex items-center space-x-2">
          <ThumbsUp className="h-4 w-4" />
          <span>{likesCount} Likes</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
