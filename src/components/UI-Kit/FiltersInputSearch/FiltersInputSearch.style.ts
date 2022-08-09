import styled from "styled-components";

export const WrapperInputSearch = styled.div<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "312px")};
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
    width: 100%;

    outline: none;
    border: none;

    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 767px) {
    max-width: none;
  }
`;
