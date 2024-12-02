import { ReactElement, ReactNode } from "react";
import * as S from './styles/FloatingButton.styled';


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
    <S.FloatingButtonLayout>
      <button type={"button"} onClick={handleClick}>
        {children}
      </button>
    </S.FloatingButtonLayout>
  );
};
