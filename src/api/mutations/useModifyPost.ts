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

      // 이미 Fetching 중인 데이터가 있다면 낙관적 업데이트로 미리 반영한 값을 덮어씌울 가능성이 있기에, cancel 합니다.
      await queryClient.cancelQueries(queryKeys.posts.detail(`${post.id}`));

      // 이전 데이터를 저장해둡니다.
      const previousPost = queryClient.getQueryData<Post>(queryKey);

      // 새로운 데이터를 미리 반영합니다.
      queryClient.setQueryData<Post>(queryKey, post);

      // 이전 데이터를 반환합니다. 이 값은 나중에 에러 발생시 데이터를 원상복구 하는데 사용됩니다.
      return { previousPost };
    },
    onError: (err, post, context) => {
      // 이전 데이터로 롤백합니다.
      queryClient.setQueryData<Post>(queryKeys.posts.detail(`${post.id}`).queryKey, context?.previousPost);
    },
    onSettled: () => {
      // 모든 포스트에 대한 쿼리를 업데이트합니다.
      queryClient.invalidateQueries(queryKeys.posts.all);
    },
  });
};

export default useModifyPost;
