import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Auto Connectors App',
  description: 'Sell cars from home and earn commissions'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='container py-8'>{children}</main>
      </body>
    </html>
  );
}
