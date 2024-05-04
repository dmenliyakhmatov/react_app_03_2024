import { useEffect, useState } from 'react';
import { get } from '../transport';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    get(url)
      .then(({ data }) => {
        setData(data);
      })
      .catch(err => {
        setError(err.message);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
};
