// app/layout.jsx

import './globals.css'; // Adjust this if you have a global CSS file
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AdsGrow',
  description: 'Leading Facebook and Google Ads ran by professionals to enable you to focus on your business. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
