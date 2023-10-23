import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import comments from './comments';
import posts from './posts';

const queryKeys = mergeQueryKeys(comments, posts);

export default queryKeys;
