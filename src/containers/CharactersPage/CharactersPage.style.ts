import styled from "styled-components";

export const Content = styled.main`
  width: 100%;
`;

export const LogoWrapper = styled.div`
  margin-top: 26px;

  height: 100%;
  max-height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;

    max-width: 600px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 60px;
`;

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 154px;
  height: 36px;

  background: #f2f9fe;
  border: none;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #2196f3;

  transition: all 0.15s ease-in;

  &:hover {
    background: #2196f3;
    color: #f2f9fe;
  }
`;

export const CircularContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
