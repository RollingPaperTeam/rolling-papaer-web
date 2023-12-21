import { createContext, useContext, useEffect, useState } from "react";
import useAsync from "../../../hooks/NetworkHook";
import { getRecipient } from "../../../api/api";

const PostHeaderContext = createContext();

export function PostHeaderProvider({
  recipientId,
  defaultValue = {},
  children,
}) {
  const [contextValue, setContextValue] = useState(defaultValue);
  const [isLoading, isError, getRecipientWrapped] = useAsync(getRecipient);

  useEffect(() => {
    (async () => {
      try {
        const result = await getRecipientWrapped(recipientId);
        setContextValue(result);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <PostHeaderContext.Provider value={{ contextValue, isLoading, isError }}>
      {children}
    </PostHeaderContext.Provider>
  );
}

export function usePostHeaderContextValue() {
  const context = useContext(PostHeaderContext);

  if (!context) {
    throw new Error("반드시 PostHeaderContext 내부에서 사용할 것");
  }

  return context.contextValue;
}
