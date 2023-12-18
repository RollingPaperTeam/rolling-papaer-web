import { Link } from "react-router-dom";
import logo from "../../static/Logo.png";
import styled from "styled-components";
import ButtonStyle from "../button/ButtonStyle";

const Nav = styled(BaseNav)`
  justify-content: ${({ children }) =>
    children ? "space-between" : "flex-start"};
  padding: 1.1rem 36rem;
  max-width: 192rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 10.6rem;
  height: 3rem;
`;
const NavBorderLine = styled.div`
  width: 100%;
  border: 0.1rem solid var(--gray2);
`;

function BaseNav({ className, children }) {
  return (
    <>
      <nav className={className}>
        <Link to="/">
          <Logo src={logo} alt="롤링페이퍼 로고" />
        </Link>
        {children && (
          <Link to="/post">
            <ButtonStyle
              children={children}
              $outlined="outlined"
              fontSize="fontSize16"
              $borderRadius="borderRadius6"
              size="medium"
              $hover="outlined"
              $active="outlined"
              $focus="outlined"
            />
          </Link>
        )}
      </nav>
      <NavBorderLine />
    </>
  );
}

export default Nav;
