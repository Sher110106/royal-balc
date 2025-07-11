import clsx from 'clsx';
import { Suspense } from 'react';

import { getCollections } from 'lib/shopify';
import FilterList from './filter';

async function CollectionList() {
  const collections = await getCollections();
  // Filter out hidden collections (those starting with 'hidden-') and "Home page"
  const visibleCollections = collections.filter(collection => 
    !collection.handle.startsWith('hidden-') && 
    collection.title !== 'Home page' &&
    collection.title !== 'Homepage' &&
    collection.title !== 'Home'
  );
  return <FilterList list={visibleCollections} title="Collections" />;
}

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded-sm';
const activeAndTitles = 'bg-text-primary/10';
const items = 'bg-text-secondary/20';

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 md:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
