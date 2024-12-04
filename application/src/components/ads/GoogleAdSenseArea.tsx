'use client';

import {useEffect} from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

/**
 * @description 원하는 위치에 광고를 기재할 경우 아래 컴포넌트 사용
 */

export const GoogleAdSenseArea = () => {
  useEffect(() => (window.adsbygoogle = window.adsbygoogle || []).push({}), []);

  return (
    <ins
      className={'adsbygoogle'}
      style={{ display: 'block' }}
      data-ad-client="PID"
      data-ad-slot="SLOT_KEY"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}