import styled from "styled-components";

export const LocationWrapper = styled.div`
  position: relative;
  padding-top: 30px;

  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;
export const LocationHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  row-gap: 16px;

  @media (max-width: 768px) {
    row-gap: 30px;
  }
`;
export const LocationTitleWrapper = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LocationTitle = styled.span`
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;

  text-align: center;
`;
export const LocationDescription = styled.div`
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

export const LocationResidents = styled.div`
  margin-top: 64px;
`;

export const ResidentsTitleWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ResidentsTitle = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 0.15px;

  color: #8e8e93;
`;
