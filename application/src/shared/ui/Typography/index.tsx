'use client';

import React, { ComponentProps, ReactElement } from 'react';
import * as Style from './Typography.styled';
import styled from '@emotion/styled';

interface TypographyProps extends ComponentProps<'p'> {
  variant?: Style.Variant;
  $fontType?: Style.FontType;
  $fontWeight?: Style.FontWeight;
  $fontColor?: Style.FontColor;
  $letterSpacing?: Style.LetterSpacing;
  $fontSize?: number | string;
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
  $lineHeight?: number | string;
}

const element: { [key in Style.Variant]: string } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
};

const StyledComponent = (element: any) => styled(element)<TypographyProps>`
  font-family: ${(props) =>
      props.$fontType === 'nanumSquare'
        ? 'NanumSquare'
        : props.$fontType === 'nanumGothic'
          ? 'Nanum Gothic'
          : 'omyu_pretty'},
    sans-serif;
  line-height: ${(props) => props.$lineHeight || 20}px;
  transition: color 0.2s ease-in;
  letter-spacing: ${(props) => props.$letterSpacing || '-0.5'}px;
  color: ${(props) => Style.FontColor[props.$fontColor || 'textDefault']};
  font-size: ${(props) => props.$fontSize || 16}px;
  font-weight: ${(props) => props.$fontWeight || 400};
`;

function baseElement(props: TypographyProps) {
  const { className, variant = 'p', children, as, ...rest } = props;
  return React.createElement(
    as || element[variant],
    {
      className,
      ...rest,
    },
    children,
  );
}

const styledElement = StyledComponent(baseElement);

export const Typography = (props: TypographyProps): ReactElement => {
  return React.createElement(styledElement, props);
};
