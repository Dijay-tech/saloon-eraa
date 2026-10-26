import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Sparkles, ExternalLink } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#FCF9F5] border-t border-[#F0E4D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B89047]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Find Our Salon</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight">
            Visit Riwaj Beauty Salon
          </h2>
          <p className="text-base text-[#5C3D2E]">
            Conveniently situated on Kamla Link Road in Dinga, easily accessible for your beauty treatments.
          </p>
          <div className="w-16 h-0.5 bg-[#B89047] mx-auto rounded-full mt-2" />
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-[#EED8BA] p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FDF2F4] text-[#9F1239] flex items-center justify-center shrink-0 border border-[#F6D0D6]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B89047]">Official Address</span>
                  <h3 className="font-serif text-xl font-bold text-[#2C1810]">
                    Riwaj Beauty Salon
                  </h3>
                  <p className="text-sm text-[#5C3D2E] leading-relaxed">
                    Kamla Link Road, Dinga<br />
                    Near Zafar Cold Traders, Pakistan.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#FCF9F5] rounded-xl border border-[#E8D8C8] space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2C1810]">
                  <span className="w-2 h-2 rounded-full bg-[#B89047]" />
                  <span>Landmark Guide</span>
                </div>
                <p className="text-xs text-[#6B4B3E] leading-relaxed">
                  Located along Kamla Link Road in Dinga. If you are arriving from the main road, look for the landmark adjacent to Zafar Cold Traders.
                </p>
              </div>

              <div className="space-y-2 text-sm text-[#5C3D2E]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#2C1810]">Phone:</span>
                  <a href={`tel:${SALON_INFO.phoneRaw}`} className="text-[#9F1239] hover:underline font-medium tabular-nums">
                    {SALON_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#2C1810]">WhatsApp:</span>
                  <a
                    href={SALON_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-medium tabular-nums"
                  >
                    +92 329 1170623
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-[#F0E4D7]">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#9F1239] hover:bg-[#831030] rounded-lg shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#2C1810] bg-white border border-[#E8D8C8] hover:bg-[#F4ECE3] rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B89047]" />
                  Call Salon
                </a>

                <a
                  href={createWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#128C7E] bg-[#E7F8ED] border border-[#A7E6C1] hover:bg-[#D5F2DF] rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* Embedded Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-[#EED8BA] shadow-xs bg-white min-h-[380px] flex flex-col">
            <iframe
              title="Riwaj Beauty Salon Location in Dinga, Pakistan"
              src="https://maps.google.com/maps?q=Kamla+Link+Road,+Dinga,+near+Zafar+Cold+Traders,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] flex-1 border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
