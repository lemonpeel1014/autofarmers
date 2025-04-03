import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const fonts = Noto_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontsMono = Noto_Sans_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Autofarmers",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts.variable} ${fontsMono.variable} min-h-dvh h-dvh antialiased`}
      >
        <div className="h-full">{children}</div>
      </body>
    </html>
  );
}
