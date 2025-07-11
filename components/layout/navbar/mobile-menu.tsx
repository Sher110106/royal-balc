'use client';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { Bars3Icon, ChevronDownIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Menu } from 'lib/shopify/types';

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [shopSubmenuOpen, setShopSubmenuOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setShopSubmenuOpen(false);
  }, [pathname, searchParams]);

  const toggleShopSubmenu = () => {
    setShopSubmenuOpen(!shopSubmenuOpen);
  };

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-background hover:bg-accent/5 border border-dove-grey/20 text-text-primary hover:text-accent hover:border-accent/30 transition-all duration-300 shadow-sm md:hidden"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-dove-grey/10">
                  <h2 className="font-heading text-2xl font-semibold text-text-primary">Menu</h2>
                  <button
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-background hover:bg-accent/5 border border-dove-grey/20 text-text-primary hover:text-accent hover:border-accent/30 transition-all duration-300 shadow-sm"
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto p-6">
                  <nav className="space-y-2">
                    <Link
                      href="/"
                      onClick={closeMobileMenu}
                      className="flex items-center px-4 py-4 text-lg font-medium text-text-primary hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300"
                    >
                      Home
                    </Link>
                    
                    {/* Shop with Submenu */}
                    <div className="space-y-2">
                      <button
                        onClick={toggleShopSubmenu}
                        className="flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-text-primary hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300"
                      >
                        <span>Shop</span>
                        {shopSubmenuOpen ? (
                          <ChevronDownIcon className="h-5 w-5" />
                        ) : (
                          <ChevronRightIcon className="h-5 w-5" />
                        )}
                      </button>
                      
                      {/* Shop Submenu */}
                      <Transition
                        show={shopSubmenuOpen}
                        enter="transition-all duration-300 ease-out"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-40"
                        leave="transition-all duration-200 ease-in"
                        leaveFrom="opacity-100 max-h-40"
                        leaveTo="opacity-0 max-h-0"
                      >
                        <div className="ml-6 space-y-1 overflow-hidden">
                          <Link
                            href="/search/men"
                            onClick={closeMobileMenu}
                            className="flex items-center px-4 py-3 text-base font-medium text-text-secondary hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300"
                          >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Men
                          </Link>
                          <Link
                            href="/search/women"
                            onClick={closeMobileMenu}
                            className="flex items-center px-4 py-3 text-base font-medium text-text-secondary hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300"
                          >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Women
                          </Link>
                        </div>
                      </Transition>
                    </div>
                    
                    <Link
                      href="/about"
                      onClick={closeMobileMenu}
                      className="flex items-center px-4 py-4 text-lg font-medium text-text-primary hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className="flex items-center px-4 py-4 text-lg font-medium text-text-primary hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300"
                    >
                      Contact
                    </Link>
                    {menu.length ? (
                      <>
                        {menu.map((item: Menu) => (
                          <Link
                            key={item.title}
                            href={item.path}
                            onClick={closeMobileMenu}
                            className="flex items-center px-4 py-4 text-lg font-medium text-text-primary hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </>
                    ) : null}
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-dove-grey/10">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center px-6 py-3 bg-accent text-background rounded-xl font-medium hover:bg-accent/90 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </Link>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
