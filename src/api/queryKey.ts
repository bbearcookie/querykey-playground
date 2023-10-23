import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import comments from './queries/comments';
import posts from './queries/posts';

const queryKey = mergeQueryKeys(comments, posts);

export default queryKey;
