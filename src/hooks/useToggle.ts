import { useCallback, useState } from 'react';

export const useToggle = (initValue: boolean) => {
  const [value, setValue] = useState(initValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, toggle, setTrue, setFalse] as const;
};
