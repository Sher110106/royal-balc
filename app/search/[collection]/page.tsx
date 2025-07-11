import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import FilterBar from 'components/layout/search/filter-bar';
import { defaultSort, sorting } from 'lib/constants';

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: `${collection.seo?.title || collection.title} - Royal Balc Perfume`,
    description:
      collection.seo?.description || collection.description || `Discover our ${collection.title} fragrance collection at Royal Balc Perfume`
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });
  const collection = await getCollection(params.collection);

  // Format collection name for display
  const collectionDisplayName = collection?.title || 
    params.collection
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const collectionDescription = collection?.description || 
    `Discover our exquisite ${collectionDisplayName.toLowerCase()} collection of premium fragrances`;

  return (
    <div className="space-y-8">
      {/* Filter Bar */}
      <FilterBar />

      {/* Collection Header */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl border border-dove-grey/10">
        <div className="max-w-4xl mx-auto px-6">
          {/* Collection Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Collection
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6 leading-tight">
            {collectionDisplayName}
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-8">
            {collectionDescription}
          </p>
          
          {/* Collection Stats */}
          <div className="flex items-center justify-center space-x-8 text-text-secondary">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">{products.length} Fragrances</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">Luxury Collection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="space-y-6">
        {products.length === 0 ? (
          /* Empty Collection State */
          <div className="text-center py-24">
            <div className="max-w-lg mx-auto">
              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-8 bg-dove-grey/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-dove-grey/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                Collection Coming Soon
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                This collection is currently being curated. Check back soon for new arrivals, 
                or explore our other fragrance collections.
              </p>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/search" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Explore Other Collections
                </a>
                <button className="inline-flex items-center justify-center px-6 py-3 border border-dove-grey/30 text-text-primary font-semibold rounded-lg hover:bg-dove-grey/5 transition-colors">
                  Get Notified
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Products Grid */
          <div className="space-y-6">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-heading font-bold text-text-primary">
                  {collectionDisplayName} Collection
                </h2>
                <p className="text-text-secondary mt-1">
                  {products.length} carefully curated fragrances
                </p>
              </div>
              
              {/* Collection Stats */}
              <div className="flex items-center gap-6 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">{products.length} Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="font-medium">Collection</span>
                </div>
              </div>
            </div>

            {/* Enhanced Products Grid */}
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              <ProductGridItems products={products} />
            </Grid>

            {/* Collection Footer */}
            <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 border border-dove-grey/10">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                  Can't Find What You're Looking For?
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Explore our other fragrance collections or contact our fragrance experts 
                  for personalized recommendations tailored to your preferences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/search" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    Browse All Collections
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-dove-grey/30 text-text-primary font-semibold rounded-lg hover:bg-background/50 transition-colors"
                  >
                    Contact Experts
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
