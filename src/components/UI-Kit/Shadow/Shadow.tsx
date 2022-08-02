import PropTypes from "prop-types";
import { PageShadow } from "./Shadow.style";

const Shadow = ({ isActive, setIsActive }: any) => {
  return (
    <PageShadow isActive={isActive} onClick={() => setIsActive(!isActive)} />
  );
};

Shadow.propTypes = {
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func,
};

export default Shadow;
