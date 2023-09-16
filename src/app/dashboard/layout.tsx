import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/Context/NextAuthProvider";
import DashboardLayouts from "@/components/Dashboard/layout/DashboardLayouts";
import ThemeProvider from "@/Context/ThemeProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi-Client",
  description: "This is a multi-client services website",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-multi-icon-bg`}>
        {/* <div className="flex gap-10">
        <Sidebar />
        {children}
        </div> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextAuthProvider>
            <DashboardLayouts>{children}</DashboardLayouts>
            <ToastContainer />
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
