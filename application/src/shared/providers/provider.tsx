'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ColorModeScript />
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
