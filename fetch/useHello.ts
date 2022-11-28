import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useHello = () => {
  const { data, error } = useSWR(`/api/hello.json`, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
