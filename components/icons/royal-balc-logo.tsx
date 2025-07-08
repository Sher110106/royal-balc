import clsx from 'clsx';

export default function RoyalBalcLogo(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Royal Balc logo"
      viewBox="0 0 100 40"
      {...props}
      className={clsx('h-8 w-20', props.className)}
    >
      {/* RB Monogram with Royal Balc styling */}
      <defs>
        <linearGradient id="royalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-midnight-blue)" />
          <stop offset="100%" stopColor="var(--color-royal-gold)" />
        </linearGradient>
      </defs>
      
      {/* Background Circle */}
      <circle cx="20" cy="20" r="18" fill="var(--color-midnight-blue)" />
      
      {/* R Letter */}
      <path 
        d="M10 12 L10 28 L12.5 28 L12.5 21 L17 21 L20 28 L23 28 L19.5 20.5 C21.5 19.5 22 17.5 22 15.5 C22 12.5 20 12 17.5 12 L10 12 Z M12.5 14.5 L17 14.5 C18.5 14.5 19.5 15 19.5 16.5 C19.5 18 18.5 18.5 17 18.5 L12.5 18.5 L12.5 14.5 Z" 
        fill="var(--color-royal-gold)"
      />
      
      {/* B Letter */}
      <path 
        d="M30 12 L30 28 L37.5 28 C40 28 42 26.5 42 24 C42 22.5 41 21.5 40 21 C41 20.5 42 19.5 42 17.5 C42 15 40 12 37.5 12 L30 12 Z M32.5 14.5 L37 14.5 C38.5 14.5 39.5 15 39.5 16.5 C39.5 18 38.5 18.5 37 18.5 L32.5 18.5 L32.5 14.5 Z M32.5 21 L37.5 21 C39 21 40 21.5 40 23 C40 24.5 39 25.5 37.5 25.5 L32.5 25.5 L32.5 21 Z" 
        fill="var(--color-royal-gold)"
      />
      
      {/* Royal Balc Text */}
      <text 
        x="50" 
        y="16" 
        fontSize="8" 
        fontFamily="var(--font-heading)" 
        fontWeight="700" 
        fill="var(--color-midnight-blue)"
      >
        ROYAL
      </text>
      <text 
        x="50" 
        y="28" 
        fontSize="8" 
        fontFamily="var(--font-heading)" 
        fontWeight="700" 
        fill="var(--color-royal-gold)"
      >
        BALC
      </text>
    </svg>
  );
} 