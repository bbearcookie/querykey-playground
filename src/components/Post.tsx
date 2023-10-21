import { useSuspenseQuery } from '@tanstack/react-query';
import { posts } from '@/api/queries/posts';

const Post = () => {
  const { data } = useSuspenseQuery({ ...posts.detail('5') });

  console.log(data);

  return <></>;
};

export default Post;
