// app/layout.jsx

import './globals.css'; // Adjust this if you have a global CSS file
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AdsGrow',
  description: 'Showcasing services and portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
