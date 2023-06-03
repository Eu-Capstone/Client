import { DefaultSeoProps } from "next-seo";

const DefaultSeoInfo: DefaultSeoProps = {
  titleTemplate: "신BTI | Example",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#FFFFFF",
    },
  ],
  openGraph: {
    type: "website",
    site_name: "신BTI",
    images: [{ url: "https://client-2-liard.vercel.app/logo.svg" }],
  },
};

export default DefaultSeoInfo;
