import {
  DefaultError,
  QueryKey,
  WithRequired,
  QueryObserverOptions,
  InfiniteQueryObserverOptions,
  QueryObserverResult,
  DefinedQueryObserverResult,
  InfiniteQueryObserverResult,
  DefinedInfiniteQueryObserverResult,
  MutationObserverOptions,
  MutateFunction,
  MutationObserverResult,
} from '@tanstack/query-core';

import { UseQueryOptions, UseBaseQueryOptions } from '@tanstack/react-query';
import { posts } from './posts';
import { comments } from './comments';

// interface UseQueryOptions<
//   TQueryFnData = unknown,
//   TError = DefaultError,
//   TData = TQueryFnData,
//   TQueryKey extends QueryKey = QueryKey
// > extends Omit<
//     WithRequired<UseBaseQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>, 'queryKey'>,
//     'suspense'
//   > {}

// export type QueryPair<TData = unknown> = Pick<UseBaseQueryOptions<TData>, 'queryKey' | 'queryFn'>;
export type QueryPair<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Pick<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>;

const queryStore = {
  posts,
  comments,
};

export default queryStore;
