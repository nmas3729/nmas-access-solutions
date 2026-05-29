import './globals.css';
import { Montserrat, Poppins } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';
import Script from 'next/script';

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
  title: 'NMAS Access Control Systems | Smart Security & Entry Solutions South Africa',
  description: 'Professional access control, smart entry, biometric security, gate automation, and integrated security solutions for homes and businesses across South Africa.',
  keywords: 'access control, biometric systems, turnstiles, boom gates, CCTV, security solutions, South Africa, NMAS',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://access.nmas.co.za/',
  },
  openGraph: {
    title: 'NMAS Access Control Systems | Smart Security & Entry Solutions South Africa',
    description: 'Professional access control, smart entry, biometric security, gate automation, and integrated security solutions for homes and businesses across South Africa.',
    url: 'https://access.nmas.co.za/',
    siteName: 'NMAS Access Solutions',
    images: [
      {
        url: 'https://access.nmas.co.za/images/nmasaccesslogo.png',
        width: 1024,
        height: 1024,
        alt: 'NMAS Access Solutions Logo',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NMAS Access Control Systems | Smart Security & Entry Solutions South Africa',
    description: 'Professional access control, smart entry, biometric security, gate automation, and integrated security solutions for homes and businesses across South Africa.',
    images: ['https://access.nmas.co.za/images/nmasaccesslogo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://access.nmas.co.za/#organization',
      name: 'NMAS Access Control',
      url: 'https://access.nmas.co.za/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://access.nmas.co.za/images/nmasaccesslogo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+27-67-487-7278',
        contactType: 'customer service',
        email: 'access@nmas.co.za',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://access.nmas.co.za/#localbusiness',
      name: 'NMAS Access Control',
      url: 'https://access.nmas.co.za/',
      telephone: '+27-67-487-7278',
      email: 'access@nmas.co.za',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ZA',
      },
      parentOrganization: {
        '@id': 'https://access.nmas.co.za/#organization',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://access.nmas.co.za/#website',
      url: 'https://access.nmas.co.za/',
      name: 'NMAS Access Control Systems',
      publisher: {
        '@id': 'https://access.nmas.co.za/#organization',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Z8KL3DCSWK"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z8KL3DCSWK');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-black-main text-white-clean antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
