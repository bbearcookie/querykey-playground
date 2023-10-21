import axios from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';
import queryStore from '@/api/queryStore';

const Post = () => {
  const { data } = useSuspenseQuery({ ...queryStore.posts.detail('2') });

  console.log(data);

  return <></>;
};

export default Post;
