//ASK: RelationBadge에는 섣불리 CardContext관련 변수를 넣기가 좀 그래서..
// RelationBadge에 cardContext를 활용한 wrap 컴포넌트 생성

import RelationBadge from "../badge/RelationBadge";
import { useCardContextValue } from "./CardProvider";

function CardRelationBadge() {
  const { relationship } = useCardContextValue();

  return <RelationBadge relation={relationship} />;
}

export default CardRelationBadge;
