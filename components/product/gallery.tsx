'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useProduct, useUpdateURL } from 'components/product/product-context';
import Image from 'next/image';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  const buttonClassName =
    'h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background transition-all flex items-center justify-center text-text-secondary hover:text-accent border border-dove-grey/20 hover:border-accent/30';

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}

        {images.length > 1 && (
          <>
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                const newState = updateImage(previousImageIndex.toString());
                updateURL(newState);
              }}
              aria-label="Previous product image"
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${buttonClassName}`}
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => {
                const newState = updateImage(nextImageIndex.toString());
                updateURL(newState);
              }}
              aria-label="Next product image"
              className={`absolute right-4 top-1/2 -translate-y-1/2 ${buttonClassName}`}
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {imageIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => {
            const isActive = index === imageIndex;

            return (
              <button
                key={image.src}
                onClick={() => {
                  const newState = updateImage(index.toString());
                  updateURL(newState);
                }}
                aria-label={`Select image ${index + 1}`}
                className={`flex-none w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                  isActive ? 'border-accent' : 'border-dove-grey/30 hover:border-accent/50'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.altText}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
