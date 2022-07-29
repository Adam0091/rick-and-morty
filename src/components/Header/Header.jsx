import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import {
  HeaderContainer,
  HeaderWrapper,
  ListStyle,
  NavContainer,
} from "./Header.style";

import logo from "./img/header_logo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <img src={logo} alt="logo" />
          <NavContainer>
            <ListStyle>
              <li>
                <NavLink to="">Characters</NavLink>
              </li>
              <li>
                <NavLink to="">Locations</NavLink>
              </li>
              <li>
                <NavLink to="">Episodes</NavLink>
              </li>
            </ListStyle>
          </NavContainer>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
