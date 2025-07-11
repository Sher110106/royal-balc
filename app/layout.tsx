import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import { WelcomeToast } from 'components/welcome-toast';
import { getCart } from 'lib/shopify';
import { baseUrl } from 'lib/utils';
import { Inter, Playfair_Display, Space_Grotesk } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';

const { SITE_NAME } = process.env;

// Royal Balc Typography System
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '700'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-numeric',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME || 'Royal Balc Perfume',
    template: `%s | ${SITE_NAME || 'Royal Balc Perfume'}`
  },
  description: 'Luxury. Designer. Long-Lasting. Affordable. Perfume re-imagined by Royal Balc.',
  robots: {
    follow: true,
    index: true
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  }
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable}`}>
      <body className="selection:bg-[var(--color-royal-gold)] selection:text-[var(--color-midnight-blue)]">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
            <WelcomeToast />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
