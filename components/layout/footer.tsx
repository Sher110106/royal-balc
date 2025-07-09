import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightName = 'Royal Balc Perfume';

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} {copyrightName}. All rights reserved.
          </p>
          
          {/* Essential Links */}
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
