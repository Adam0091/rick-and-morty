import { BurgerContainer } from "./Burger.style";

type TProps = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Burger = ({ isActive, setIsActive }: TProps) => {
  const handleOnClickBurger = () => {
    setIsActive((isActive: boolean) => !isActive);
  };

  return (
    <BurgerContainer isActive={isActive} onClick={handleOnClickBurger}>
      <span></span>
    </BurgerContainer>
  );
};
