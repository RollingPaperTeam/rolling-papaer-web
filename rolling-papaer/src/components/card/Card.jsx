import styled from "styled-components";
import { THEME_LIGHT_COLOR } from "../../theme/color";
import CardProfile from "./CardProfile";
import RelationBadge from "../badge/RelationBadge";
import CardProfileName from "./CardProfileName";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

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
  background-color: ${THEME_LIGHT_COLOR.white};
  border-radius: 16px;
  box-shadow: 0px 2px 12px ${THEME_LIGHT_COLOR.gray1};

  ${Divider} {
    margin: 15px 0px 16px;
  }
`;
const tempContent = `일교차가 큰 시기입니다. 새벽에는 겨울, 한낮에는 여름, 아침저녁으로는 가을을 느껴보는 것도 좋을 것 같아요. 일교차가 큰 시기입니다. 새벽에는 겨울, 한낮에는 여름, 아침저녁으로는 가을을 느껴보는 것도 좋은`;

function Card() {
  return (
    
    <CardBlock>
      <CardProfile>
        {/*//TODO: Profile컴포넌트*/}
        <CardProfileName name={"홍길동"} />
        <RelationBadge />
      </CardProfile>
      <Divider />
      <CardContent>
        <p>{tempContent}</p>
      </CardContent>
      <CardFooter/>
    </CardBlock>
  );
}

export default Card;
