import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@components/Container/Container.style";
import { Burger } from "./Burger";
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
      document.body.classList.toggle("block_scroll");
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
                <NavLink to="characters">Characters</NavLink>
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
