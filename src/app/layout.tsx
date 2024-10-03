import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/components/ui/fonts";


export const metadata: Metadata = {
  title: "Price Screen",
  description: "Price Screen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
