import styled from "styled-components";
import { ReactElement, ReactNode } from "react";

export const FloatingButtonLayout = styled.div`
  width: 50px;
  height: 50px;
  position: sticky;
  top: 100px;

  button {
    position: relative;
    width: 100%;
    height: 100%;

    background-color: #fafafa; /* 기본 배경색 */
    color: white;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    top: 50vh;
    left: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    &:hover {
      cursor: pointer;
      background-color: #35b6e7ff;
      box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }

    &:active {
      background-color: #35b6e7ff;
      transform: translateY(0);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;

interface FloatingButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

export const FloatingButton = ({
  children,
  onClick,
}: FloatingButtonProps): ReactElement => {
  const handleClick = (): void => {
    onClick && onClick();
  };

  return (
    <FloatingButtonLayout>
      <button type={"button"} onClick={handleClick}>
        {children}
      </button>
    </FloatingButtonLayout>
  );
};
