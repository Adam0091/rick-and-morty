import { BurgerContainer } from "./Burger.style";

export const Burger = ({ isActive, setIsActive }: any) => {
  const handleOnClickBurger = () => {
    setIsActive((isActive: boolean) => !isActive!);
  };

  return (
    <BurgerContainer isActive={isActive} onClick={handleOnClickBurger}>
      <span></span>
    </BurgerContainer>
  );
};
