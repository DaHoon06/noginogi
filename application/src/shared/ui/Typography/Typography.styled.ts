export type LetterSpacing = '-2' | '-1.5' | '-1' | '-0.5' | '1';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export type FontType = 'nanumSquare' | 'nanumGothic' | 'montserrat';
export type FontWeight = 300 | 400 | 500 | 700 | 600;

export type FontColor =
  | 'textDefault'
  | 'textWhite'
  | 'textBlack000'
  | 'textBlack100'
  | 'textBlack200'
  | 'textGray000'
  | 'textGray100'
  | 'textGray200'
  | 'textGray250'
  | 'textGray300'
  | 'textGray400'
  | 'textRed000'
  | 'textRed100'
  | 'textRed300'
  | 'textPurple000'
  | 'textBlue000'
  | 'textBlue100';

export const FontColor = {
  textDefault: 'var(--textDefault)',
  textWhite: 'var(--textWhite)',
  textBlack000: 'var(--textBlack000)',
  textBlack100: 'var(--textBlack100)',
  textBlack200: 'var(--textBlack200)',
  textGray000: 'var(--textGray000)',
  textGray100: 'var(--textGray100)',
  textGray200: 'var(--textGray200)',
  textGray250: 'var(--textGray250)',
  textGray300: 'var(--textGray300)',
  textGray400: 'var(--textGray400)',
  textRed000: 'var(--textRed000)',
  textRed100: 'var(--textRed100)',
  textRed300: 'var(--textRed300)',
  textPurple000: 'var(--purple000)',
  textBlue000: 'var(--textBlue000)',
  textBlue100: 'var(--textBlue100)',
};
