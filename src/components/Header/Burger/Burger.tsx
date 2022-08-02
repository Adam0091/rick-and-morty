import { BurgerContainer } from "./Burger.style";

export const Burger = ({ isActive, setIsActive }: any) => {
  return (
    <BurgerContainer isActive={isActive} onClick={() => setIsActive(!isActive)}>
      <span></span>
    </BurgerContainer>
  );
};
