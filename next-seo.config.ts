import { DefaultSeoProps } from "next-seo";

const DefaultSeoInfo: DefaultSeoProps = {
  titleTemplate: "신BTI | Example",
  title: "신BTI",
  description: "당신은 북유럽 신화의 무슨 신인가요?",
  canonical: "https://client-2-2j01dqr8f-wooseok123.vercel.app",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  openGraph: {
    type: "website",
    site_name: "신BTI",
    url: "https://client-2-2j01dqr8f-wooseok123.vercel.app/",
    title: "신BTI, 당신의 북유럽 신은?",
    images: [{ url: "https://client-2-2j01dqr8f-wooseok123.vercel.app/kakao_share.png", alt: "logo" }],
  },
};

export default DefaultSeoInfo;
