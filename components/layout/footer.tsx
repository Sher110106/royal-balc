import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2019 + (currentYear > 2019 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded-sm bg-dove-grey/20';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = 'Royal Balc Perfume';

  return (
    <footer className="bg-midnight-blue text-porcelain">
      {/* Main Footer Content */}
      <div className="container mx-auto px-gutter py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link className="flex items-center mb-4" href="/">
              <Image
                src="/logo.png"
                alt="Royal Balc Logo"
                width={140}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white text-sm leading-relaxed mb-4">
              Crafting prestige in every drop. Royal Balc redefines luxury fragrances with authentic oils, 
              sustainable practices, and affordable elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-royal-gold transition-royal" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-royal-gold transition-royal" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-royal-gold transition-royal" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-royal-gold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/search" className="text-white hover:text-royal-gold transition-royal text-sm">All Fragrances</Link></li>
              <li><Link href="/search/men" className="text-white hover:text-royal-gold transition-royal text-sm">Men's Collection</Link></li>
              <li><Link href="/search/women" className="text-white hover:text-royal-gold transition-royal text-sm">Women's Collection</Link></li>
              <li><Link href="/search/unisex" className="text-white hover:text-royal-gold transition-royal text-sm">Unisex Collection</Link></li>
              <li><Link href="/search/new" className="text-white hover:text-royal-gold transition-royal text-sm">New Arrivals</Link></li>
              <li><Link href="/search/bestsellers" className="text-white hover:text-royal-gold transition-royal text-sm">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-royal-gold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-white hover:text-royal-gold transition-royal text-sm">Contact Us</Link></li>
              <li><Link href="/faq" className="text-white hover:text-royal-gold transition-royal text-sm">FAQ</Link></li>
              <li><Link href="/shipping" className="text-white hover:text-royal-gold transition-royal text-sm">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-white hover:text-royal-gold transition-royal text-sm">Returns & Exchanges</Link></li>
              <li><Link href="/size-guide" className="text-white hover:text-royal-gold transition-royal text-sm">Fragrance Guide</Link></li>
              <li><Link href="/care" className="text-white hover:text-royal-gold transition-royal text-sm">Care Instructions</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-royal-gold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white hover:text-royal-gold transition-royal text-sm">About Royal Balc</Link></li>
              <li><Link href="/sustainability" className="text-white hover:text-royal-gold transition-royal text-sm">Sustainability</Link></li>
              <li><Link href="/careers" className="text-white0 hover:text-royal-gold transition-royal text-sm">Careers</Link></li>
              <li><Link href="/press" className="text-white hover:text-royal-gold transition-royal text-sm">Press</Link></li>
              <li><Link href="/wholesale" className="text-white0 hover:text-royal-gold transition-royal text-sm">Wholesale</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dove-grey/20">
        <div className="container mx-auto px-gutter py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white text-sm">
                &copy; {copyrightDate} {copyrightName}. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <Link href="/privacy" className="text-white hover:text-royal-gold transition-royal">Privacy Policy</Link>
                <Link href="/terms" className="text-white hover:text-royal-gold transition-royal">Terms of Service</Link>
                <Link href="/refund" className="text-white hover:text-royal-gold transition-royal">Refund Policy</Link>
              </div>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center space-x-3">
              <span className="text-white text-sm mr-2">We accept:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-porcelain/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">VISA</span>
                </div>
                <div className="w-8 h-5 bg-porcelain/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">MC</span>
                </div>
                <div className="w-8 h-5 bg-porcelain/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">GPay</span>
                </div>
                <div className="w-8 h-5 bg-porcelain/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">UPI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="mt-4 pt-4 border-t border-dove-grey/20 flex justify-center">
            <div className="flex items-center space-x-2">
              <span className="text-white text-sm">Language:</span>
              <button className="text-royal-gold hover:text-royal-gold/80 transition-royal text-sm font-medium">
                English
              </button>
              <span className="text-white">|</span>
              <button className="text-white hover:text-royal-gold transition-royal text-sm">
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
