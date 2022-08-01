import styled from "styled-components";

export const BurgerContainer = styled.div`
  display: none;
  cursor: pointer;

  transition: all 0.3s ease 0s;

  @media screen and (max-width: 767px) {
    display: block;
    width: 20px;
    height: 12px;
    position: relative;
    z-index: 3;

    &:after,
    &:before {
      content: "";
      background-color: #dadada;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;

      transition: all 0.3s ease 0s;
    }

    &:after {
      bottom: ${({ isActive }) => (isActive ? "50%" : "0")};
      transform: ${({ isActive }) =>
        isActive ? "translateY(50%) rotate(-45deg)" : ""};
    }

    &:before {
      top: ${({ isActive }) => (isActive ? "50%" : "0")};
      transform: ${({ isActive }) =>
        isActive ? "translateY(-50%) rotate(45deg)" : ""};
    }
    span {
      content: "";
      background-color: #dadada;
      position: absolute;
      width: ${({ isActive }) => (isActive ? "0" : "100%")};
      height: 2px;
      left: 0;
      top: 50%;

      transition: all 0.3s ease;
      transform: translateY(-50%);
    }
  }
`;
