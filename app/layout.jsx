import "./globals.css";

export const metadata = {
  title: "Auto Connectors App",
  description: "Sell cars from home and earn commissions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}