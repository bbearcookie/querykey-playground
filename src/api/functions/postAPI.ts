import { Post } from '@/types/index';
import { baseInstance } from '../instance';

const postAPI = {
  fetchPosts: async () => {
    const { data } = await baseInstance.get<Post[]>(`/posts`);
    return data;
  },
  fetchPostDetail: async (postId: string) => {
    const { data } = await baseInstance.get<Post>(`/posts/${postId}`);
    return data;
  },
  addPost: async (post: Post) => {
    const { data } = await baseInstance.post<{ message: string }>('/posts', { data: post });
    return data;
  },
  modifyPost: async (post: Post) => {
    const { data } = await baseInstance.put<{ message: string }>(`/posts/${post.id}`, { data: post });
    return data;
  },
  deletePost: async (postId: string) => {
    const { data } = await baseInstance.delete<{ message: string }>(`/posts/${postId}`);
    return data;
  },
};

export default postAPI;
