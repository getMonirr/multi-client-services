import "./globals.css";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
