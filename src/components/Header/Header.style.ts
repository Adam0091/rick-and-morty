import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 6px 0;
  background: #ffffff;
  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListStyle = styled.ul<{ isActive: boolean }>`
  display: flex;
  column-gap: 35px;

  transition: all 0.5s;

  a {
    font-family: "Karla", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    text-align: center;

    text-decoration: none !important;
    color: #000000;
  }

  @media screen and (max-width: 767px) {
    position: fixed;
    width: ${({ isActive }) => (isActive ? "100%" : "0")};
    height: 100%;

    top: 70px;
    left: 0;

    background: #ffffff;

    flex-direction: column;
    align-items: center;
    row-gap: 48px;

    padding-top: 48px;
    overflow: hidden;
    z-index: 2;

    a {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;
