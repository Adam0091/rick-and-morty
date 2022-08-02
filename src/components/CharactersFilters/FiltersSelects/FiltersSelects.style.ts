import styled from "styled-components";

export const WrapperSelects = styled.div<{IsActive: boolean}>`
  flex: 0 1 75%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  row-gap: 20px;

  @media screen and (max-width: 767px) {
    display: ${({ IsActive }) => (IsActive ? "flex" : "none")};
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    max-width: 312px;
    height: 350px;

    border-radius: 4px;
    padding: 16px;

    top: 50vh;
    left: 50%;

    transform: translate(-50%, -50%);

    flex-direction: column;
    justify-content: stretch;

    z-index: 3;
    background-color: #ffffff;
  }
`;

export const WrapperSelectsHeader = styled.div`
  width: 100%;
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SelectsHeaderTitle = styled.h6`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

export const SelectHeaderCross = styled.div`
  height: 14px;
  width: 14px;

  padding-right: 5px;

  cursor: pointer;
`;

export const WrapperApplyButton = styled.div`
  display: none;
  width: 100%;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const ApplyButton = styled.button`
  width: 100%;

  background: #e3f2fd;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  border: none;

  padding: 10px 16px;

  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #2196f3;
  cursor: pointer;
`;
