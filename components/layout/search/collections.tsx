import Link from 'next/link';
import { Suspense } from 'react';

import { getCollections } from 'lib/shopify';

// Collection descriptions for better UX
const collectionDescriptions = {
  'Warm & Sensual Woods': 'Rich, deep fragrances with woody base notes',
  'Fresh & Everyday': 'Light, clean scents perfect for daily wear',
  'Elegant Allure': 'Sophisticated fragrances for special occasions',
  'Signature Power Scents': 'Bold, confident fragrances that make a statement'
};

// Collection icons for better visual appeal
const collectionIcons = {
  'Warm & Sensual Woods': '🌲',
  'Fresh & Everyday': '🌿',
  'Elegant Allure': '✨',
  'Signature Power Scents': '💎'
};

function CollectionCard({ collection }: { collection: any }) {
  const description = collectionDescriptions[collection.title as keyof typeof collectionDescriptions];
  const icon = collectionIcons[collection.title as keyof typeof collectionIcons];

  return (
    <Link
      href={collection.path}
      className="group block p-4 rounded-xl border border-dove-grey/20 bg-background hover:border-accent/30 hover:bg-accent/5 hover:shadow-hover transition-all duration-300"
    >
      <div className="flex items-start space-x-3">
        {/* Icon */}
        <div className="text-2xl flex-shrink-0 mt-1">
          {icon || '📦'}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-sm leading-tight text-text-primary group-hover:text-accent transition-colors">
            {collection.title}
          </h3>
          {description && (
            <p className="text-xs leading-relaxed mt-2 text-text-secondary group-hover:text-text-primary transition-colors">
              {description}
            </p>
          )}
        </div>
        
        {/* Chevron */}
        <div className="flex-shrink-0 text-text-secondary group-hover:text-accent transition-all duration-300 group-hover:translate-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

async function CollectionList() {
  const collections = await getCollections();
  // Filter out hidden collections (those starting with 'hidden-') and "Home page"
  const visibleCollections = collections.filter(collection => 
    !collection.handle.startsWith('hidden-') && 
    collection.title !== 'Home page' &&
    collection.title !== 'Homepage' &&
    collection.title !== 'Home'
  );

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-lg text-text-primary">
          Collections
        </h2>
        <span className="text-xs text-text-secondary font-medium bg-dove-grey/10 px-2 py-1 rounded-full">
          {visibleCollections.length + 1}
        </span>
      </div>
      
      {/* All Collections Link */}
      <CollectionCard 
        collection={{ title: 'All Collections', path: '/search' }}
      />
      
      {/* Individual Collections */}
      {visibleCollections.map((collection, index) => (
        <CollectionCard 
          key={index}
          collection={collection}
        />
      ))}
    </div>
  );
}

async function MobileCollectionList() {
  const collections = await getCollections();
  const visibleCollections = collections.filter(collection => 
    !collection.handle.startsWith('hidden-') && 
    collection.title !== 'Home page' &&
    collection.title !== 'Homepage' &&
    collection.title !== 'Home'
  );

  const allCollections = [
    { title: 'All Collections', path: '/search', handle: 'all' },
    ...visibleCollections
  ];

  return (
    <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
      {allCollections.map((collection, index) => {
        const description = collectionDescriptions[collection.title as keyof typeof collectionDescriptions];
        const icon = collectionIcons[collection.title as keyof typeof collectionIcons];
        
        return (
          <Link
            key={index}
            href={collection.path}
            className="flex-shrink-0 group block p-3 rounded-xl border border-dove-grey/20 bg-background hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 min-w-[160px]"
          >
            <div className="text-center">
              {/* Icon */}
              <div className="text-xl mb-2">
                {icon || '📦'}
              </div>
              
              {/* Title */}
              <h3 className="font-heading font-semibold text-xs text-text-primary group-hover:text-accent transition-colors leading-tight">
                {collection.title}
              </h3>
              
              {/* Description (shortened for mobile) */}
              {description && (
                <p className="text-xs text-text-secondary mt-1 leading-tight">
                  {description.split(',')[0]}
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// Enhanced loading skeleton
const LoadingSkeleton = () => (
  <div className="space-y-3">
    <div className="flex items-center justify-between mb-6">
      <div className="h-6 w-24 bg-text-primary/10 animate-pulse rounded-lg" />
      <div className="h-5 w-8 bg-text-secondary/20 animate-pulse rounded-full" />
    </div>
    
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="p-4 rounded-xl border border-dove-grey/20">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-text-secondary/20 animate-pulse rounded-lg flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-text-primary/10 animate-pulse rounded w-3/4" />
            <div className="h-3 bg-text-secondary/20 animate-pulse rounded w-full" />
          </div>
          <div className="w-4 h-4 bg-text-secondary/20 animate-pulse rounded flex-shrink-0" />
        </div>
      </div>
    ))}
  </div>
);

export default function Collections() {
  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:block">
        <Suspense fallback={<LoadingSkeleton />}>
          <CollectionList />
        </Suspense>
      </div>
      
      {/* Mobile View - Horizontal Scroll */}
      <div className="md:hidden">
        <div className="mb-4">
          <h2 className="font-heading font-bold text-lg text-text-primary mb-3">
            Collections
          </h2>
        </div>
        <Suspense fallback={<LoadingSkeleton />}>
          <MobileCollectionList />
        </Suspense>
      </div>
    </div>
  );
}
