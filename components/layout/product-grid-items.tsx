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
          className="group relative"
        >
          <Link
            className="block"
            href={`/product/${product.handle}`}
            prefetch={true}
          >
            {/* Product Image Container */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-background border border-dove-grey/10 group-hover:border-accent/20 transition-all duration-500">
              <GridTileImage
                alt={product.title}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/5 transition-all duration-500" />
              
              {/* Availability indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-3 h-3 rounded-full border-2 border-background shadow-sm ${
                  product.availableForSale ? 'bg-green-500' : 'bg-dove-grey'
                }`} />
              </div>
            </div>

            {/* Product Information */}
            <div className="mt-6 space-y-3">
              {/* Product Title */}
              <h3 className="font-heading text-base font-medium text-text-primary leading-tight line-clamp-2 group-hover:text-accent transition-colors duration-300">
                {product.title}
              </h3>
              
              {/* Price and Status */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-numeric text-lg font-semibold text-text-primary">
                    {new Intl.NumberFormat('en-CA', {
                      style: 'currency',
                      currency: product.priceRange.minVariantPrice.currencyCode
                    }).format(parseFloat(product.priceRange.minVariantPrice.amount))}
                  </p>
                  
                  {/* Availability text */}
                  <div className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      product.availableForSale ? 'bg-green-500' : 'bg-dove-grey'
                    }`} />
                    <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                      {product.availableForSale ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
                
                {/* Quick action hint */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
