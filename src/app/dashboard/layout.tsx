
import Sidebar from "@/components/shared/Sidebar/Sidebar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi-Client",
  description: "This is a multi-client services website",
};


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex gap-10">
        <Sidebar />
        {children}
        </div>

      </body>
    </html>
  );
};
export default RootLayout;
