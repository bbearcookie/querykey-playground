import axios from 'axios';
import { IQueryKey } from '../queryKey';

export const comments = {
  all: (): IQueryKey => ({
    queryKey: ['comments'],
    queryFn: async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments');
      return data;
    },
  }),
  detail: (id: number): IQueryKey => ({
    queryKey: ['comments', id],
    queryFn: async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
      return data;
    },
  }),
};
