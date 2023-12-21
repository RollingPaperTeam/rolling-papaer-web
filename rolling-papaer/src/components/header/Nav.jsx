import { Link } from "react-router-dom";
import logo from "../../static/Logo.png";
import styled from "styled-components";
import mediaQuery from "../../theme/mediaQuery";

const Nav = styled(BaseNav)`
  background-color: var(--white);
`;
//TODO: 백그라운드컬러 Nav영역에 번짐

const NavContainer = styled.div`
  ${({ children }) =>
    children
      ? "justify-content: space-between"
      : "justify-content: flex-start"};
  width: calc(100% - 4.8rem);
  max-width: 120.7rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: var(--white);
  height: 6.5rem;
  ${mediaQuery.mobile} {
    width: calc(100% - 4rem);
  }
`;
const Logo = styled.img`
  width: 10.6rem;
  height: 3rem;
`;
const NavBorderLine = styled.div`
  width: 100%;
  border: 0.1rem solid var(--gray2);
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

function BaseNav({ className, children }) {
  return (
    <>
      <nav className={className}>
        <NavContainer>
          <Link to="/">
            <Logo src={logo} alt="롤링페이퍼 로고" />
          </Link>
          <HeaderContent>{children}</HeaderContent>
        </NavContainer>
      </nav>
      <NavBorderLine />
    </>
  );
}

export default Nav;
