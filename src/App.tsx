import { useQuery } from '@tanstack/react-query';
import queryStore from '@/api/queryStore';
import './App.css';

function App() {
  const { data } = useQuery({ ...queryStore.posts.all() });

  console.log(data);

  return <></>;
}

export default App;
