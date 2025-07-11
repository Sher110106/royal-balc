import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item
          key={product.handle}
          className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <Link
            className="block"
            href={`/product/${product.handle}`}
            prefetch={true}
          >
            {/* Product Image */}
            <div className="aspect-square relative bg-gray-50">
              <GridTileImage
                alt={product.title}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-lg font-bold text-blue-600">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: product.priceRange.minVariantPrice.currencyCode
                }).format(parseFloat(product.priceRange.minVariantPrice.amount))}
              </p>
              <div className="mt-2 flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${product.availableForSale ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-xs text-gray-500">
                  {product.availableForSale ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
