import styled from "styled-components";
import FONTS from "../../theme/font";
import RelationBadge from "../badge/RelationBadge";
import ButtonStyle from "../button/ButtonStyle";
import img from "../../static/person.svg";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: background-color 0.5s;
      z-index: -1;
      background-color: ${({ ModalOpen }) =>
        ModalOpen ? "#00000099" : "transparent"};
    }
  }
`;

const ModalContainer = styled.div`
  visibility: ${({ ModalOpen }) => ModalOpen ? "visible" : "hidden"};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60rem;
  padding: 4rem 4.5rem;
  opacity: ${({ ModalOpen }) => ModalOpen ? "1" : "0"};
  border-radius: 1.6rem;
  transition: visibility 0.5s;
  box-shadow: 0px 2px 12px 0px #00000014;
  background-color: var(--white);
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 1.9rem 0;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const ProfileImg = styled.img`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;
  border: 1px solid var(--gray2);
  object-fit: cover;
`;

const From = styled.p`
  ${FONTS.FONT_20_REGULAR}
  margin: 0 0 0.6rem 0;

  span {
    ${FONTS.FONT_20_BOLD}
  }
`;

const Date = styled.span`
  ${FONTS.FONT_14_REGULAR}
  color: var(--gray4);
`;

const Content = styled.div`
  position: relative;
  margin: 1.6rem 0 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: -1.6rem;
    width: 100%;
    height: 1px;
    background-color: var(--gray2);
  }

  p {
    margin: 0;

    ${FONTS.FONT_18_REGULAR}
    overflow: hidden;
    overflow-y: scroll;
    height: 24rem;
    margin: 0 0 2.4rem 0;

    &::-webkit-scrollbar {
      width: 0.4rem;
      height: 10rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.8rem;
      background-color: var(--gray3);
    }
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

function Modal() {
  const [ModalOpen, setModalOpen] = useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClickClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <GlobalStyle ModalOpen={ModalOpen}/>
      <ModalContainer ModalOpen={ModalOpen}>
        <InfoContainer>
          <UserInfo>
            <div>
              <ProfileImg src={img} alt="프로필 이미지" />
            </div>
            <div>
              <From>
                From. <span>김동훈</span>
              </From>
              <RelationBadge />
            </div>
          </UserInfo>
          <Date>2023.07.08</Date>
        </InfoContainer>
        <Content>
          <p>
            코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
            하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두
            조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력
            모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강,
            체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요.
            건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는
            요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을
            부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시
            기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가
            또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
            하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두
            조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력
            모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강,
            체력 모두 조심 또 하세요!
          </p>
        </Content>
        <ButtonContainer>
          <ButtonStyle
            $primary="primary"
            size="medium"
            fontSize="fontSize16"
            $padding="padding16"
            onClick={handleClickClose}
          >
            확인
          </ButtonStyle>
        </ButtonContainer>
      </ModalContainer>

      <button type="button" onClick={handleClickOpen}>
        버튼
      </button>
    </>
  );
}

export default Modal;
