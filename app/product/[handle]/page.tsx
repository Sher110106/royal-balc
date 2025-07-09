import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage(props: { params: Promise<{ handle: string }> }) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      
      {/* Product Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Product Gallery */}
            <div className="w-full">
              <Suspense
                fallback={
                  <div className="relative aspect-square w-full bg-gray-100 rounded-xl animate-pulse" />
                }
              >
                <Gallery
                  images={product.images.slice(0, 5).map((image: Image) => ({
                    src: image.url,
                    altText: image.altText
                  }))}
                />
              </Suspense>
            </div>

            {/* Product Details */}
            <div className="w-full lg:py-8">
              <Suspense fallback={<div className="h-96 bg-gray-100 rounded-xl animate-pulse" />}>
                <ProductDescription product={product} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <RelatedProducts id={product.id} />
      
      <Footer />
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You Might Also <span className="text-gray-600">Like</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover more fragrances that complement your style
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.handle} className="group">
              <Link
                className="block"
                href={`/product/${product.handle}`}
                prefetch={true}
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50">
                  <GridTileImage
                    alt={product.title}
                    label={{
                      title: product.title,
                      amount: product.priceRange.maxVariantPrice.amount,
                      currencyCode: product.priceRange.maxVariantPrice.currencyCode
                    }}
                    src={product.featuredImage?.url}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {product.priceRange.maxVariantPrice.currencyCode} {product.priceRange.maxVariantPrice.amount}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
