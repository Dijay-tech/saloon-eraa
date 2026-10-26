import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles, Navigation, Calendar } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white border-t border-[#F0E4D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B89047]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight">
            Connect with Riwaj Beauty Salon
          </h2>
          <p className="text-base text-[#5C3D2E]">
            We would love to welcome you! Contact us by phone or WhatsApp to book your appointment or inquire about any beauty service.
          </p>
          <div className="w-16 h-0.5 bg-[#B89047] mx-auto rounded-full mt-2" />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Phone */}
          <div className="bg-[#FCF9F5] rounded-xl border border-[#EED8BA] p-6 text-center space-y-3 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF0E1] text-[#B89047] mx-auto flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-wider text-[#8C6D58] font-semibold block">Telephone</span>
            <h3 className="font-serif text-lg font-bold text-[#2C1810]">
              Call Direct
            </h3>
            <p className="text-xs text-[#5C3D2E]">
              Speak directly with our salon team for urgent inquiries or appointment schedules.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9F1239] hover:text-[#831030] tabular-nums"
              >
                {SALON_INFO.phone}
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-[#FCF9F5] rounded-xl border border-[#A7E6C1] p-6 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E7F8ED] text-[#25D366] mx-auto flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-[#128C7E] font-semibold block">WhatsApp Chat</span>
            <h3 className="font-serif text-lg font-bold text-[#2C1810]">
              Instant Message
            </h3>
            <p className="text-xs text-[#5C3D2E]">
              Fast and convenient WhatsApp booking with prefilled appointment details.
            </p>
            <div className="pt-2">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#25D366] hover:text-[#1EAE54] tabular-nums"
              >
                +92 329 1170623
              </a>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="bg-[#FCF9F5] rounded-xl border border-[#EED8BA] p-6 text-center space-y-3 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FDF2F4] text-[#9F1239] mx-auto flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-wider text-[#8C6D58] font-semibold block">Location</span>
            <h3 className="font-serif text-lg font-bold text-[#2C1810]">
              Salon Address
            </h3>
            <p className="text-xs text-[#5C3D2E] leading-relaxed">
              Kamla Link Road, Dinga, near Zafar Cold Traders, Pakistan.
            </p>
            <div className="pt-2">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#9F1239] hover:underline"
              >
                <Navigation className="w-3 h-3" />
                View on Google Maps
              </a>
            </div>
          </div>

        </div>

        {/* Short invitation banner */}
        <div className="bg-gradient-to-r from-[#9F1239] to-[#7B0D2B] text-white rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-lg">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ECD9A9]">
            Reserve Your Time
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
            Ready to Experience Personalized Beauty Care?
          </h3>
          <p className="text-sm text-white/90 max-w-xl mx-auto leading-relaxed">
            Reach out now to reserve your bridal mehndi slot, revitalizing facial, or hair treatment. We look forward to pampering you at Riwaj Beauty Salon.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={createWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#2C1810] bg-white hover:bg-[#FAF4ED] rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              Book on WhatsApp (+92 329 1170623)
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-white/40 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#ECD9A9]" />
              Use Booking Form
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
