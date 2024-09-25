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

enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryState] = useState(() => queryClient);
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.LIGHT);

  const detectSystemTheme = useCallback(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeMode.DARK : ThemeMode.LIGHT;
  }, []);

  useEffect(() => {
    const savedTheme = Cookies.get('theme');
    if (savedTheme) {
      setThemeMode(savedTheme);
    } else {
      const systemTheme = detectSystemTheme();
      setThemeMode(systemTheme);
    }
  }, []);

  const theme = useMemo<DefaultTheme>(() => {
    const themeColors = themeMode === 'light' ? light.colors : dark.colors;

    return {
      colors: {
        ...colors,
        ...themeColors
      },
      media,
      scroll
    };
  }, [themeMode]);

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryState}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
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
