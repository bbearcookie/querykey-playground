import { useSuspenseQuery } from '@tanstack/react-query';
import queryStore from '@/api/queryStore';

const Post = () => {
  const { data } = useSuspenseQuery({ ...queryStore.posts.all() });

  console.log(data);

  return <></>;
};

export default Post;
