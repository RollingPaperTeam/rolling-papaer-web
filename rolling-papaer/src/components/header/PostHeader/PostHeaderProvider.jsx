import { createContext, useContext, useState } from "react";

const PostHeaderContext = createContext();

export function PostHeaderProvider({ defaultValue, children }) {
  const [contextValue] = useState(defaultValue);

  return (
    <PostHeaderContext.Provider value={{ contextValue }}>
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
