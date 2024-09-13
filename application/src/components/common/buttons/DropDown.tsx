import styled from "styled-components";
import {
  Children,
  cloneElement,
  Fragment,
  ReactElement,
  ReactNode,
} from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import {Typography} from "@components/common/Typography";

interface DropDownSize {
  $width?: string | number;
  $height?: string | number;
}

// 버튼 스타일
export const DropDownButton = styled.button<DropDownSize>``;
// 메뉴 박스
export const DropDownMenu = styled.ul``;
// 드랍다운 아이템 스타일
export const DropDownItem = styled.li``;

// 스타일 구성
export const DropDownLayout = styled.div<DropDownSize>`
  position: relative;
  width: ${({ $width }) => ($width ? $width : 169)}px;
  display: inline-block;

  ${DropDownButton} {
    width: ${({ $width }) => ($width ? $width : 169)}px;
    height: ${({ $height }) => ($height ? $height : 40)}px;
    border: none;
    border-radius: 4px;
    padding: 0.6em 1em;
    background-color: #1976d2;
    color: white;
    font-size: 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #115293;
    }

    &:focus {
      outline: none;
    }

    // 테마 구현
    &.black {
      background-color: #333333;
      color: white;

      &:hover {
        background-color: #424242;
      }
    }
  }

  ${DropDownMenu} {
    list-style: none;
    padding: 0.5em 0;
    margin: 0;
    position: absolute;
    top: calc(100% + 0.5em);
    left: 0;
    width: 100%;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1;

    ${DropDownItem} {
      padding: 0.6em 1em;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;

type Variant = "black" | "default";

interface DropDownProps {
  isOpen: boolean; // 아이템 박스 보여주기 여부
  onClickDropDown: () => void; // 버튼 이벤트
  label?: string; // 버튼 라벨
  icon?: ReactNode; // 아이콘
  children: ReactNode; // 드랍다운 메뉴 아이템
  variant?: Variant; // 버튼 타입
  width?: string | number; // 버튼 크기
  height?: string | number; // 버튼 높이
}

export const DropDown = ({
  children,
  isOpen,
  onClickDropDown,
  label,
  icon,
  variant = "default",
  width,
  height,
}: DropDownProps): ReactElement => {
  const buttonLabel = label ? label : "DropDown";

  const handleItemClick = () => {
    onClickDropDown(); // 드롭다운 메뉴 닫기
  };

  return (
    <DropDownLayout>
      <DropDownButton
        $width={width}
        $height={height}
        type={"button"}
        onClick={onClickDropDown}
        className={classNames({
          [variant]: variant,
        })}
      >
        {!!icon && icon}
        <Typography
          $fontColor={"textWhite"}
          $fontType={"nanumSquare"}
          $fontWeight={500}
        >
          {buttonLabel}
        </Typography>
      </DropDownButton>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen && (
          <Fragment>
            {Children.map(children, (child) =>
              cloneElement(child as ReactElement, {
                onClick: handleItemClick,
              }),
            )}
          </Fragment>
        )}
      </motion.div>
    </DropDownLayout>
  );
};
