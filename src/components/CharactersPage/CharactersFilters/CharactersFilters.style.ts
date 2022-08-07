import styled from "styled-components";

export const FiltersWrapper = styled.div<{ isCenter?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(isCenter) => (isCenter ? "center" : null)};

  column-gap: 20px;
  row-gap: 20px;

  margin-top: 16px;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;
