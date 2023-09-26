"use client";
import Header from "@/components/shared/header/Header";
import "../globals.css";
import type { Metadata } from "next";
import { Nunito, Open_Sans } from "next/font/google";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/Context/AuthProvider";
import NextAuthProvider from "@/Context/NextAuthProvider";
import { useEffect } from "react";
const AOS = require("aos");
import "aos/dist/aos.css";

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Multi-Client",
  description: "This is a multi-client services website",
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const RootLayout = ({ children }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en" data-theme="light">
      <body className={`${open_sans.className} ${nunito.variable} bg-white dark:bg-[#030C1A]`}>
        <NextAuthProvider>
          <Header />
          <AuthProvider>{children}</AuthProvider>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
