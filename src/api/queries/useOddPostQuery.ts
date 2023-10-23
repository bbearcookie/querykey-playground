import { useQuery } from '@tanstack/react-query';
import queryKeys from '../queryKeys';

const useOddPostQuery = (maxLength: number) => {
  const query = useQuery({
    ...queryKeys.posts.all._ctx.odd,
    retry: 2,
    gcTime: 1000 * 60 * 60 * 24,
  });

  const filteredData = query.data?.filter((post) => post.id % 2).slice(0, maxLength);

  return { ...query, data: filteredData };
};

export default useOddPostQuery;
