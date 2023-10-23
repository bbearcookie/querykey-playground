import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { posts } from '@/api/queries/posts';
import queryKey from './api/queryKey';
import './App.css';

function App() {
  const { data: postList } = useQuery({ ...posts.all, retry: 2 });
  const { data: postDetail } = useQuery({ ...queryKey.posts.detail('5'), retry: 0, refetchOnWindowFocus: false });
  const { data: commentDetail } = useSuspenseQuery({ ...queryKey.comments.detail('3') });

  return <></>;
}

export default App;
