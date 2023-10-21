import axios from 'axios';
import { QueryPair } from '../queryStore';

const POST = 'posts';

export const posts: {
  [key: string]: (...args: any[]) => QueryPair;
} = {
  all: (): QueryPair => ({
    queryKey: [POST],
    queryFn: async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return data;
    },
  }),
  detail: (id: number): QueryPair => ({
    queryKey: [POST, id],
    queryFn: async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return data;
    },
  }),
};
