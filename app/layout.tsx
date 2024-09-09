import type { Metadata } from "next";
import "./globals.css";;

export const metadata: Metadata = {
  title: "Vercel FAST DNS",
  description: "Vercel fast dns for cn users.",
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
