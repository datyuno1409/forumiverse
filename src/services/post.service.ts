import axios from 'axios';

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

export const postService = {
  async updatePost(postId: string, data: Partial<Post>) {
    const response = await axios.put(`/api/posts/${postId}`, data);
    return response.data;
  },

  async deletePost(postId: string) {
    const response = await axios.delete(`/api/posts/${postId}`);
    return response.data;
  }
}; 