import { createContext, useContext, useState } from "react";

const CardContext = createContext();

export function CardProvider({ defaultValue , children }) {
  const [contextValue, setContextValue] = useState(defaultValue);
  return (
    <CardContext.Provider
      value={{
        contextValue,
//        setContextValue,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}


export function useCardContextValue(){
    const context = useContext(CardContext);
    
    if(!context){
        throw new Error("반드시 CardContext 내부에서 사용할 것");
    }
    
    return context.contextValue;
}

function useSetCardContextValue(){
    const context = useContext(CardContext);
    
    if(!context){
        throw new Error("반드시 CardContext 내부에서 사용할 것");
    }
    
    return context.setContextValue;
}

export default CardContext;