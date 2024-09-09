import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vercel FAST DNS",
  description: "针对 CN 用户优化的 分运营商 Vercel DNS",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://font.onmicrosoft.cn/lxgw-wenkai-screen-webfont@1.6.0/style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
