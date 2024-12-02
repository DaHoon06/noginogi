import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const blinkAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
`;

export const TimeDisplay = styled.div`
  font-size: 16px;
  font-weight: bold;
  animation: ${blinkAnimation} 1s infinite;
`;

export const DayDisplay = styled.div`
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const dotAnimation = keyframes`
  0% {
    content: '';
  }
  25% {
    content: '.';
  }
  50% {
    content: '..';
  }
  75% {
    content: '...';
  }
  100% {
    content: '...'; 
  }
`;

export const DotContainer = styled.div`
  font-size: 16px;

  &:after {
    content: "";
    animation: ${dotAnimation} 3s steps(3) infinite;
  }
`;
