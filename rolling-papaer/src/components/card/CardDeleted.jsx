import { ButtonDeleted, DeletedIcon } from "../button/Button";
import styled from "styled-components";

const Container = styled.div`
  ${ButtonDeleted} {
    position: absolute;
    top: 2.8rem;
    right: 2.4rem;
  }
`;

function CardDeleted({ onClick }) {
  return (
    <Container onClick={onClick}>
      <ButtonDeleted>
        <DeletedIcon />
      </ButtonDeleted>
    </Container>
  );
}

export default CardDeleted;
