import styled from "styled-components";

export const DescriptionList = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 200px;

  @media (max-width: 768px) {
    column-gap: 40px;
  }
`;
export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;

  .description__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 0.15px;

    color: #081f32;
  }
  .description__value {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;

    color: #6e798c;
  }
`;
