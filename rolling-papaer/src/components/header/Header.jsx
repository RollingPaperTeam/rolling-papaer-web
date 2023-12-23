import Nav from "./Nav";

function Header({ children, className }) {
  return <Nav className={className}>{children}</Nav>;
}

export default Header;
