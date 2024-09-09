import type { Metadata } from "next";
import "./globals.css";;

export const metadata: Metadata = {
  title: "vercel fast dns",
  description: "vercel fast dns for cn users",
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
