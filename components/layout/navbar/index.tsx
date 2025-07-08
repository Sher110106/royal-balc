import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-dove-grey/20 shadow-sm">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          {/* Mobile Menu */}
          <div className="flex items-center md:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>

          {/* Logo - Left */}
          <div className="flex items-center">
            <Link
              href="/"
              prefetch={true}
              className="flex items-center transition-all duration-300 hover:scale-105"
              aria-label="Royal Balc Home"
            >
              <Image
                src="/logo.png"
                alt="Royal Balc Logo"
                width={140}
                height={45}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation - Center (Desktop) */}
          <nav className="hidden md:flex items-center justify-center flex-1 max-w-md mx-8">
            <div className="flex items-center space-x-10">
              <Link
                href="/"
                className="relative font-body text-base font-medium text-text-primary hover:text-accent transition-all duration-300 group"
              >
                <span>Home</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <div className="relative group">
                <button className="relative font-body text-base font-medium text-text-primary hover:text-accent transition-all duration-300 flex items-center space-x-2 group">
                  <span>Shop</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {/* Enhanced Dropdown Menu */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-80 bg-background border border-dove-grey/20 rounded-xl shadow-hover opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-3">
                  <div className="p-6">
                    <div className="space-y-3">
                      <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">Collections</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">Discover our curated collections of luxury fragrances crafted for the discerning individual.</p>
                      <div className="mt-4 pt-4 border-t border-dove-grey/20">
                        <Link href="/search" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium text-sm">
                          View All Collections
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link
                href="/about"
                className="relative font-body text-base font-medium text-text-primary hover:text-accent transition-all duration-300 group"
              >
                <span>About</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </nav>

          {/* Actions - Right */}
          <div className="flex items-center space-x-3">
            {/* Account Icon */}
            <Link
              href="/account"
              className="p-3 text-text-primary hover:text-accent hover:bg-accent/5 rounded-full transition-all duration-300 group"
              aria-label="Account"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Cart */}
            <CartModal />
          </div>
        </div>


      </div>
    </header>
  );
}
