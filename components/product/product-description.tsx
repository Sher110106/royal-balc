import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className="space-y-8">
      {/* Product Header */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {product.title}
        </h1>
        <div className="flex items-center">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            className="text-2xl font-semibold text-gray-900"
          />
        </div>
      </div>

      {/* Product Description */}
      {product.descriptionHtml ? (
        <div className="border-t border-gray-100 pt-8">
          <Prose
            className="text-gray-600 leading-relaxed"
            html={product.descriptionHtml}
          />
        </div>
      ) : null}

      {/* Variant Selector */}
      <div className="border-t border-gray-100 pt-8">
        <VariantSelector options={product.options} variants={product.variants} />
      </div>

      {/* Add to Cart */}
      <div className="border-t border-gray-100 pt-8">
        <AddToCart product={product} />
      </div>
    </div>
  );
}
