import styled from "styled-components";
import { FlexBoxProps } from "../FlexBox";

export const FlexBoxLayout = styled.div<FlexBoxProps>`
  display: flex;
  width: ${({ $width }) => (!$width ? "100" : $width)}%;
  height: auto;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  flex-wrap: : ${({ $flexWrap }) => $flexWrap};
  gap: ${({ $gap }) => $gap}px;
`;
