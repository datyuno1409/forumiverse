import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import BlogPostForm from "../components/BlogPostForm";
import BlogPostView from "../components/BlogPostView";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";
import { BlogPost } from "../types/blog";
import { Post, postService } from '../services/post.service';
import { EditPostModal } from '../components/EditPostModal';
import { useToast } from '../hooks/use-toast';

const GameBlog = () => {
  const { gameId } = useParams();
  const [isCreating, setIsCreating] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const toast = useToast();

  const handleSubmit = (formData: FormData) => {
    // In a real app, this would be an API call
    const newPost: Post = {
      id: posts.length + 1,
      gameId: Number(gameId),
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      author: "Admin", // This would come from auth
      createdAt: new Date().toLocaleDateString("vi-VN"),
      image: formData.get('image') ? URL.createObjectURL(formData.get('image') as File) : undefined
    };

    setPosts([newPost, ...posts]);
    setIsCreating(false);
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  const handleDelete = async (postId: string) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
      return;
    }

    try {
      await postService.deletePost(postId);
      setPosts(posts.filter(post => post.id !== postId));
      toast.success('Bài viết đã được xóa thành công!');
    } catch (error) {
      toast.error('Có lỗi xảy ra khi xóa bài viết');
    }
  };

  const handlePostUpdated = () => {
    // Refresh posts after update
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Blog Bài Viết</h1>
              <Button 
                onClick={() => setIsCreating(!isCreating)}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Tạo bài viết mới
              </Button>
            </div>

            {isCreating && (
              <div className="mb-8">
                <BlogPostForm gameId={Number(gameId)} onSubmit={handleSubmit} />
              </div>
            )}

            <div className="space-y-6">
              {posts.map(post => (
                <div key={post.id} className="post-card">
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <div className="post-actions">
                    <button onClick={() => handleEdit(post)}>
                      Chỉnh sửa
                    </button>
                    <button onClick={() => handleDelete(post.id)}>
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
              {posts.length === 0 && !isCreating && (
                <div className="text-center text-gray-500 py-8">
                  Chưa có bài viết nào. Hãy tạo bài viết đầu tiên!
                </div>
              )}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-4">Hướng dẫn</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Viết tiêu đề rõ ràng, hấp dẫn</li>
                <li>• Thêm hình ảnh để bài viết sinh động</li>
                <li>• Nội dung chi tiết và dễ hiểu</li>
                <li>• Kiểm tra lỗi chính tả trước khi đăng</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {editingPost && (
        <EditPostModal
          post={editingPost}
          isOpen={!!editingPost}
          onClose={() => setEditingPost(null)}
          onPostUpdated={handlePostUpdated}
        />
      )}
    </div>
  );
};

export default GameBlog;
