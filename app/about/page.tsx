import Footer from 'components/layout/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Royal Balc',
  description: 'Discover the story behind Royal Balc Perfume - luxury fragrances crafted with authentic oils, sustainable practices, and affordable elegance.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-midnight-blue to-primary">
        <div className="container mx-auto px-gutter text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-porcelain mb-6">
            About <span className="text-royal-gold">Royal Balc</span>
          </h1>
          <p className="font-body text-xl text-porcelain/90 max-w-3xl mx-auto">
            Redefining luxury fragrances with authentic oils, sustainable practices, and affordable elegance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-gutter max-w-4xl">
          
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
              Our <span className="text-royal-gold">Story</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-text-secondary leading-relaxed mb-6">
                Royal Balc was born from a simple yet powerful vision: to make luxury fragrances accessible without compromising on quality. 
                Founded with the belief that everyone deserves to experience the finest scents, we've dedicated ourselves to crafting 
                perfumes that rival the most prestigious designer brands at a fraction of the cost.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our journey began with extensive research into the art of perfumery, studying the compositions of world-renowned fragrances 
                and sourcing the highest quality raw materials. We work directly with master perfumers and trusted suppliers to ensure 
                every bottle meets our exacting standards.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
              Our <span className="text-royal-gold">Mission</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-porcelain/5 p-8 rounded-lg">
                <h3 className="font-heading text-xl font-bold text-royal-gold mb-4">Quality Without Compromise</h3>
                <p className="text-text-secondary">
                  We use only the finest authentic oils and ingredients, ensuring each fragrance delivers 
                  exceptional longevity and projection that rivals luxury designer brands.
                </p>
              </div>
              <div className="bg-porcelain/5 p-8 rounded-lg">
                <h3 className="font-heading text-xl font-bold text-royal-gold mb-4">Accessible Luxury</h3>
                <p className="text-text-secondary">
                  By eliminating unnecessary markups and working directly with suppliers, we offer 
                  premium fragrances at prices that make luxury accessible to everyone.
                </p>
              </div>
              <div className="bg-porcelain/5 p-8 rounded-lg">
                <h3 className="font-heading text-xl font-bold text-royal-gold mb-4">Sustainable Practices</h3>
                <p className="text-text-secondary">
                  We're committed to ethical sourcing and sustainable packaging, ensuring our impact 
                  on the environment is as refined as our fragrances.
                </p>
              </div>
              <div className="bg-porcelain/5 p-8 rounded-lg">
                <h3 className="font-heading text-xl font-bold text-royal-gold mb-4">Customer-Centric</h3>
                <p className="text-text-secondary">
                  Every decision we make is guided by our commitment to delivering exceptional 
                  customer experiences and building lasting relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
              Our <span className="text-royal-gold">Process</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-midnight-blue">1</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-2">Fragrance Selection</h3>
                  <p className="text-text-secondary">
                    We carefully analyze and select iconic fragrances, studying their composition and appeal 
                    to create our own inspired interpretations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-midnight-blue">2</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-2">Master Blending</h3>
                  <p className="text-text-secondary">
                    Our expert perfumers craft each fragrance using premium ingredients, ensuring perfect 
                    balance and exceptional performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-midnight-blue">3</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-2">Quality Testing</h3>
                  <p className="text-text-secondary">
                    Every batch undergoes rigorous testing for longevity, projection, and overall quality 
                    to meet our exacting standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-midnight-blue">4</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-2">Elegant Packaging</h3>
                  <p className="text-text-secondary">
                    Each bottle is carefully packaged in our signature Royal Balc presentation, 
                    reflecting the luxury within.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-midnight-blue to-primary p-12 rounded-lg">
            <h2 className="font-heading text-3xl font-bold text-porcelain mb-4">
              Experience Royal Balc Today
            </h2>
            <p className="text-porcelain/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've discovered the perfect balance of luxury, quality, and affordability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/search"
                className="px-8 py-4 bg-royal-gold text-midnight-blue font-body font-semibold rounded-md hover:bg-royal-gold/90 transition-royal"
              >
                Shop Fragrances
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-royal-gold text-royal-gold font-body font-semibold rounded-md hover:bg-royal-gold hover:text-midnight-blue transition-royal"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 