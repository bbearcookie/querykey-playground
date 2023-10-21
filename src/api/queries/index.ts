import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { comments } from './comments';
import { posts } from './posts';

export const queryKeys = mergeQueryKeys(comments, posts);
