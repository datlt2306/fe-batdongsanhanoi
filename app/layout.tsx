import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/utils/Provider";


export const metadata: Metadata = {
  title: "Bất động sản",
  description: "By Fe Xưởng",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Providers>
          {children}
        </Providers >
      </body>
    </html>
  );
}
