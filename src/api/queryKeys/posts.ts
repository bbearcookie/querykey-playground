import { createQueryKeys } from '@lukemorales/query-key-factory';
import postAPI from '../functions/postAPI';

const posts = createQueryKeys('posts', {
  all: {
    queryKey: null,
    queryFn: postAPI.fetchPosts,
    contextQueries: {
      odd: {
        queryKey: null,
        queryFn: postAPI.fetchPosts,
      },
    },
  },
  detail: (postId: string) => ({
    queryKey: [postId],
    queryFn: () => postAPI.fetchPostDetail(postId),
  }),
});

export default posts;
