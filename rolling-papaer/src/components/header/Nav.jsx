import { Link } from "react-router-dom";
import logo from "../../static/Logo.png";
import styled from "styled-components";

const Nav = styled(BaseNav)`
  ${({ children }) =>
    children
      ? "justify-content: space-between"
      : "justify-content: flex-start"};

  ${({ children }) =>
    children
      ? "padding: 1.1rem 35.6rem 1.3rem 35.7rem"
      : "padding: 1.1rem 36rem 1.3rem"};

  max-width: 192rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: var(--white);
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
        <Link to="/">
          <Logo src={logo} alt="롤링페이퍼 로고" />
        </Link>
        <HeaderContent>{children}</HeaderContent>
      </nav>
      <NavBorderLine />
    </>
  );
}

export default Nav;
