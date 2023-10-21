import { useQuery } from '@tanstack/react-query';
import { queryKey } from '@/api/queryKey';
import './App.css';

function App() {
  const { data } = useQuery({ ...queryKey.posts.all() });

  console.log(data);

  return <></>;
}

export default App;
