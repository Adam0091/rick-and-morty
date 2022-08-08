import { useState } from "react";
import { NavLink } from "react-router-dom";
import { routePath } from "@constants/routePath";

import { Burger } from "./Burger";

import { Container } from "@styled_componets/Container.style";
import {
  HeaderContainer,
  HeaderWrapper,
  ListStyle,
  NavContainer,
} from "./Header.style";

import logo from "@assets/images/header_logo.png";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handlerBurger = () => {
    if (window.innerWidth <= 767)
      document.body.classList.toggle("block-scroll");
    setIsActive(!isActive);
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <img src={logo} alt="logo" />
          <NavContainer>
            <ListStyle isActive={isActive} onClick={handlerBurger}>
              <li>
                <NavLink to={routePath.characters}>Characters</NavLink>
              </li>
              <li>
                <NavLink to={routePath.locations}>Locations</NavLink>
              </li>
              <li>
                <NavLink to={routePath.episodes}>Episodes</NavLink>
              </li>
            </ListStyle>
            <Burger isActive={isActive} setIsActive={handlerBurger} />
          </NavContainer>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};
