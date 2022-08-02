import { PageShadow } from "./Shadow.style";

export const Shadow = ({ isActive, setIsActive }: any) => {
  const handleOnClickShadow = () => {
    setIsActive((isActive: boolean) => !isActive);
  };

  return <PageShadow isActive={isActive} onClick={handleOnClickShadow} />;
};
