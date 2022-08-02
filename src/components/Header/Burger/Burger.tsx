import PropTypes from "prop-types";

import { BurgerContainer } from "./Burger.style";

const Burger = ({ isActive, setIsActive }: any) => {
  return (
    <BurgerContainer isActive={isActive} onClick={() => setIsActive(!isActive)}>
      <span></span>
    </BurgerContainer>
  );
};

Burger.propTypes = {
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func,
};

export default Burger;
