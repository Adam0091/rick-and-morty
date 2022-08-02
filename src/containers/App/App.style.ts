import styled from "styled-components";

export const PageStyle = styled.div`
  font-family: "Roboto";

  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  * {
    box-sizing: border-box;
  }
`;

export const PageContainer = styled.div`
  max-width: 1020px;
  width: 100%;
  margin: 0 auto;
`;
