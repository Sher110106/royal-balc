'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { createUrl } from 'lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type FilterItem = {
  title: string;
  slug: string | null;
  sortKey?: string;
  reverse?: boolean;
};

interface FilterDropdownProps {
  items: FilterItem[];
  placeholder: string;
  icon?: React.ReactNode;
}

export default function FilterDropdown({ items, placeholder, icon }: FilterDropdownProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<FilterItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update active item based on current search params
  useEffect(() => {
    const currentSort = searchParams.get('sort');
    const active = items.find(item => item.slug === currentSort) || items[0] || null;
    setActiveItem(active);
  }, [searchParams, items]);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all duration-300',
          'bg-background hover:shadow-hover',
          {
            'border-accent/50 shadow-sm': isOpen,
            'border-dove-grey/20 hover:border-accent/30': !isOpen
          }
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {/* Icon */}
          <div className={clsx(
            'flex-shrink-0 transition-colors',
            {
              'text-accent': isOpen,
              'text-text-secondary': !isOpen
            }
          )}>
            {icon}
          </div>
          
          {/* Active Item */}
          <div className="min-w-0 flex-1 text-left">
            <div className="text-sm font-medium text-text-primary truncate">
              {activeItem?.title || placeholder}
            </div>
            <div className="text-xs text-text-secondary">
              {activeItem ? 'Selected' : 'Choose option'}
            </div>
          </div>
        </div>
        
        {/* Chevron */}
        <ChevronDownIcon 
          className={clsx(
            'w-5 h-5 transition-all duration-300 flex-shrink-0',
            {
              'text-accent rotate-180': isOpen,
              'text-text-secondary': !isOpen
            }
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/10 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute z-50 w-full mt-2 bg-background border border-dove-grey/20 rounded-xl shadow-hover overflow-hidden">
            <div className="p-2">
              {/* Header */}
              <div className="px-3 py-2 border-b border-dove-grey/20 mb-2">
                <div className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Sort Options
                </div>
              </div>
              
              {/* Items */}
              <div className="space-y-1">
                {items.map((item, index) => {
                  const isActive = activeItem?.slug === item.slug;
                  const q = searchParams.get('q');
                  const href = createUrl(
                    pathname,
                    new URLSearchParams({
                      ...(q && { q }),
                      ...(item.slug && { sort: item.slug })
                    })
                  );

                  return (
                    <Link
                      key={index}
                      href={href}
                      onClick={handleItemClick}
                      className={clsx(
                        'flex items-center justify-between w-full px-3 py-2.5 rounded-lg transition-all duration-200',
                        {
                          'bg-accent/10 text-accent': isActive,
                          'hover:bg-dove-grey/5 text-text-primary': !isActive
                        }
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {/* Sort icon */}
                        <div className={clsx(
                          'w-8 h-8 rounded-lg flex items-center justify-center transition-colors',
                          {
                            'bg-accent text-background': isActive,
                            'bg-dove-grey/10 text-text-secondary': !isActive
                          }
                        )}>
                          {getSortIcon(item.title)}
                        </div>
                        
                        <span className="font-medium text-sm">
                          {item.title}
                        </span>
                      </div>
                      
                      {/* Check mark for active item */}
                      {isActive && (
                        <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Helper function to get sort icons
function getSortIcon(title: string) {
  switch (title.toLowerCase()) {
    case 'relevance':
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'trending':
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>;
    case 'latest arrivals':
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>;
    case 'price: low to high':
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;
    case 'price: high to low':
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>;
    default:
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
  }
} 