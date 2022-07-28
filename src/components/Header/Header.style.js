import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 6px 0;

  background: #ffffff;
  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListStyle = styled.ul`
  display: flex;
  column-gap: 35px;

  a {
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;

    text-align: center;

    text-decoration: none !important;
    color: #000000;
  }
`;
