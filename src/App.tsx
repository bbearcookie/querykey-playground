import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/api/queries';
import { posts } from '@/api/queries/posts';
import './App.css';

function App() {
  const { data: postList } = useQuery({ ...posts.all });
  const { data: postDetail } = useQuery({ ...queryKeys.posts.detail('5') });
  const { data: commentDetail } = useQuery({ ...queryKeys.comments.detail('3') });

  return <></>;
}

export default App;
