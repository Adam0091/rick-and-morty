import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;

  column-gap: 20px;
  row-gap: 20px;

  margin-top: 16px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;
