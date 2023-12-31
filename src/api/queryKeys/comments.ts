import { createQueryKeys } from '@lukemorales/query-key-factory';
import commentAPI from '../functions/commentAPI';

const comments = createQueryKeys('comments', {
  all: {
    queryKey: null,
    queryFn: commentAPI.fetchComments,
  },
  detail: (commentId: string) => ({
    queryKey: [commentId],
    queryFn: () => commentAPI.fetchCommentDetail(commentId),
  }),
});

export default comments;
