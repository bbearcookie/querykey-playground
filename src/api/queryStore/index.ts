import { UseQueryOptions } from '@tanstack/react-query';
import { posts } from './posts';
import { comments } from './comments';

export type QueryPair = Pick<UseQueryOptions, 'queryKey' | 'queryFn'>;

export const queryStore = {
  posts,
  comments,
};
