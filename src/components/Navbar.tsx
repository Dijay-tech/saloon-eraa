import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'price-list', 'gallery', 'booking', 'location', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Price List', href: '#price-list', id: 'price-list' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Location', href: '#location', id: 'location' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FCF9F5]/95 backdrop-blur-md shadow-xs border-b border-[#EED8BA]/60 py-3'
          : 'bg-[#FCF9F5]/70 backdrop-blur-xs border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
            aria-label="Riwaj Beauty Salon Homepage"
          >
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C1810] group-hover:text-[#9F1239] transition-colors">
                Riwaj Beauty Salon
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#B89047]">
                Dinga · Pakistan
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5C3D2E]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 whitespace-nowrap transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-[#9F1239] font-semibold'
                    : 'hover:text-[#2C1810]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B89047] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#5C3D2E] hover:text-[#2C1810] border border-[#E8D8C8] rounded-md transition-colors"
              title="Call Riwaj Beauty Salon"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89047]" />
              <span className="hidden md:inline tabular-nums">{SALON_INFO.phone}</span>
            </a>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#9F1239] hover:bg-[#831030] rounded-md shadow-xs transition-all duration-200 whitespace-nowrap"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={createWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] hover:bg-[#EAFBF0] rounded-md transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2C1810] hover:bg-[#F3E9DE] rounded-md transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#B89047]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCF9F5] border-b border-[#EED8BA] px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#F9ECE7] text-[#9F1239] font-semibold'
                    : 'text-[#2C1810] hover:bg-[#F4ECE3]'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E8D8C8] flex flex-col gap-2.5">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#9F1239] rounded-md hover:bg-[#831030] transition-colors"
              >
                Book Appointment
              </a>

              <a
                href={createWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-[#128C7E] bg-[#E7F8ED] border border-[#A7E6C1] rounded-md hover:bg-[#D5F2DF] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>

              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 text-xs font-medium text-[#5C3D2E] hover:text-[#2C1810]"
              >
                <Phone className="w-3.5 h-3.5 text-[#B89047]" />
                Call Salon: <span className="tabular-nums">{SALON_INFO.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
