import styled from "styled-components";

export const LogoWrapper = styled.div`
  margin-top: 26px;

  height: 100%;
  max-height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;

    max-width: 600px;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;

  margin-top: 16px;
`;

export const WrapperInputSearch = styled.div`
  display: flex;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 16px;

  column-gap: 8px;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  input,
  input:focus {
    outline: none;
    border: none;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    /* grey */

    color: rgba(0, 0, 0, 0.5);
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 60px;
`;

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 154px;
  height: 36px;

  background: #f2f9fe;
  border: none;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #2196f3;

  transition: all 0.15s ease-in;

  &:hover {
    background: #2196f3;
    color: #f2f9fe;
  }
`;
