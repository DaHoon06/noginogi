import type { Metadata } from "next";
import Provider from "../providers/provider";
import React from "react";
import "@styles/index.scss";
import { GlobalStyle } from "@chakra-ui/react";
import { BaseLayout } from "@layouts/BaseLayout";

export const metadata: Metadata = {
  title: "노기노기",
  description: "마비노기, 노기노기 라이프",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <Provider>
          <GlobalStyle />
          <BaseLayout>{children}</BaseLayout>
        </Provider>
      </body>
    </html>
  );
}
