'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('✨ Welcome to Royal Balc', {
        id: 'welcome-toast',
        duration: 8000, // Show for 8 seconds instead of infinity
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            Discover luxury fragrances crafted for the modern connoisseur. Where elegance meets accessibility.{' '}
            <a
              href="/search"
              className="text-royal-gold hover:text-royal-gold/80 font-semibold transition-colors"
            >
              Explore Collection
            </a>
          </>
        )
      });
    }
  }, []);

  return null;
}
