import { DefaultSeoProps } from "next-seo";

const DefaultSeoInfo: DefaultSeoProps = {
  titleTemplate: "신BTI",
  title: "신BTI",
  description: "당신은 북유럽 신은?",
  canonical: "https://client-2-liard.vercel.app/",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  openGraph: {
    type: "website",
    site_name: "신BTI",
    url: "https://client-2-liard.vercel.app/",
    title: "신BTI, 당신의 북유럽 신은?",
    images: [{ url: "https://client-2-liard.vercel.app/kakao_share.png", alt: "logo" }],
  },
};

export default DefaultSeoInfo;
