import styled from "styled-components";

export const TextCardWrapper = styled.div`
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
