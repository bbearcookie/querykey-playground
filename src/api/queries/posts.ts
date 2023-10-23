import { createQueryKeys } from '@lukemorales/query-key-factory';
import postAPI from '../functions/postAPI';

export const posts = createQueryKeys('posts', {
  all: {
    queryKey: null,
    queryFn: postAPI.fetchPosts,
  },
  detail: (postId: string) => ({
    queryKey: [postId],
    queryFn: () => postAPI.fetchPostDetail(postId),
  }),
});
