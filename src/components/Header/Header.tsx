import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@/components/Container/Container.style";
import Burger from "./Burger";
import {
  HeaderContainer,
  HeaderWrapper,
  ListStyle,
  NavContainer,
} from "./Header.style";

import logo from "./img/header_logo.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handlerBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <img src={logo} alt="logo" />
          <NavContainer>
            <ListStyle isActive={isActive} onClick={() => handlerBurger()}>
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
            <Burger isActive={isActive} setIsActive={handlerBurger} />
          </NavContainer>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
