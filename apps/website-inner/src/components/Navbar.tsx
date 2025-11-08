import Link from 'next/link';
import AuthButton from './auth/AuthButton';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '#HowItWorks', label: 'How It Works' },
  { href: '#Features', label: 'Features' },
  { href: '#Pricing', label: 'Pricing' },
];

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                {process.env.APPLICATION_NAME}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>


          <div className="flex">
            <AuthButton/>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
        </div>

        {/* Mobile Navigation - You can add state management here later */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}