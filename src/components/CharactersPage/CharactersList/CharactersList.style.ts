import styled from "styled-components";
import { Link } from "react-router-dom";

export const CharactersWrapper = styled.div`
  min-height: 350px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  row-gap: 36px;
  column-gap: 20px;

  .chracters__not-found {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    letter-spacing: 0.15px;
  }

  @media screen and (max-width: 570px) {
    justify-content: center;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
