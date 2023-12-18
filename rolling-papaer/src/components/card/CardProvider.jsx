import { createContext, useContext, useState } from "react";

const CardContext = createContext();

const defaultCardValue = {
    sender: "홍길동",
    profileImageURL: "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "동료",
    content: `일교차가 큰 시기입니다. 새벽에는 겨울, 한낮에는 여름, 아침저녁으로는 가을을 느껴보는 것도 좋을 것 같아요. 일교차가 큰 시기입니다. 새벽에는 겨울, 한낮에는 여름, 아침저녁으로는 가을을 느껴보는 것도 좋은`,
    font: "Noto Sans",
    createdAt: "2023-12-12T06:42:43.340806Z"
}

export function CardProvider({ defaultValue = defaultCardValue, children }) {
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