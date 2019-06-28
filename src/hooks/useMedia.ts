import { useCallback, useEffect, useState } from "react";

export const useMedia = <T>(
  queries: string[],
  values: T[],
  defaultValue: T
) => {
  const mqls = queries.map(q => window.matchMedia(q));

  const getValue = useCallback(() => {
    const index = mqls.findIndex(mql => mql.matches);
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  }, [defaultValue, mqls, values]);

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mqls.forEach(mql => mql.addListener(handler));
    return () => mqls.forEach(mql => mql.removeListener(handler));
  }, [getValue, mqls]);

  return value;
};
