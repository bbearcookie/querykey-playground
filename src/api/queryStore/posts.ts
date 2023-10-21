import axios from 'axios';
import { QueryPair } from '../queryStore';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const POSTS = 'posts';

// export const posts: {
//   [key: string]: (...args: any[]) => QueryPair;
// } = {
//   all: () => ({
//     queryKey: [POSTS],
//     queryFn: async (): Promise<Post[]> => {
//       const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
//       return data;
//     },
//   }),
//   detail: (id: number) => ({
//     queryKey: [POSTS, id],
//     queryFn: async () => {
//       const { data } = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
//       return data;
//     },
//   }),
// };

// 아래껄로 하면 자동타입추론 잘됨.
// QueryPair 타입에서 TanstackQuery에서 사용하는 타입으로 잘 추론되게끔 만들어야 함.
export const posts = {
  all: () => ({
    queryKey: [POSTS],
    queryFn: async () => {
      const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      return data;
    },
  }),
  detail: (id: number) => ({
    queryKey: [POSTS, id],
    queryFn: async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return data;
    },
  }),
};
