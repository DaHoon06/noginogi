import {FunctionComponent} from "react";
import {IS_PROD} from "@config/processEnv";
import Script from "next/script";

export const GoogleAdSense: FunctionComponent = () => {
  if (!IS_PROD) return null;
  /**
   * @TODO: 에드센스에서 발급 받은 코드를 심어준다.
   * 완료 했으면 RootLayout에 Import
   */
  const PID = '';
  const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pun=${PID}`;
  return <Script async src={src} crossOrigin={"anonymous"} strategy={'lazyOnload'} />
}