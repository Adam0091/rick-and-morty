import styled from "styled-components";

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  width: 240px;
  height: 100%;

  min-height: 128px;

  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.005);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3),
      0px 8px 12px rgba(0, 0, 0, 0.2), 0px 8px 12px rgba(0, 0, 0, 0.14);
  }
`;

export const LocationDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 12px 16px;

  text-align: center;

  .location__name {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    letter-spacing: 0.15px;

    color: rgba(0, 0, 0, 0.87);
  }

  .location__type {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    letter-spacing: 0.25px;

    color: rgba(0, 0, 0, 0.6);
  }
`;
