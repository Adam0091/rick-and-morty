import styled from "styled-components";

export const WrapperFiltersButton = styled.div`
  display: none;
  position: relative;

  @media screen and (max-width: 767px) {
    display: block;
    width: 100%;
  }
`;
export const FiltersButtonIcon = styled.div`
  position: absolute;
`;

export const FiltersButtonStyle = styled.button`
  width: 100%;

  background: #e3f2fd;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  border-radius: 4px;
  border: none;

  padding: 20px 32px;

  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #2196f3;
  cursor: pointer;
`;
