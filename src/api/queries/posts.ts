import axios from 'axios';
import { createQueryKeys } from '@lukemorales/query-key-factory';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const posts = createQueryKeys('posts', {
  all: {
    queryKey: null,
    queryFn: async () => {
      const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      return data;
    },
  },
  detail: (postId: string) => ({
    queryKey: [postId],
    queryFn: async () => {
      const { data } = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      return data;
    },
  }),
});
