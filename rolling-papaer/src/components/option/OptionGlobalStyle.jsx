import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import { ColorContext } from "./OptionContext";
import { ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

const OptionGlobalStyle = () => {
  const { currentColor } = useContext(ColorContext);

  return (
    <ThemeProvider theme={{ backgroundColor: currentColor }}>
       <GlobalStyle />
    </ThemeProvider>
   
  );
};

export default OptionGlobalStyle;
