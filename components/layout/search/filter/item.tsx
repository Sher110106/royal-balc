'use client';

import clsx from 'clsx';
import type { SortFilterItem } from 'lib/constants';
import { createUrl } from 'lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ListItem, PathFilterItem } from '.';

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? 'div' : Link;

  newParams.delete('q');

  if (active) {
    return (
      <div
        className={clsx(
          'w-full text-sm px-4 py-3 rounded-xl border transition-all duration-300 flex items-center justify-between group',
          'bg-accent/10 border-accent text-accent shadow-sm'
        )}
      >
        <span className="font-medium">{item.title}</span>
        <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    );
  }

  return (
    <Link
      href={createUrl(item.path, newParams)}
      className={clsx(
        'w-full text-sm px-4 py-3 rounded-xl border transition-all duration-300 flex items-center justify-between group',
        'bg-background border-dove-grey/20 hover:border-accent/30 hover:bg-accent/5 text-text-primary hover:text-accent'
      )}
    >
      <span className="font-medium">{item.title}</span>
    </Link>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('sort') === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug })
    })
  );

  if (active) {
    return (
      <div
        className={clsx(
          'w-full text-sm px-4 py-3 rounded-xl border transition-all duration-300 flex items-center justify-between group',
          'bg-accent/10 border-accent text-accent shadow-sm'
        )}
      >
        <div className="flex items-center space-x-3">
          {/* Sort Icon */}
          <div className="w-5 h-5 flex items-center justify-center rounded-md transition-colors bg-accent text-background">
            {getSortIcon(item.title)}
          </div>
          <span className="font-medium">{item.title}</span>
        </div>
        
        <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    );
  }

  return (
    <Link
      href={href}
      prefetch={false}
      className={clsx(
        'w-full text-sm px-4 py-3 rounded-xl border transition-all duration-300 flex items-center justify-between group',
        'bg-background border-dove-grey/20 hover:border-accent/30 hover:bg-accent/5 text-text-primary hover:text-accent'
      )}
    >
      <div className="flex items-center space-x-3">
        {/* Sort Icon */}
        <div className="w-5 h-5 flex items-center justify-center rounded-md transition-colors bg-dove-grey/20 text-text-secondary group-hover:bg-accent/20 group-hover:text-accent">
          {getSortIcon(item.title)}
        </div>
        <span className="font-medium">{item.title}</span>
      </div>
    </Link>
  );
}

// Helper function to get sort icons
function getSortIcon(title: string) {
  switch (title.toLowerCase()) {
    case 'relevance':
      return <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'trending':
      return <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>;
    case 'latest arrivals':
      return <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>;
    case 'price: low to high':
      return <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;
    case 'price: high to low':
      return <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>;
    default:
      return <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
  }
}

export function FilterItem({ item }: { item: ListItem }) {
  return 'path' in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />;
}
