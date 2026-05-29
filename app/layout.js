import './globals.css';
import { Montserrat, Poppins } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading-var',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body-var',
  display: 'swap',
});

export const metadata = {
  title: 'NMAS Access Solutions | Professional Access Control Systems',
  description:
    'Professional access control, biometric systems, turnstiles, boom gates, and comprehensive security solutions across South Africa. Expert installation and 24/7 support.',
  keywords:
    'access control, biometric systems, turnstiles, boom gates, CCTV, security solutions, South Africa, NMAS',
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="font-body bg-black-main text-white-clean antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
