import { useQuery, useSuspenseQuery, useMutation } from '@tanstack/react-query';
import useModifyPost from './api/mutations/useModifyPost';
import postAPI from './api/functions/postAPI';
import queryKey from './api/queryKey';
import './App.css';

function App() {
  const { data: postList } = useQuery({ ...queryKey.posts.all });
  const { data: postDetail } = useQuery({ ...queryKey.posts.detail('5') });
  const { data: commentDetail } = useSuspenseQuery({ ...queryKey.comments.detail('3') });

  const { mutate: addPost } = useMutation({ mutationFn: postAPI.addPost });
  const { mutate: modifyPost } = useModifyPost();

  const handleAddPost = () => {
    addPost({ id: 1, title: 'title', body: 'body', userId: 1 });
  };

  const handleModifyPost = () => {
    modifyPost({ id: 1, title: 'title', body: 'body', userId: 1 });
  };

  return (
    <div>
      <button onClick={handleAddPost}>게시글 추가 요청</button>
      <button onClick={handleModifyPost}>게시글 수정 요청</button>
    </div>
  );
}

export default App;
