import { SortFilterItem } from 'lib/constants';
import { Suspense } from 'react';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <div className="space-y-1">
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </div>
  );
}

export default function FilterList({ list, title }: { list: ListItem[]; title?: string }) {
  return (
    <div className="w-full">
      <nav>
        {title ? (
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading font-bold text-lg text-text-primary">
              {title}
            </h2>
            <span className="text-xs text-text-secondary font-medium bg-dove-grey/10 px-2 py-1 rounded-full">
              {list.length}
            </span>
          </div>
        ) : null}
        
        {/* Desktop View */}
        <div className="hidden md:block">
          <Suspense fallback={<DesktopSkeleton />}>
            <FilterItemList list={list} />
          </Suspense>
        </div>
        
        {/* Mobile View */}
        <div className="md:hidden">
          <Suspense fallback={<MobileSkeleton />}>
            <FilterItemDropdown list={list} />
          </Suspense>
        </div>
      </nav>
    </div>
  );
}

// Loading skeletons
const DesktopSkeleton = () => (
  <div className="space-y-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="px-3 py-2 rounded-lg border border-dove-grey/20">
        <div className="h-4 bg-text-secondary/20 animate-pulse rounded w-3/4" />
      </div>
    ))}
  </div>
);

const MobileSkeleton = () => (
  <div className="p-4 rounded-lg border border-dove-grey/20">
    <div className="h-5 bg-text-secondary/20 animate-pulse rounded w-full" />
  </div>
);
