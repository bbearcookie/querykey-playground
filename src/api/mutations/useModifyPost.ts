import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Post } from '@/types';
import postAPI from '../functions/postAPI';
import queryKeys from '../queryKeys';

const useModifyPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postAPI.modifyPost,
    onMutate: async (post) => {
      const { queryKey } = queryKeys.posts.detail(`${post.id}`);
      await queryClient.cancelQueries(queryKeys.posts.detail(`${post.id}`));

      const previousPost = queryClient.getQueryData<Post>(queryKey);

      queryClient.setQueryData<Post>(queryKey, post);

      return { previousPost };
    },
    onError: (err, post, context) => {
      queryClient.setQueryData<Post>(queryKeys.posts.detail(`${post.id}`).queryKey, context?.previousPost);
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.posts.all);
    },
  });
};

export default useModifyPost;
