// app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Auto Connectors",
  description: "Sell cars from home. Bring buyers. Earn commissions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}