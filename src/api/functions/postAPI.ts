import { baseInstance } from '../instance';
import { Post } from '@/types/index';

const postAPI = {
  fetchPosts: async () => {
    const { data } = await baseInstance.get<Post[]>('/posts');
    return data;
  },
  fetchPostDetail: async (postId: string) => {
    const { data } = await baseInstance.get<Post>(`/posts/${postId}`);
    return data;
  },
};

export default postAPI;
