import type { Metadata } from "next";
import "./globals.css";;

export const metadata: Metadata = {
  title: "Vercel FAST DNS",
  description: "针对 CN 用户优化的 分运营商 Vercel DNS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
