import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import HeroSection from 'components/hero-section';
import Footer from 'components/layout/footer';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata = {
  title: 'Royal Balc Perfume - Luxury. Designer. Long-Lasting. Affordable.',
  description: 'Perfume re-imagined by Royal Balc. Discover luxury fragrances with authentic oils, sustainable practices, and affordable elegance. Free shipping on orders ₹1,999+.',
  openGraph: {
    type: 'website',
    title: 'Royal Balc Perfume - Luxury Fragrances Redefined',
    description: 'Crafting prestige in every drop. Explore our collection of luxury perfumes made with 100% authentic oils.',
  }
};

// Hero Section Component
function PerfumeBottleSVG(props: React.ComponentProps<'svg'>) {
  // 3D-like abstract bottle with gold and glass gradients
  return (
    <svg
      viewBox="0 0 120 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Perfume bottle illustration"
      className={props.className}
      {...props}
    >
      {/* Bottle base */}
      <ellipse cx="60" cy="180" rx="40" ry="20" fill="url(#glassGradient)" opacity="0.7" />
      {/* Bottle body */}
      <rect x="30" y="60" width="60" height="120" rx="30" fill="url(#glassGradient)" stroke="url(#goldGradient)" strokeWidth="4" />
      {/* Bottle neck */}
      <rect x="48" y="40" width="24" height="30" rx="8" fill="url(#goldGradient)" />
      {/* Cap */}
      <rect x="44" y="20" width="32" height="24" rx="8" fill="url(#goldGradient)" stroke="var(--color-midnight-blue)" strokeWidth="2" />
      {/* Highlights */}
      <ellipse cx="60" cy="120" rx="18" ry="60" fill="white" opacity="0.08" />
      <ellipse cx="60" cy="100" rx="8" ry="30" fill="white" opacity="0.12" />
      <defs>
        <linearGradient id="glassGradient" x1="0" y1="60" x2="120" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F9F9F7" />
          <stop offset="1" stopColor="#D4AF37" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="goldGradient" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4AF37" />
          <stop offset="1" stopColor="#BFA14A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Value Proposition Strip Component
function ValuePropositionStrip() {
  const valueProps = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Free Shipping on orders ₹1,999+",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "100% Authentic Oils",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Pay Later Options",
    },
  ];

  return (
    <section className="py-8 bg-background border-b border-dove-grey/20">
      <div className="container mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 p-4">
              <div className="text-royal-gold">
                {prop.icon}
              </div>
              <span className="font-body font-medium text-text-primary text-sm md:text-base">
                {prop.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Fragrance Quiz Teaser Component
function FragranceQuizTeaser() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-midnight-blue/20 to-royal-gold/20">
              <div className="absolute inset-0 bg-[url('/lifestyle-quiz.jpg')] bg-cover bg-center"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
              Find Your Perfect <span className="text-royal-gold">Scent</span>
            </h2>
            <p className="font-body text-lg text-text-secondary leading-relaxed">
              Take our personalized fragrance quiz to discover scents that match your personality, 
              mood, and style. Get recommendations tailored just for you.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center px-6 py-3 bg-royal-gold text-midnight-blue font-body font-semibold rounded-md hover:bg-royal-gold/90 transition-royal"
            >
              Find Your Scent
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Social Proof Component
function SocialProof() {
  return (
    <section className="py-16 bg-porcelain/50">
      <div className="container mx-auto px-gutter">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Loved by Fragrance Enthusiasts
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex text-royal-gold">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="font-body font-semibold text-text-primary">4.8 out of 5</span>
            <span className="font-body text-text-secondary">(600 reviews)</span>
          </div>
          <p className="font-body text-text-secondary">
            Join thousands of customers sharing their Royal Balc experience
          </p>
        </div>
        
        {/* Instagram Feed Placeholder */}
        <div className="overflow-hidden">
          <div className="flex space-x-4 animate-scroll">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex-none w-48 h-48 bg-dove-grey/20 rounded-lg flex items-center justify-center">
                <span className="text-text-secondary text-sm">Customer Photo {item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link
            href="https://instagram.com/royalbalc"
            className="inline-flex items-center font-body font-medium text-royal-gold hover:text-royal-gold/80 transition-royal"
          >
            Follow @RoyalBalc on Instagram
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropositionStrip />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Featured <span className="text-royal-gold">Collection</span>
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
              Discover our handpicked selection of bestselling fragrances, 
              each crafted with the finest ingredients and attention to detail.
            </p>
          </div>
          <Suspense fallback={<div className="h-64 bg-dove-grey/20 rounded-lg animate-pulse"></div>}>
            <ThreeItemGrid />
          </Suspense>
        </div>
      </section>

      <FragranceQuizTeaser />
      
      {/* Carousel Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Trending <span className="text-royal-gold">Now</span>
            </h2>
            <p className="font-body text-lg text-text-secondary">
              Explore the most popular fragrances chosen by our community
            </p>
          </div>
          <Suspense fallback={<div className="h-64 bg-dove-grey/20 rounded-lg animate-pulse"></div>}>
            <Carousel />
          </Suspense>
        </div>
      </section>

      <SocialProof />
      <Footer />
    </>
  );
}
