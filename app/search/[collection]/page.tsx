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
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
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

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        {/* Collection Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {collection?.title || params.collection.charAt(0).toUpperCase() + params.collection.slice(1)}
          </h1>
          {collection?.description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {collection.description}
            </p>
          )}
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-500">
              This collection is currently empty. Check back soon for new arrivals!
            </p>
          </div>
        ) : (
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <ProductGridItems products={products} />
          </Grid>
        )}
      </div>
    </div>
  );
}
