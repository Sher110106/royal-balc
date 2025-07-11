import clsx from 'clsx';
import Image from 'next/image';

export function GridTileImage({
  isInteractive = true,
  active,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
} & React.ComponentProps<typeof Image>) {
  return (
    <div className="group flex h-full w-full items-center justify-center overflow-hidden bg-background">
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`
        <Image
          className={clsx('relative h-full w-full object-cover', {
            'transition-transform duration-700 ease-out group-hover:scale-[1.02]': isInteractive
          })}
          {...props}
        />
      ) : (
        // Elegant placeholder for missing images
        <div className="flex flex-col items-center justify-center h-full w-full bg-background">
          <div className="w-16 h-16 rounded-full bg-dove-grey/10 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-dove-grey/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-xs font-medium text-dove-grey/60 uppercase tracking-wider">
            Image Coming Soon
          </p>
        </div>
      )}
    </div>
  );
}
