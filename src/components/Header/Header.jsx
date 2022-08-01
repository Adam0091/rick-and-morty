import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Container } from "@components/Container/Container";
import Burger from "./Burger";
import {
  HeaderContainer,
  HeaderWrapper,
  ListStyle,
  NavContainer,
} from "./Header.style";

import logo from "./img/header_logo.png";

const Header = ({ canScroll, setCanScroll }) => {
  const [isActive, setIsActive] = useState(false);

  const handlerBurger = (value) => {
    setIsActive(value);
    setCanScroll(!canScroll);
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <img src={logo} alt="logo" />
          <NavContainer>
            <ListStyle
              isActive={isActive}
              onClick={() => handlerBurger(!isActive)}
            >
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

Header.propTypes = {
  canScroll: PropTypes.bool,
  setCanScroll: PropTypes.func,
};

export default Header;
