'use client';

import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { useProduct } from 'components/product/product-context';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  const { state } = useProduct();

  const selectedVariant = product.variants.find((variant) =>
    variant.selectedOptions.every(
      (option) => state[option.name.toLowerCase()] === option.value
    )
  );

  const price = selectedVariant
    ? selectedVariant.price.amount
    : product.priceRange.maxVariantPrice.amount;
  const currencyCode = selectedVariant
    ? selectedVariant.price.currencyCode
    : product.priceRange.maxVariantPrice.currencyCode;

  return (
    <div className="space-y-8">
      {/* Product Header */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          {product.title}
        </h1>
        <div className="flex items-center">
          <Price
            amount={price}
            currencyCode={currencyCode}
            className="text-2xl font-semibold text-text-primary"
          />
        </div>
      </div>

      {/* Product Description */}
      {product.descriptionHtml ? (
        <div className="border-t border-dove-grey/20 pt-8">
          <Prose
            className="text-text-secondary leading-relaxed"
            html={product.descriptionHtml}
          />
        </div>
      ) : null}

      {/* Variant Selector */}
      <div className="border-t border-dove-grey/20 pt-8">
        <VariantSelector options={product.options} variants={product.variants} />
      </div>

      {/* Add to Cart */}
      <div className="border-t border-dove-grey/20 pt-8">
        <AddToCart product={product} />
      </div>
    </div>
  );
}
