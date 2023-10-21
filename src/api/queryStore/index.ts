import { posts } from './posts';
import type { UseQueryOptions, QueryKey, DefaultError } from '@tanstack/react-query';
import type { QueryFunction } from '@tanstack/query-core';
import { queries } from '../factory';

const queryStore: Record<string, Record<string, (...args: any[]) => UseQueryOptions>> = {
  posts,
};

// export const createQuery = <T>(options: { queryKey: unknown[]; queryFn: QueryFunction<T> }) => ({
//   ...options,
// });

export const createQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  options: Pick<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
) => ({
  ...options,
});

export type QueryObject<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Pick<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>;

export default queryStore;
