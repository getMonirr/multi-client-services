import ReduxProvider from "@/Context/ReduxProvider";
import "./globals.css";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" data-theme="light">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};
export default RootLayout;
