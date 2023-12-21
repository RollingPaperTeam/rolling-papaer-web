import styled from "styled-components";
import FONTS from "../../theme/font";
import RelationBadge from "../badge/RelationBadge";
import ButtonStyle from "../button/ButtonStyle";
import img from "../../static/person.svg";
import { useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { createdAtToDate } from "../../utils/timeformatUtil";

const GlobalStyle = createGlobalStyle`
  body {
    &::before {
      content: '';
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: background-color 0.5s;
      z-index: 9998;
      background-color: ${({ $ModalOpen }) =>
        $ModalOpen ? "#00000099" : "transparent"};
    }
  }
`;

const ModalContainer = styled.div`
  visibility: ${({ $ModalOpen }) => ($ModalOpen ? "visible" : "hidden")};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60rem;
  padding: 4rem 4.5rem;
  opacity: ${({ $ModalOpen }) => ($ModalOpen ? "1" : "0")};
  border-radius: 1.6rem;
  transition: visibility 0.5s;
  box-shadow: 0px 2px 12px 0px #00000014;
  background-color: var(--white);
  z-index: 9999;
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

  overscroll-behavior: contain;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

function Modal({ cardData, setModalVisible }) {
  const [$ModalOpen, setModalOpen] = useState(true);
  const { sender, relationship, createdAt, content } = cardData;
  const modalContentRef = useRef();

  //TODO:  HOOK써서 밖으로 빼낼 수 있을 듯
  // modal 실행시 scroll을 불가능하게 하는 hook
  useEffect(() => {
    const preventScroll = (e) => {
      if (modalContentRef.current && modalContentRef.current.contains(e.target)) {
        // 모달 내부에서의 스크롤 이벤트는 버블링을 막습니다.
        return;
      }
  
      // 키보드 이벤트 및 외부 스크롤 이벤트 방지
      if (
        e.type === "keydown" &&
        (e.keyCode === 32 || e.keyCode === 40 || e.keyCode === 38)
      ) {
        e.preventDefault();
      } else if (e.type === "wheel" || e.type === "touchmove") {
        e.preventDefault();
      }
    };
  
    // 이벤트 리스너 추가
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("keydown", preventScroll, { passive: false });
  
    // 클린업 함수로 이벤트 리스너 제거
    return () => {
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("keydown", preventScroll);
    };
  }, [$ModalOpen]);
  

  const handleClickOpen = () => {
    setModalVisible(true);
    setModalOpen(true);
  };

  const handleClickClose = () => {
    setModalVisible(false);
    setModalOpen(false);
  };

  return (
    <>
      <GlobalStyle $ModalOpen={$ModalOpen} />
      <ModalContainer $ModalOpen={$ModalOpen}>
        <InfoContainer>
          <UserInfo>
            <div>
              <ProfileImg src={img} alt="프로필 이미지" />
            </div>
            <div>
              <From>
                From. <span>{sender}</span>
              </From>
              <RelationBadge relation={relationship} />
            </div>
          </UserInfo>
          <Date>{createdAt}</Date>
        </InfoContainer>
        <Content ref={modalContentRef}>
          <p>{content}</p>
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
    </>
  );
}

export default Modal;
