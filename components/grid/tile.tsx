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
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden bg-background',
        {
          'border-2 border-accent shadow-hover': active,
          'border border-dove-grey/20': !active
        }
      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`
        <Image
          className={clsx('relative h-full w-full object-cover', {
            'transition-transform duration-500 ease-in-out group-hover:scale-110': isInteractive
          })}
          {...props}
        />
      ) : (
        // Placeholder for missing images
        <div className="flex items-center justify-center h-full w-full bg-dove-grey/10">
          <svg className="w-16 h-16 text-dove-grey/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
    </div>
  );
}
