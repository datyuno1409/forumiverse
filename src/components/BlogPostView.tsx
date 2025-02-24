
import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { BlogPost } from "../types/blog";

interface BlogPostViewProps {
  post: BlogPost;
}

const BlogPostView = ({ post }: BlogPostViewProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <div className="text-sm text-gray-500">
          Đăng bởi {post.author} • {post.createdAt}
        </div>
      </CardHeader>
      <CardContent>
        {post.image && (
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto rounded-lg mb-4 object-cover"
          />
        )}
        <div className="prose max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostView;
