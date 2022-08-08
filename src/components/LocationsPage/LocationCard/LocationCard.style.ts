import styled from "styled-components";

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
