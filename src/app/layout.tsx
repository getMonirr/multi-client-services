import ReduxProvider from "@/Context/ReduxProvider";
import "./globals.css";
import ThemeProvider from "@/Context/ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" data-theme="light">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
