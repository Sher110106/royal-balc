'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CollectionFilterClientProps {
  collections: Array<{
    title: string;
    path: string;
    handle: string;
  }>;
}

// Collection metadata
const collectionMetadata = {
  'Men': {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    description: 'For him',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
  },
  'Women': {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    description: 'For her',
    color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30'
  },
  'Warm & Sensual Woods': { 
    icon: '🌲', 
    description: 'Deep & woody',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30'
  },
  'Fresh & Everyday': { 
    icon: '🌿', 
    description: 'Light & clean',
    color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
  },
  'Elegant Allure': { 
    icon: '✨', 
    description: 'Sophisticated',
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
  },
  'Signature Power Scents': { 
    icon: '💎', 
    description: 'Bold & confident',
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30'
  }
};

export default function CollectionFilterClient({ collections }: CollectionFilterClientProps) {
  const pathname = usePathname();

  // All collections with metadata
  const allCollections = [
    {
      title: 'All Collections',
      path: '/search',
      handle: 'all',
      metadata: {
        icon: '🎯',
        description: 'View all',
        color: 'from-accent/20 to-accent/30 border-accent/40'
      }
    },
    ...collections.map(collection => ({
      ...collection,
      metadata: collectionMetadata[collection.title as keyof typeof collectionMetadata]
    }))
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {allCollections.map((collection, index) => {
        const isActive = pathname === collection.path || 
          (collection.handle === 'all' && pathname === '/search');

        return (
          <Link
            key={collection.handle}
            href={collection.path}
            className={clsx(
              'group relative inline-flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 border',
              'hover:shadow-hover hover:scale-105 active:scale-95',
              {
                [`bg-gradient-to-r ${collection.metadata?.color} shadow-sm scale-105`]: isActive,
                'bg-background border-dove-grey/20 hover:border-accent/30': !isActive
              }
            )}
          >
            {/* Icon */}
            <span className="text-lg flex-shrink-0">
              {typeof collection.metadata?.icon === 'string' 
                ? collection.metadata.icon 
                : collection.metadata?.icon || '📦'}
            </span>
            
            {/* Content */}
            <div className="flex flex-col min-w-0">
              <span className={clsx(
                'font-semibold text-sm leading-tight transition-colors',
                {
                  'text-text-primary': isActive,
                  'text-text-primary group-hover:text-accent': !isActive
                }
              )}>
                {collection.title}
              </span>
              {collection.metadata?.description && (
                <span className={clsx(
                  'text-xs leading-tight transition-colors',
                  {
                    'text-text-secondary': isActive,
                    'text-text-secondary/80 group-hover:text-text-secondary': !isActive
                  }
                )}>
                  {collection.metadata.description}
                </span>
              )}
            </div>
            
            {/* Active indicator */}
            {isActive && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-background shadow-sm" />
            )}
          </Link>
        );
      })}
    </div>
  );
} 