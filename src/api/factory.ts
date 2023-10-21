import { createQueryKeyStore, mergeQueryKeys } from '@lukemorales/query-key-factory';
import axios from 'axios';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const queries = createQueryKeyStore({
  posts: {
    all: null,
    detail: (postId: string) => ({
      queryKey: [postId],
      queryFn: async () => {
        const { data } = await axios.get<Post>('https://jsonplaceholder.typicode.com/posts');
        return data;
      },
    }),
  },
});
