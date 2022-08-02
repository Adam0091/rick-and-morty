import styled from "styled-components";

export const WrapperInputSearch = styled.div`
  width: 100%;
  max-width: 312px;
  display: flex;

  box-sizing: border-box;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 16px;

  column-gap: 8px;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  input,
  input:focus {
    width: 100%;

    outline: none;
    border: none;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 767px) {
    max-width: none;
  }
`;
