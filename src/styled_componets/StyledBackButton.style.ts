import styled from "styled-components";

export const StyledBackButton = styled.button<{ top: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: 0;

  transform: translateY(-50%);

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

  background-color: inherit;
  border: none;

  @media (max-width: 768px) {
    top: 0;
    transform: translateY(-40px);
  }
`;
