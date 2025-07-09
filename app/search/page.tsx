import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        {/* Search Results Header */}
        {searchValue ? (
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {products.length === 0 ? 'No Results Found' : `Search Results`}
            </h1>
            <p className="text-lg text-gray-600">
              {products.length === 0
                ? 'No products match your search for '
                : `Found ${products.length} ${resultsText} for `}
              <span className="font-semibold text-gray-900">&quot;{searchValue}&quot;</span>
            </p>
          </div>
        ) : (
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Products
            </h1>
            <p className="text-lg text-gray-600">
              Discover our complete collection of luxury fragrances
            </p>
          </div>
        )}

        {/* Products Grid */}
        {products.length > 0 ? (
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <ProductGridItems products={products} />
          </Grid>
        ) : searchValue ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-gray-500 mb-6">
              Try adjusting your search terms or browse our collections
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
