import { useCallback, useState } from "react";

const useAsync = (asyncFunction) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const wrappedFunction = useCallback(
    async (...args) => {
      try {
        setIsLoading(true);
        setIsError(false);

        return await asyncFunction(...args);
      } catch (e) {
        setIsError(true);
        return;
      } finally {
        setIsLoading(false);
      }
    },
    [asyncFunction]
  );

  return [isLoading, isError, wrappedFunction];
};

export default useAsync;
