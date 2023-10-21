import axios from 'axios';
import { QueryPair } from '../queryStore';

export const comments = {
  all: (): QueryPair => ({
    queryKey: ['comments'],
    queryFn: async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments');
      return data;
    },
  }),
  detail: (id: number): QueryPair => ({
    queryKey: ['comments', id],
    queryFn: async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
      return data;
    },
  }),
};
