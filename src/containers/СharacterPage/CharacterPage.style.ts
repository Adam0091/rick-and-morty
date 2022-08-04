import styled from "styled-components";
import arrowNext from "@assets/images/arrowNext.svg";

export const CharacterWrapper = styled.div`
  position: relative;
  padding-top: 16px;

  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;

export const StyledBackLink = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(28px);

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 12px;

  font-family: "Karla";
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  cursor: pointer;
`;

export const CharacterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  row-gap: 16px;
`;

export const ImageArrowBack = styled.img`
  width: 16px;
  height: 16px;
`;

export const CharacterLogo = styled.div`
  width: 100%;
  height: 100%;

  max-width: 300px;
  max-height: 300px;

  img {
    width: 100%;
    height: 100%;

    border: 5px solid #f2f2f7;
    border-radius: 150px;
  }

  @media (max-width: 768px) {
    max-width: 148px;
    max-height: 148px;
  }
`;

export const CharacterTitle = styled.div`
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;

  color: #081f32;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

export const CharacterDiscription = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 42px;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 42px;
  }
`;

export const DiscriptionItem = styled.div`
  flex: 0 1 40%;
`;

export const DiscriptionListItem = styled.li`
  position: relative;
  padding: 9px 16px 12px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;

    width: calc(100% - 16px * 2);
    height: 1px;

    background: rgba(33, 33, 33, 0.08);
  }
`;

export const DiscriptionListItemWrapper = styled.div``;

export const DiscriptionListItemArrow = styled.div`
  width: 24px;
  height: 24px;

  background-image: url("${arrowNext}");
  background-repeat: no-repeat;
  background-position: center;
`;

export const DiscriptionTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;

  color: #8e8e93;

  margin-bottom: 36px;
`;

export const DiscriptionName = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;

  color: #081f32;
`;

export const DiscriptionValue = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;

  color: #6e798c;
`;
