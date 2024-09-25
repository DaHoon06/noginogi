import type { AppProps } from "next/app";
import {DefaultTheme, ThemeProvider} from "styled-components";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@lib/tanstack";
import {useCallback, useEffect, useMemo, useState} from "react";
import { ToastHandler } from "@components/common/Toast/toastHandler";
import { GlobalStyle } from "@styles/styled-components";
import "@styles/global/index.scss";
import { BaseLayout } from "@layouts/BaseLayout";
import MetaHead from "@components/heads/MetaHead";
import { light, dark, media, scroll, colors } from "@styles/styled-components";
import Cookies from "js-cookie";
import useTheme, { THEME_KEY } from "@hooks/useTheme";

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryState] = useState(() => queryClient);
  const { theme: mode, setTheme, toggleTheme } = useTheme();

  const detectSystemTheme = useCallback(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeMode.DARK : ThemeMode.LIGHT;
  }, []);

  useEffect(() => {
    const savedTheme = Cookies.get(THEME_KEY);
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const systemTheme = detectSystemTheme();
      setTheme(systemTheme);
    }
  }, []);

  const theme = useMemo<DefaultTheme>(() => {
    const themeColors = mode === ThemeMode.LIGHT ? light.colors : dark.colors;
    return {
      colors: {
        ...colors,
        ...themeColors
      },
      media,
      scroll
    };
  }, [mode]);

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryState}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <button type={'button'} onClick={toggleTheme}>
              TEST
            </button>
            <MetaHead />
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
            <div id="modal" />
            <ToastHandler />
          </ThemeProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
