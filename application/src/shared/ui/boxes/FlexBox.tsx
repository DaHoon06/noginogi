import {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  Ref,
} from 'react';
import { FlexBoxLayout } from './styles/FlexBox.styled';

interface FlexProps {
  $flexDirection?: CSSProperties['flexDirection'];
  $justifyContent?: CSSProperties['justifyContent'];
  $alignItems?: CSSProperties['alignItems'];
  $flexWrap?: CSSProperties['flexWrap'];
  $gap?: string | number;
  $width?: string | number;
}

export interface FlexBoxProps
  extends FlexProps,
    HTMLAttributes<HTMLDivElement> {}

const FlexBox = forwardRef(
  (
    {
      children,
      $flexDirection = 'column',
      $justifyContent = 'center',
      $alignItems = 'center',
      $gap = '0',
      $width = '100',
      $flexWrap = 'nowrap',
      ...rest
    }: PropsWithChildren<FlexBoxProps>,
    forwardRef: Ref<HTMLDivElement>,
  ) => {
    return (
      <FlexBoxLayout
        ref={forwardRef}
        $flexDirection={$flexDirection}
        $justifyContent={$justifyContent}
        $alignItems={$alignItems}
        $gap={$gap}
        $width={$width}
        $flexWrap={$flexWrap}
        {...rest}
      >
        {children}
      </FlexBoxLayout>
    );
  },
);

export default FlexBox;

FlexBox.displayName = 'FlexBox';
