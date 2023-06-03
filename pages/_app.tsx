import { DefaultSeo } from "next-seo";
import DefaultSeoInfo from "next-seo.config";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { Applayout } from "~/@components/templates/Applayout";
import GlobalStyle from "~/@styles/GlobalStyle";

declare global {
  interface Window {
    Kakao: any;
  }
}
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API);
      }
    }
  }, []);
  return (
    <>
      <RecoilRoot>
        <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js" />
        <DefaultSeo {...DefaultSeoInfo} />
        <GlobalStyle />
        <Applayout>
          <Component {...pageProps} />
        </Applayout>
      </RecoilRoot>
    </>
  );
}
