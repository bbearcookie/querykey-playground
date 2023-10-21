import axios from 'axios';
import { IQueryKey } from '../queryKey';

const POST = 'posts';

export const posts = {
  all: (): IQueryKey => ({
    queryKey: [POST],
    queryFn: async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return data;
    },
  }),
  detail: (id: number): IQueryKey => ({
    queryKey: [POST, id],
    queryFn: async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return data;
    },
  }),
};
