import axios from 'axios';
import { UseQueryOptions } from '@tanstack/react-query';
import { createQuery, QueryObject } from './index';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const POSTS = 'posts';

export const posts = {
  all: (id: number) => ({
    queryKey: [POSTS],
    queryFn: async () => {
      const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      return data;
    },
  }),
  detail: (id: string) => ({
    queryKey: [POSTS, id],
    queryFn: async () => {
      const { data } = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return data;
    },
  }),
};

// export const posts = createQueries({
//   all: () => ({
//     queryKey: [POSTS],
//     queryFn: async () => {
//       const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
//       return data;
//     },
//   }),
//   detail: (id: string) => ({
//     queryKey: [POSTS, id],
//     queryFn: async () => {
//       const { data } = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
//       return data;
//     },
//   }),
// });
