import styled from "styled-components";

export const PageDetailsWrapper = styled.div`
  position: relative;
  padding-top: 30px;

  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;

export const PageDetailsHeader = styled.div`
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

export const PageDetailsTitleWrapper = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageDetailsTitle = styled.span`
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;

  text-align: center;
`;

export const PageDetailsCharacters = styled.div`
  margin-top: 64px;
`;

export const CharactersTitleWrapper = styled.div`
  margin-bottom: 20px;
`;
export const CharactersTitle = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 0.15px;

  color: #8e8e93;
`;
