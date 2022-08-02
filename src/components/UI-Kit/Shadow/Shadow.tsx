import { PageShadow } from "./Shadow.style";

type TProps = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Shadow = ({ isActive, setIsActive }: TProps) => {
  const handleOnClickShadow = () => {
    setIsActive((isActive: boolean) => !isActive);
  };

  return <PageShadow isActive={isActive} onClick={handleOnClickShadow} />;
};
