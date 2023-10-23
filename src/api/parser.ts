import { AxiosResponse } from 'axios';

export const parseResponse = <T = any, D = any>(response: AxiosResponse<T, D>) => {
  const { data, status } = response;
  return { ...data, status };
};
