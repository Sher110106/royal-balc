import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-dove-grey/30 text-text-primary hover:text-accent hover:border-accent/30 transition-royal">
      <ShoppingCartIcon
        className={clsx('h-5 w-5 transition-all ease-in-out hover:scale-110', className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-5 w-5 rounded-full bg-royal-gold text-[11px] font-medium text-midnight-blue flex items-center justify-center">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
