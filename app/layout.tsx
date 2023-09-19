import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "@next/font/local";

// const inter = Inter({ subsets: ["latin"] });
const clash = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/ClashDisplay-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: "GetLinked",
  description: "Where dreams meet opportunities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${clash.variable} font-sans`}>{children}</body>
    </html>
  );
}
