import { PageShadow } from "./Shadow.style";

export const Shadow = ({ isActive, setIsActive }: any) => {
  return (
    <PageShadow isActive={isActive} onClick={() => setIsActive(!isActive)} />
  );
};
