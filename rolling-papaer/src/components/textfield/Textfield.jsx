import styled from "styled-components";
import { useEffect, useState } from "react";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import { FONTS } from "../../theme/font";

const Container = styled.div`
  input {
    outline: none;
    display: block;
    width: 32rem;
    margin: 1rem 0 0;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
  }
`;

const Default = styled.input`
  border: 1px solid ${THEME_LIGHT_COLOR.gray3};
  color: ${THEME_LIGHT_COLOR.gray5};

  &:focus {
    color: ${THEME_LIGHT_COLOR.gray9};
    border: 2px solid ${THEME_LIGHT_COLOR.gray5};
  }

  &:active {
    color: ${THEME_LIGHT_COLOR.gray9};
    border: 2px solid ${THEME_LIGHT_COLOR.gray7};
  }

  &:hover {
    color: ${THEME_LIGHT_COLOR.gray5};
    border: 1px solid ${THEME_LIGHT_COLOR.gray5};
  }

  &:disabled {
    color: ${THEME_LIGHT_COLOR.gray9};
    border: 1px solid ${THEME_LIGHT_COLOR.gray3};
    background-color: ${THEME_LIGHT_COLOR.gray1};
  }
`;

const Error = styled.div`
  input {
    border: ${({ error }) => error ? `1px solid ${THEME_LIGHT_COLOR.error}` : `1px solid ${THEME_LIGHT_COLOR.gray3}`};
  }

  p {
    margin: 0.4rem 0 0;
    color: ${THEME_LIGHT_COLOR.error};
    font-size: ${FONTS.FONT_12_REGULAR};
  }
`;

function Textfield() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setErrorMessage("Error Massage");
    setDisabled(true);
    setError(true);
  }, []);

  return (
    <Container>
      <Default type="text" placeholder="Placeholder" />
      <Default type="text" placeholder="Placeholder" disabled={disabled} />
      <Error error={error}>
        <input type="text" placeholder="Placeholder"/>
        {errorMessage && <p>{errorMessage}</p>}
      </Error>
    </Container>
  );
}

export default Textfield;
