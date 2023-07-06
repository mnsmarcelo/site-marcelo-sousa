import './globals.css';
import React from 'react';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://marcelosousa.tech'),
  title: 'Marcelo Sousa | Web Developer',
  description: 'Web Developer',
  themeColor: '#13131f',
  openGraph: {
    title: 'Marcelo Sousa',
    description: 'I build things for the web',
    type: 'website',
    url: 'https://marcelosousa.tech',
    images: 'image-share-site.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
