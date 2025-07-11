'use client';

import clsx from 'clsx';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { ListItem } from '.';
import { FilterItem } from './item';

export default function FilterItemDropdown({ list }: { list: ListItem[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState('');
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    // Set default to "Relevance" if no sort parameter is found
    let activeTitle = 'Relevance';
    
    list.forEach((listItem: ListItem) => {
      if (
        ('path' in listItem && pathname === listItem.path) ||
        ('slug' in listItem && searchParams.get('sort') === listItem.slug)
      ) {
        activeTitle = listItem.title;
      }
    });
    
    setActive(activeTitle);
  }, [pathname, list, searchParams]);

  return (
    <div className="relative" ref={ref}>
      {/* Dropdown Button */}
      <button
        onClick={() => setOpenSelect(!openSelect)}
        className={clsx(
          'flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300 bg-background',
          {
            'border-accent/50 bg-accent/5 text-accent shadow-sm': openSelect,
            'border-dove-grey/30 text-text-primary hover:border-accent/30 hover:bg-accent/5': !openSelect
          }
        )}
        aria-expanded={openSelect}
        aria-haspopup="listbox"
      >
        <div className="flex items-center space-x-3">
          {/* Sort Icon */}
          <div className={clsx(
            'w-5 h-5 flex items-center justify-center rounded-md transition-colors',
            {
              'bg-accent text-background': openSelect,
              'bg-dove-grey/20 text-text-secondary': !openSelect
            }
          )}>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="truncate">{active}</span>
        </div>
        
        <ChevronDownIcon 
          className={clsx(
            'h-5 w-5 transition-all duration-300',
            {
              'text-accent rotate-180': openSelect,
              'text-text-secondary': !openSelect
            }
          )} 
        />
      </button>

      {/* Dropdown Menu */}
      {openSelect && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => setOpenSelect(false)}
          />
          
          {/* Menu */}
          <div className="absolute z-40 w-full mt-2 bg-background border border-dove-grey/30 rounded-xl shadow-hover max-h-80 overflow-y-auto">
            <div className="p-2 space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-text-secondary uppercase tracking-wider border-b border-dove-grey/20 mb-2">
                Sort Options
              </div>
              {list.map((item: ListItem, i) => (
                <div
                  key={i}
                  onClick={() => setOpenSelect(false)}
                  className="block"
                >
                  <FilterItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
