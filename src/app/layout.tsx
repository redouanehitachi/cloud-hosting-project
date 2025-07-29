import type { Metadata } from "next";
import { Geist, Geist_Mono ,Noto_Kufi_Arabic} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const kufiArabic=Noto_Kufi_Arabic({
  subsets:['arabic'],
  weight:['300','700','900']
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud hosting project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
