import Header from "@/components/shared/header/Header";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi-Client",
  description: "This is a multi-client services website",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
