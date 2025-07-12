import Footer from 'components/layout/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Royal Balc',
  description: 'Get in touch with Royal Balc Perfume. We\'re here to help with your luxury fragrance questions and provide exceptional customer service.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-midnight-blue to-primary">
        <div className="container mx-auto px-gutter text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-porcelain mb-6">
            Contact <span className="text-royal-gold">Royal Balc</span>
          </h1>
          <p className="font-body text-xl text-porcelain/90 max-w-3xl mx-auto">
            We're here to help you discover your perfect fragrance and provide exceptional customer service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-gutter max-w-6xl">
          
          {/* Contact Information Grid */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
              Get in <span className="text-royal-gold">Touch</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* WhatsApp */}
              <div className="bg-porcelain/5 p-8 rounded-lg text-center border border-dove-grey/10 hover:shadow-hover transition-royal">
                <div className="w-16 h-16 bg-royal-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-midnight-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">WhatsApp</h3>
                <p className="text-text-secondary mb-4">Contact us via WhatsApp for instant assistance</p>
                <a 
                  href="https://wa.me/16472260151" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-numeric text-lg font-semibold text-royal-gold hover:text-royal-gold/80 transition-royal"
                >
                  +1 647-226-0151
                </a>
                <p className="text-text-secondary text-sm mt-2">Available Mon-Fri: 9AM-6PM EST</p>
              </div>

              {/* Email */}
              <div className="bg-porcelain/5 p-8 rounded-lg text-center border border-dove-grey/10 hover:shadow-hover transition-royal">
                <div className="w-16 h-16 bg-royal-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-midnight-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Email</h3>
                <p className="text-text-secondary mb-4">Send us a message anytime</p>
                <a 
                  href="mailto:royalbalc0103@gmail.com" 
                  className="font-body text-lg font-semibold text-royal-gold hover:text-royal-gold/80 transition-royal"
                >
                  royalbalc0103@gmail.com
                </a>
                <p className="text-text-secondary text-sm mt-2">Response within 24 hours</p>
              </div>

              {/* Customer Support */}
              <div className="bg-porcelain/5 p-8 rounded-lg text-center border border-dove-grey/10 hover:shadow-hover transition-royal md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-royal-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-midnight-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Support</h3>
                <p className="text-text-secondary mb-4">Need help with your order?</p>
                <a 
                  href="mailto:royalbalc0103@gmail.com" 
                  className="font-body text-lg font-semibold text-royal-gold hover:text-royal-gold/80 transition-royal"
                >
                  royalbalc0103@gmail.com
                </a>
                <p className="text-text-secondary text-sm mt-2">Order tracking & returns</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
              Business <span className="text-royal-gold">Hours</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-porcelain/5 p-8 rounded-lg border border-dove-grey/10">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-dove-grey/10">
                    <span className="font-body font-medium text-text-primary">Monday - Friday</span>
                    <span className="font-body text-text-secondary">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-dove-grey/10">
                    <span className="font-body font-medium text-text-primary">Saturday</span>
                    <span className="font-body text-text-secondary">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-body font-medium text-text-primary">Sunday</span>
                    <span className="font-body text-text-secondary">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-royal-gold/10 rounded-lg">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-royal-gold">Note:</strong> WhatsApp and email support are available 24/7. 
                    We'll respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
              Frequently Asked <span className="text-royal-gold">Questions</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-porcelain/5 p-6 rounded-lg border border-dove-grey/10">
                <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                  How long does shipping take?
                </h3>
                <p className="text-text-secondary">
                  We offer free standard shipping (5-7 business days) and expedited shipping (2-3 business days) 
                  across Canada and the US. International shipping is available upon request.
                </p>
              </div>
              
              <div className="bg-porcelain/5 p-6 rounded-lg border border-dove-grey/10">
                <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                  What is your return policy?
                </h3>
                <p className="text-text-secondary">
                  We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your 
                  fragrance, contact us for a full refund or exchange. Items must be in original condition.
                </p>
              </div>
              
              <div className="bg-porcelain/5 p-6 rounded-lg border border-dove-grey/10">
                <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                  Are your fragrances long-lasting?
                </h3>
                <p className="text-text-secondary">
                  Yes! Our fragrances are crafted with high-quality authentic oils ensuring 6-8 hours of 
                  longevity with excellent projection. We stand behind the quality of every bottle.
                </p>
              </div>

              <div className="bg-porcelain/5 p-6 rounded-lg border border-dove-grey/10">
                <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                  Do you offer custom fragrances?
                </h3>
                <p className="text-text-secondary">
                  We're always exploring new fragrances! If you have a specific scent in mind that's not 
                  in our collection, reach out to us - we love creating new interpretations for our customers.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-midnight-blue to-primary p-12 rounded-lg">
            <h2 className="font-heading text-3xl font-bold text-porcelain mb-4">
              Ready to Connect?
            </h2>
            <p className="text-porcelain/90 mb-8 max-w-2xl mx-auto">
              Whether you have questions about our fragrances, need help with an order, or want personalized recommendations, 
              we're here to provide exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/16472260151"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-royal-gold text-midnight-blue font-body font-semibold rounded-md hover:bg-royal-gold/90 transition-royal"
              >
                WhatsApp
              </a>
              <a
                href="mailto:royalbalc0103@gmail.com"
                className="px-8 py-4 border-2 border-royal-gold text-royal-gold font-body font-semibold rounded-md hover:bg-royal-gold hover:text-midnight-blue transition-royal"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 