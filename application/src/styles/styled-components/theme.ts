import { DefaultTheme } from "styled-components";

export const colors = {
  white000: "var(--white000)",
  white100: "var(--white100)",
  white200: "var(--white200)",
  white300: "var(--white300)",

  black000: "var(--black000)",
  black100: "var(--black100)",
  black200: "var(--black200)",
  black400: "var(--black400)",
  purple000: "var(--purple000)",
  purple300: "var(--purple300)",

  gray000: "var(--gray000)",
  gray050: "var(--gray050)",
  gray100: "var(--gray100)",
  gray200: "var(--gray200)",
  gray250: "var(--gray250)",
  gray300: "var(--gray300)",

  primary: "var(--primary)",
  second: "var(--second)",
  error: "var(--error)",

  textRed000: "var(--textRed000)",
  textRed300: "var(--textRed300)",
  backgroundColor1: "var(--backgroundColor1)",
  borderColor1: "var(--borderColor1)",
  borderColor2: "var(--borderColor2)",
};
export const themeColors = {
  white000: "var(--white000)",
  white100: "var(--white100)",
  white200: "var(--white200)",
  white300: "var(--white300)",

  black000: "var(--black000)",
  black100: "var(--black100)",
  black200: "var(--black200)",
  black400: "var(--black400)",
  purple000: "var(--purple000)",
  purple300: "var(--purple300)",

  gray000: "var(--gray000)",
  gray050: "var(--gray050)",
  gray100: "var(--gray100)",
  gray200: "var(--gray200)",
  gray250: "var(--gray250)",
  gray300: "var(--gray300)",

  primary: "var(--primary)",
  second: "var(--second)",
  error: "var(--error)",

  textRed000: "var(--textRed000)",
  textRed300: "var(--textRed300)",
  backgroundColor1: "var(--backgroundColor1)",
  borderColor1: "var(--borderColor1)",
  borderColor2: "var(--borderColor2)",
};

export type Colors = keyof typeof colors;
export type ThemeColors = keyof typeof themeColors;

export interface MediaQueryTheme {
  custom: (width: number) => string;
  mobile: string;
  tablet: string;
  pc: string;
}

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

const media: MediaQueryTheme = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(1000),
  mobile: customMediaQuery(576),
};

const scroll = {
  theme: () => `
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 12px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 8px;
        border: 1px solid #f1f1f1;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

    @media screen and (max-width: 769px) {
      &::-webkit-scrollbar {
        width: 0;
      }
    }
  `,
};

export const theme: DefaultTheme = {
  colors,
  themeColors,
  media,
  scroll,
} as const;
