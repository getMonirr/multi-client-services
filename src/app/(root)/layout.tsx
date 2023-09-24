import Header from "@/components/shared/header/Header";
import "../globals.css";
import type { Metadata } from "next";
import { Inter, Nunito, Open_Sans, Poppins } from "next/font/google";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/Context/AuthProvider";
import NextAuthProvider from "@/Context/NextAuthProvider";
import ThemeProvider from "@/Context/ThemeProvider";

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
  return (
    <html lang="en" data-theme="light">
      <body className={`${open_sans.className} ${nunito.variable} bg-white`}>
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
