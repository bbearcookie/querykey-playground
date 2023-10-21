import axios from 'axios';
import { createQueryKeys } from '@lukemorales/query-key-factory';

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const comments = createQueryKeys('comments', {
  all: {
    queryKey: null,
    queryFn: async () => {
      const { data } = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
      return data;
    },
  },
  detail: (commentId: string) => ({
    queryKey: [commentId],
    queryFn: async () => {
      const { data } = await axios.get<Comment>(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
      return data;
    },
  }),
});
