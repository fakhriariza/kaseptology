import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kaseptology Barbershop — Pengalaman Grooming Premium',
  description:
    'Kaseptology Barbershop menghadirkan potongan rambut presisi, cukur klasik, dan pengalaman grooming premium. Booking sekarang.',
  keywords: ['barbershop', 'potong rambut', 'grooming', 'kaseptology', 'barbershop premium', 'grooming pria', 'cukur', 'trim jenggot'],
  openGraph: {
    title: 'Kaseptology Barbershop — Pengalaman Grooming Premium',
    description: 'Potongan rambut presisi, cukur klasik, dan grooming premium. Booking sekarang.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Kaseptology Barbershop',
    images: [{ url: '/images/logo.jpg', width: 1200, height: 630, alt: 'Kaseptology Barbershop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaseptology Barbershop',
    description: 'Pengalaman grooming premium. Potongan presisi & cukur klasik.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="icon" href="/images/logo.jpg" />
        <meta name="theme-color" content="#0D0D0D" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
