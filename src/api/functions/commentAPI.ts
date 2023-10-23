import { baseInstance } from '../instance';
import { Comment } from '@/types/index';

const commentAPI = {
  fetchComments: async () => {
    const { data } = await baseInstance.get<Comment[]>('/comments');
    return data;
  },
  fetchCommentDetail: async (commentId: string) => {
    const { data } = await baseInstance.get<Comment>(`/comments/${commentId}`);
    return data;
  },
};

export default commentAPI;
