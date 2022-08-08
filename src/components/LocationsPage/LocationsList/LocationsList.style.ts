import styled from "styled-components";

export const LocationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  row-gap: 24px;
  column-gap: 20px;

  margin-top: 60px;

  .locations__not_found {
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
