import styled from "styled-components";
import FONTS from "../../theme/font";
import RelationBadge from "../badge/RelationBadge";
import ButtonStyle from "../button/ButtonStyle";
import img from "../../static/person.svg";

const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60rem;
  padding: 4rem 4.5rem;
  border-radius: 1.6rem;
  box-shadow: 0px 2px 12px 0px #00000014;
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
  return (
    <>
      <ModalContainer>
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
          >
            확인
          </ButtonStyle>
        </ButtonContainer>
      </ModalContainer>
    </>
  );
}

export default Modal;
