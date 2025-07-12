import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ultimate Gaming Subscription | Disrupting the Gaming Industry',
  description:
    'Join the future of gaming with our revolutionary subscription service. Enjoy unlimited access to top games, exclusive rewards, and more. Stay updated and be the first to experience the ultimate gaming game pass.',
  keywords: [
    'gaming subscription',
    'game pass',
    'unlimited gaming',
    'exclusive rewards',
    'gaming revolution',
    'cloud gaming',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/0/01/Gaming.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
