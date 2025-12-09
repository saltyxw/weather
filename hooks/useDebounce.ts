import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delayms: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(value);
    }, delayms);

    return () => {
      clearTimeout(t);
    };
  }, [value, delayms]);
  return debouncedValue;
}

export default useDebounce;
