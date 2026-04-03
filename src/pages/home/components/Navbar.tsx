import { useState, useEffect } from 'react';
import ContactModal from '../../../components/feature/ContactModal';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Brand', href: '#brand' },
  { label: 'Value', href: '#value' },
  { label: 'Partnership', href: '#partnership' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const navHeight = window.innerWidth < 768 ? 56 : 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const logoFilter = isScrolled || isMobileMenuOpen
    ? 'brightness(0) saturate(100%) invert(44%) sepia(93%) saturate(1956%) hue-rotate(181deg) brightness(101%) contrast(104%)'
    : 'brightness(0) invert(1)';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-18 py-4 md:py-5">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="cursor-pointer whitespace-nowrap transition-all"
            >
              <img
                src="https://static.readdy.ai/image/38cfc5892dfd554128357063690c86c1/9ca6c04c79907e9e0ce54af502d74157.png"
                alt="Pookie"
                className="h-6 md:h-7 w-auto transition-all duration-300"
                style={{ filter: logoFilter }}
              />
            </button>

            {/* Nav items — PC only */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    isScrolled ? 'hover:opacity-80' : 'text-white/80 hover:text-white'
                  }`}
                  style={isScrolled ? { color: '#0099FF' } : {}}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* CTA */}
              <button
                onClick={() => setIsContactOpen(true)}
                className={`px-5 md:px-6 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isScrolled || isMobileMenuOpen
                    ? 'text-white hover:opacity-90'
                    : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                }`}
                style={isScrolled || isMobileMenuOpen ? { backgroundColor: '#0099FF' } : {}}
              >
                Contact Us
              </button>

              {/* Hamburger — Mobile only */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
              >
                <span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled || isMobileMenuOpen ? 'bg-gray-700' : 'bg-white'
                  } ${isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 mt-1 transition-all duration-300 ${
                    isScrolled || isMobileMenuOpen ? 'bg-gray-700' : 'bg-white'
                  } ${isMobileMenuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`}
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-5 pb-5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-3 text-sm font-medium cursor-pointer border-b border-gray-50"
                style={{ color: '#0099FF', fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
