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
    url: "카카오톡, 페이스북에 링크 넣으면 연결되는 url",
    title: "카카오톡, 페이스북에 링크 넣으면 올라올 타이틀",
    images: [{ url: "https://client-2-2j01dqr8f-wooseok123.vercel.app/logo.png", alt: "logo" }],
  },
};

export default DefaultSeoInfo;
