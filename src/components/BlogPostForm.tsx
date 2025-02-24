
import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface BlogPostFormProps {
  gameId: number;
  onSubmit: (formData: FormData) => void;
}

const BlogPostForm = ({ gameId, onSubmit }: BlogPostFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('gameId', gameId.toString());
    onSubmit(formData);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Tiêu đề</Label>
          <Input id="title" name="title" required placeholder="Nhập tiêu đề bài viết..." />
        </div>
        
        <div>
          <Label htmlFor="image">Hình ảnh</Label>
          <Input id="image" name="image" type="file" accept="image/*" />
        </div>

        <div>
          <Label htmlFor="content">Nội dung</Label>
          <Textarea 
            id="content" 
            name="content" 
            required 
            placeholder="Nhập nội dung bài viết..."
            className="min-h-[200px]"
          />
        </div>

        <Button type="submit" className="w-full">Đăng bài</Button>
      </form>
    </Card>
  );
};

export default BlogPostForm;
