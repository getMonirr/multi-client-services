import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MdOutlineClose } from "react-icons/md";
import Sidebar from "./Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi-Client",
  description: "This is a multi-client services website",
};


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>

      <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-secondary drawer-button lg:hidden"
        >
          <MdOutlineClose></MdOutlineClose>
        </label>

        <div className="container mx-auto">
          {children}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gray-900 text-base-content mr-0 md:mr-4 lg:mr-5">
          
          {/* Sidebar content here */}
          <Sidebar></Sidebar>
        </ul>
      </div>
    </div>
      
      </body>
    </html>
  );
};
export default RootLayout;
