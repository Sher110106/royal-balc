import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
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

  return (
    <div className="min-h-screen bg-background">
      {/* Collection Hero Section */}
      <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-dove-grey/20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6 leading-tight">
              {collectionDisplayName}
            </h1>
            {collection?.description ? (
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                {collection.description}
              </p>
            ) : (
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                Discover our exquisite collection of premium fragrances
              </p>
            )}
            
            {/* Collection metadata */}
            <div className="mt-8 flex items-center justify-center space-x-8 text-text-secondary">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="text-sm font-medium">{products.length} Fragrances</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-6 py-16">
        {products.length === 0 ? (
          <div className="text-center py-24">
            <div className="max-w-md mx-auto">
              <div className="text-dove-grey mb-8">
                <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                Collection Coming Soon
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                This collection is currently being curated. Check back soon for new arrivals!
              </p>
              <a 
                href="/search" 
                className="inline-flex items-center px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Explore Other Collections
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Collection Stats and Sort */}
            <div className="mb-12">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-secondary">
                    Showing all {products.length} fragrances in this collection
                  </p>
                </div>
                {/* You can add sort dropdown here if needed */}
              </div>
            </div>

            {/* Enhanced Products Grid */}
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <ProductGridItems products={products} />
            </Grid>

            {/* Collection Footer */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                  Can't Find What You're Looking For?
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Explore our other fragrance collections or contact our fragrance experts for personalized recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/search" 
                    className="inline-flex items-center px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    Browse All Collections
                  </a>
                  <a 
                    href="/about" 
                    className="inline-flex items-center px-6 py-3 border border-dove-grey/30 text-text-primary font-semibold rounded-lg hover:bg-background/50 transition-colors"
                  >
                    Contact Experts
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
