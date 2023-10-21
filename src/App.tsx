import { useQuery } from '@tanstack/react-query';
import queryStore from '@/api/queryStore';
import './App.css';

function App() {
  const { data } = useQuery({ ...queryStore.posts.all() });
  // const { data } = useQuery({ ...posts.all() });
  // const { data } = useQuery({ ...queries.posts.detail('5') });

  // const { data } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: async () => {
  //     const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  //     return data;
  //   },
  // });

  // const { data } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: fetchPosts,
  // });

  console.log(data);

  return <></>;
}

export default App;
