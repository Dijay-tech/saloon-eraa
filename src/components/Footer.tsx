import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24130C] text-[#E5D5C5] pt-16 pb-12 border-t border-[#3D2418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D2418]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-bold text-white tracking-tight block">
              Riwaj Beauty Salon
            </span>
            <p className="text-xs uppercase tracking-widest text-[#B89047] font-semibold">
              Beauty · Elegance · Confidence
            </p>
            <p className="text-sm text-[#C4B2A3] max-w-sm leading-relaxed">
              Your destination for personalized bridal mehndi, nourishing skin treatments, radiant facials, and premium hair artistry in Dinga, Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#ECD9A9] font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Salon</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Signature Services</a>
              </li>
              <li>
                <a href="#price-list" className="hover:text-white transition-colors">Rate Card & Price List</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Bridal & Beauty Gallery</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">Book Appointment</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location & Directions</a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#ECD9A9] font-bold">
              Official Salon Info
            </h4>
            <div className="space-y-2.5 text-sm text-[#C4B2A3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
                <span>
                  Kamla Link Road, Dinga<br />
                  Near Zafar Cold Traders, Pakistan.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B89047] shrink-0" />
                <a href={`tel:${SALON_INFO.phoneRaw}`} className="hover:text-white tabular-nums">
                  {SALON_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={createWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] tabular-nums"
                >
                  WhatsApp: +92 329 1170623
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and scroll top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89284]">
          <p>
            © {new Date().getFullYear()} Riwaj Beauty Salon. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#ECD9A9] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
