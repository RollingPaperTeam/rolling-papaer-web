import { createContext, useState } from "react";

const ColorContext = createContext();

const OptionProvider = ({ children }) => {
  const savedColor = localStorage.getItem('currentColor') || '';
  const [currentColor, setCurrentColor] = useState(savedColor);
  
  const setNewColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('currentColor', color);
  }

  return (
    <ColorContext.Provider value={{ currentColor, setNewColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, OptionProvider };
