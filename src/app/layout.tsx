import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100','200','300', '400', '500', '600', '700', '800' ],
  variable: '--font-jetbrains-mono',

})

export const metadata: Metadata = {
  title: "Marcus Oliveira",
  description: "Portfolio dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
