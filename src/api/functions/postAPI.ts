import { Post } from '@/types/index';
import { baseInstance } from '../instance';
import { parseResponse } from '../parser';

const postAPI = {
  fetchPosts: async () => {
    const res = await baseInstance.get<Post[]>(`/posts`);
    return parseResponse(res);
  },
  fetchPostDetail: async (postId: string) => {
    const res = await baseInstance.get<Post>(`/posts/${postId}`);
    return parseResponse(res);
  },
  addPost: async (post: Post) => {
    const res = await baseInstance.post<{ message: string }>('/posts', { data: post });
    return parseResponse(res);
  },
  modifyPost: async (post: Post) => {
    const res = await baseInstance.put<{ message: string }>(`/posts/${post.id}`, { data: post });
    return parseResponse(res);
  },
  deletePost: async (postId: string) => {
    const res = await baseInstance.delete<{ message: string }>(`/posts/${postId}`);
    return parseResponse(res);
  },
};

export default postAPI;
