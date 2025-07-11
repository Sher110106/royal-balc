import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Main Content */}
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-8">
          {/* Full Width Content */}
          <main className="w-full">
            <Suspense fallback={<MainContentSkeleton />}>
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </Suspense>
          </main>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

// Loading skeleton for main content
const MainContentSkeleton = () => (
  <div className="space-y-8">
    {/* Filter Bar Skeleton */}
    <div className="space-y-4">
      <div className="h-8 bg-text-primary/10 animate-pulse rounded-lg w-64" />
      <div className="flex space-x-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-12 w-32 bg-text-secondary/20 animate-pulse rounded-xl" />
        ))}
      </div>
    </div>
    
    {/* Header skeleton */}
    <div className="space-y-4">
      <div className="h-10 bg-text-primary/10 animate-pulse rounded-lg w-96" />
      <div className="flex justify-between items-center">
        <div className="h-6 bg-text-secondary/20 animate-pulse rounded-lg w-48" />
        <div className="h-10 w-40 bg-text-secondary/20 animate-pulse rounded-lg" />
      </div>
    </div>
    
    {/* Grid skeleton */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <div className="aspect-square bg-dove-grey/10 animate-pulse rounded-xl" />
          <div className="space-y-2">
            <div className="h-4 bg-text-primary/10 animate-pulse rounded w-3/4" />
            <div className="h-4 bg-text-secondary/20 animate-pulse rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  </div>
);
