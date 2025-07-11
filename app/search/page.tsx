import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
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
    <>
      {/* Hero Section */}
      {!searchValue && (
        <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-dove-grey/20 mb-8">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6 leading-tight">
                Luxury Fragrance Collection
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8">
                Discover our curated collections of premium fragrances
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-dove-grey/20 hover:border-accent/30 transition-colors">
                  <h3 className="font-heading font-semibold text-text-primary text-sm">Warm & Sensual Woods</h3>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-dove-grey/20 hover:border-accent/30 transition-colors">
                  <h3 className="font-heading font-semibold text-text-primary text-sm">Fresh & Everyday</h3>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-dove-grey/20 hover:border-accent/30 transition-colors">
                  <h3 className="font-heading font-semibold text-text-primary text-sm">Elegant Allure</h3>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-dove-grey/20 hover:border-accent/30 transition-colors">
                  <h3 className="font-heading font-semibold text-text-primary text-sm">Signature Power Scents</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Results Header */}
      {searchValue && (
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            {products.length === 0 ? 'No Results Found' : 'Search Results'}
          </h1>
          <p className="text-lg text-text-secondary">
            {products.length === 0
              ? 'No fragrances match your search for '
              : `Found ${products.length} exquisite ${resultsText} for `}
            <span className="font-semibold text-accent">&quot;{searchValue}&quot;</span>
          </p>
        </div>
      )}

      {/* Products Section */}
      {products.length > 0 ? (
        <>
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-text-secondary">
              Showing {products.length} {resultsText}
              {searchValue && (
                <span className="ml-2 text-accent font-medium">
                  for "{searchValue}"
                </span>
              )}
            </p>
          </div>

          {/* Products Grid */}
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductGridItems products={products} />
          </Grid>
        </>
      ) : searchValue ? (
        <div className="text-center py-24">
          <div className="max-w-md mx-auto">
            <div className="text-dove-grey mb-8">
              <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              No Fragrances Found
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              We couldn't find any fragrances matching your search. Try browsing our collections or adjusting your search terms.
            </p>
            <a 
              href="/search" 
              className="inline-flex items-center px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Browse All Collections
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
