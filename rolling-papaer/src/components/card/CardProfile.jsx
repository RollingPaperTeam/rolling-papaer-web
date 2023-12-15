import styled from "styled-components";
import { CardProfileNameBlock } from "./CardProfileName";
import { RelationBadgeBlock } from "../badge/RelationBadge";

const CardProfileBlock = styled.header`
  width: fit-content;
  display: grid;
  gap: 6px 14px;

  ${CardProfileNameBlock} {
    grid-row: 1;
    grid-column: 2;
  }
  ${RelationBadgeBlock} {
    grid-row: 2;
    grid-column: 2;
  }
`;

function CardProfile({ children }) {
  return <CardProfileBlock>{children}</CardProfileBlock>;
}

export default CardProfile;
