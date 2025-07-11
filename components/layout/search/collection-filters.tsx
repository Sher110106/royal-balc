import { getCollections } from 'lib/shopify';
import CollectionFilterClient from './collection-filter-client';

export default async function CollectionFilters() {
  const collections = await getCollections();
  const visibleCollections = collections
    .filter(collection => 
      !collection.handle.startsWith('hidden-') && 
      collection.title !== 'Home page' &&
      collection.title !== 'Homepage' &&
      collection.title !== 'Home'
    )
    .map(collection => ({
      title: collection.title,
      path: collection.path,
      handle: collection.handle
    }));

  return <CollectionFilterClient collections={visibleCollections} />;
} 