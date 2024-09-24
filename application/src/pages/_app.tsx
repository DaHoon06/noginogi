import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import {queryClient} from "@lib/tanstack";
import { useState } from "react";
import {ToastHandler} from "@components/common/Toast/toastHandler";
import {GlobalStyle, theme} from "@styles/styled-components";
import '@styles/global/index.scss';
import {BaseLayout} from "../layouts/BaseLayout";

export default function App({ Component, pageProps }: AppProps) {
  const [queryState] = useState(() => queryClient);

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryState}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
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
