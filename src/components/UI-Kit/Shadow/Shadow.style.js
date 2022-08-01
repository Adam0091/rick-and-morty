import styled from "styled-components";

export const PageShadow = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    right: 0;
    width: ${({ isActive }) => (isActive ? "100%" : "0")};
    height: 100%;
    z-index: 3;
    background: rgba(41, 41, 41, 0.6);
    transition: all 0.3s;
  }
`;
