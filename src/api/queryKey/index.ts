import { UseQueryOptions } from '@tanstack/react-query';
import { posts } from './posts';

export type IQueryKey = Pick<UseQueryOptions, 'queryKey' | 'queryFn'>;

export const queryKey = {
  posts,
};
