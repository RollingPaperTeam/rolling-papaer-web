import styled from "styled-components";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import CardProfile from "./CardProfile";
import CardProfileName from "./CardProfileName";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import { CardProvider } from "./CardProvider";
import CardRelationBadge from "./CardRelationBadge";
import { ButtonPlus, PlusIcon } from "../button/Button";

const Divider = styled.div`
  width: ${({ width }) => width ?? `100%`};
  height: 1px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? THEME_LIGHT_COLOR.gray1};
`;

const CardBlock = styled.article`
  width: 384px;
  height: 280px;
  padding: 28px 24px 24px;
  position: relative;
  background-color: ${THEME_LIGHT_COLOR.white};
  border-radius: 16px;
  box-shadow: 0px 2px 12px ${THEME_LIGHT_COLOR.gray1};

  ${Divider} {
    margin: 15px 0px 16px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20px var(--gray3);
    animation: sizePulsate ease-in-out 1s infinite;
  }

  @keyframes sizePulsate {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.02, 1.02);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

const CenteredButtonPlus= styled(ButtonPlus)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

function Card({ cardData, onClick, saveCardDataFunc = (cardData) => {} }) {

  const cardBlockOnClickHandler = () => {
    if (cardData) {
      saveCardDataFunc(cardData);
    }
    onClick();
  };

  if (cardData) {
    return (
      <CardProvider defaultValue={cardData}>
        <CardBlock onClick={cardBlockOnClickHandler}>
          <CardProfile>
            {/*//TODO: Profile컴포넌트*/}
            <CardProfileName name={"홍길동"} />
            <CardRelationBadge />
          </CardProfile>
          <Divider />
          <CardContent />
          <CardFooter />
        </CardBlock>
      </CardProvider>
    );
  } else {
    return (
      <CardBlock onClick={cardBlockOnClickHandler}>
        <CenteredButtonPlus type="button">
          <PlusIcon />
        </CenteredButtonPlus>
      </CardBlock>
    );
  }
}

export default Card;
