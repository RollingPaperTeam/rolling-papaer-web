import { Link } from "react-router-dom";
import logo from "../../static/Logo.png";
import styled from "styled-components";
import NavButton from "./NavButton";

const Nav = styled(BaseNav)`
  padding: 1.1rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 5rem);
`;
const Logo = styled.img`
  width: 10.6rem;
  height: 3rem;
`;
const NavBorderLine = styled.div`
  width: 100%;
  border: 0.1rem solid var(--gray2);
`;

function BaseNav({ className }) {
  return (
    <>
      <div className={className}>
        <Link to="/">
          <Logo src={logo} alt="롤링페이퍼 로고" />
        </Link>
        <Link to="/post">
          <NavButton children={"롤링 페이퍼 만들기"} />
        </Link>
      </div>
      <NavBorderLine />
    </>
  );
}

export default Nav;
