import { getCollections } from 'lib/shopify';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';
import FilterDropdown from './filter-dropdown';
import CollectionFilters from './collection-filters';

export default function FilterBar() {
  return (
    <div className="w-full mb-8">
      <div className="space-y-6">
        {/* Filter Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-heading font-bold text-text-primary">
              Discover Fragrances
            </h2>
            <p className="text-text-secondary mt-1">
              Find your perfect scent from our curated collections
            </p>
          </div>
          
          {/* Sort Dropdown - Desktop & Mobile */}
          <div className="md:w-64">
            <Suspense fallback={<SortSkeleton />}>
              <FilterDropdown 
                items={sorting} 
                placeholder="Sort by..."
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                }
              />
            </Suspense>
          </div>
        </div>

        {/* Collection Filters */}
        <div>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
            Collections
          </h3>
          <Suspense fallback={<CollectionsSkeleton />}>
            <CollectionFilters />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

// Loading skeletons
const SortSkeleton = () => (
  <div className="h-12 bg-dove-grey/10 animate-pulse rounded-xl w-full" />
);

const CollectionsSkeleton = () => (
  <div className="flex flex-wrap gap-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <div 
        key={i} 
        className="h-12 bg-dove-grey/10 animate-pulse rounded-xl"
        style={{ width: `${Math.random() * 80 + 100}px` }}
      />
    ))}
  </div>
); 