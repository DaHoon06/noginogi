'use client';

import {
  ChakraProvider,
  ColorModeScript,
  ThemeConfig,
  extendTheme,
} from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
