import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import MaxWidth from "@/components/shared/maxWidth";
import logo from "@/app/logo.png";
import Footer from "@/components/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joy das - Web Application Developer",
  description: "Joy das - Web Application Developer...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href={logo.src} type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header>
          <MaxWidth>
            <Navbar />
          </MaxWidth>
        </header>

        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
