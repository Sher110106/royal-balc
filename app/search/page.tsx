import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import FilterBar from 'components/layout/search/filter-bar';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const metadata = {
  title: 'Search - Royal Balc Perfume',
  description: 'Discover our luxury fragrance collections - Warm & Sensual Woods, Fresh & Everyday, Elegant Allure, and Signature Power Scents.'
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <div className="space-y-8">
      {/* Filter Bar */}
      <FilterBar />

      {/* Search Results Section */}
      <div className="space-y-6">
        {/* Results Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            {searchValue ? (
              <>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                  {products.length === 0 ? 'No Results Found' : 'Search Results'}
                </h1>
                <p className="text-lg text-text-secondary mt-2">
                  {products.length === 0
                    ? 'No fragrances match your search for '
                    : `Found ${products.length} exquisite ${resultsText} for `}
                  <span className="font-semibold text-accent">"{searchValue}"</span>
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                  All Fragrances
                </h1>
                <p className="text-lg text-text-secondary mt-2">
                  Discover our complete collection of luxury fragrances
                </p>
              </>
            )}
          </div>
          
          {/* Results Stats */}
          {products.length > 0 && (
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">{products.length} Products</span>
              </div>
              {searchValue && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Search Active</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="space-y-6">
            {/* Grid Container */}
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              <ProductGridItems products={products} />
            </Grid>
            
            {/* Bottom Statistics */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-dove-grey/20">
              <div className="text-text-secondary">
                Showing all {products.length} {resultsText}
                {searchValue && (
                  <span className="ml-2 text-accent font-medium">
                    for "{searchValue}"
                  </span>
                )}
              </div>
              
              {/* Quick Actions */}
              <div className="flex items-center gap-3">
                {searchValue && (
                  <a 
                    href="/search" 
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-text-primary border border-dove-grey/30 rounded-lg hover:bg-dove-grey/5 transition-colors"
                  >
                    Clear Search
                  </a>
                )}
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-background bg-accent rounded-lg hover:bg-accent/90 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Save Search
                </button>
              </div>
            </div>
          </div>
        ) : searchValue ? (
          /* No Results State */
          <div className="text-center py-24">
            <div className="max-w-lg mx-auto">
              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-8 bg-dove-grey/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-dove-grey/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                No Fragrances Found
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                We couldn't find any fragrances matching "<span className="font-semibold text-accent">{searchValue}</span>". 
                Try browsing our collections or adjusting your search terms.
              </p>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/search" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Browse All Collections
                </a>
                <button className="inline-flex items-center justify-center px-6 py-3 border border-dove-grey/30 text-text-primary font-semibold rounded-lg hover:bg-dove-grey/5 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Welcome State for /search without query */
          <div className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                Explore Our Fragrance Collections
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Use the collection filters above to discover fragrances that match your style, 
                or search for specific scents using the search bar.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
