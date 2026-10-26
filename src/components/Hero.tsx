import React from 'react';
import { MessageCircle, Calendar, Sparkles, MapPin, ChevronRight, Phone } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';
import { Card3D } from './Card3D';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      
      {/* Dynamic Blurred Background Photography Layer that Attracts Attention */}
      <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none">
        <img
          src="/src/assets/images/hero_salon_interior_1792986286186.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover filter blur-3xl opacity-25 scale-125 animate-pulse-glow"
        />
        <div className="absolute inset-0 bg-radial from-[#FDF2F4]/80 via-[#FCF9F5]/90 to-[#FCF9F5]" />
      </div>

      {/* Ambient 3D floating orb glows */}
      <div className="absolute top-12 right-10 w-96 h-96 bg-[#F6D0D6]/40 rounded-full blur-3xl -z-20 pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#ECD9A9]/35 rounded-full blur-3xl -z-20 pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline & Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#9F1239] bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#EED8BA]/70 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
              <span>Beauty · Elegance · Confidence</span>
            </div>

            {/* Brand Title and Main Heading */}
            <div className="space-y-3">
              <span className="block text-sm sm:text-base font-semibold tracking-wider uppercase text-[#B89047]">
                RIWAJ BEAUTY SALON
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C1810] tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Your Beauty, Our Passion.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#5C3D2E] leading-relaxed max-w-xl">
              Experience beauty, elegance, and personalized self-care at <strong className="font-semibold text-[#2C1810]">Riwaj Beauty Salon</strong>. Located on Kamla Link Road in Dinga, we bring you meticulous bridal mehndi, rejuvenating facials, and transformative hair artistry.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#9F1239] hover:bg-[#831030] rounded-md shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                Book Your Appointment
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#2C1810] bg-white hover:bg-[#FAF4ED] border border-[#E8D8C8] rounded-md shadow-xs transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Our Services
                <ChevronRight className="w-4 h-4 text-[#B89047]" />
              </a>

              <a
                href={createWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-md shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                title="Direct WhatsApp Booking"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Booking
              </a>
            </div>

            {/* Verified Location & Phone strip */}
            <div className="pt-4 border-t border-[#EED8BA]/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#6B4B3E]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B89047] shrink-0" />
                <span>Kamla Link Road, Dinga, near Zafar Cold Traders</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#B89047] shrink-0" />
                <a href={`tel:${SALON_INFO.phoneRaw}`} className="hover:text-[#9F1239] font-medium tabular-nums">
                  {SALON_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with 3D Tilt */}
          <div className="lg:col-span-5 relative">
            <Card3D maxTilt={10} className="mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#EED8BA] shadow-2xl bg-white aspect-4/3 lg:aspect-5/4 group">
                <img
                  src="/src/assets/images/hero_salon_interior_1792986286186.jpg"
                  alt="Riwaj Beauty Salon luxurious interior styling stations in Dinga"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Measured Scrim & Subtle Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/85 via-[#2C1810]/20 to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <p className="text-xs uppercase tracking-wider text-[#ECD9A9] font-medium">Boutique Salon Experience</p>
                    <p className="font-serif text-lg font-semibold leading-snug">Relaxation, Hygiene & Personalized Care</p>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* Floating 3D Mini Badge 1 (Bridal Henna) */}
            <div className="absolute -top-4 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md border border-[#EED8BA] rounded-xl p-2.5 shadow-xl flex items-center gap-2.5 animate-float-slow z-20">
              <img
                src="/src/assets/images/card_mehndi_art_1792986915956.jpg"
                alt="Bridal mehndi preview"
                className="w-10 h-10 rounded-lg object-cover border border-[#EED8BA]"
              />
              <div className="pr-1">
                <p className="text-xs font-bold text-[#2C1810]">Bridal Henna</p>
                <p className="text-[10px] text-[#9F1239] font-semibold">From Rs. 800</p>
              </div>
            </div>

            {/* Floating 3D Mini Badge 2 (24K Gold Facial) */}
            <div className="absolute -bottom-5 -left-3 sm:left-4 bg-white/95 backdrop-blur-md border border-[#EED8BA] rounded-xl p-3 shadow-xl max-w-xs flex items-center gap-3 animate-float-reverse z-20">
              <img
                src="/src/assets/images/gallery_gold_facial_1792986289490.jpg"
                alt="Gold facial preview"
                className="w-11 h-11 rounded-lg object-cover border border-[#EED8BA] shrink-0"
              />
              <div>
                <p className="text-xs font-semibold text-[#2C1810]">Signature Bridal & Skincare</p>
                <p className="text-[11px] text-[#6B4B3E]">Gold Facials, Mehndi & Keratin</p>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Column Proof & Highlights Strip with 3D Hover Depth */}
        <div className="mt-14 pt-8 border-t border-[#EED8BA]/60 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/60 backdrop-blur-xs p-3.5 rounded-xl border border-[#EED8BA]/40 hover:bg-white hover:shadow-md transition-all duration-300">
            <span className="text-[11px] uppercase tracking-wider text-[#B89047] font-semibold">Location</span>
            <p className="text-sm font-semibold text-[#2C1810]">Dinga, Punjab</p>
            <p className="text-xs text-[#6B4B3E]">Kamla Link Road landmark</p>
          </div>
          <div className="bg-white/60 backdrop-blur-xs p-3.5 rounded-xl border border-[#EED8BA]/40 hover:bg-white hover:shadow-md transition-all duration-300">
            <span className="text-[11px] uppercase tracking-wider text-[#B89047] font-semibold">Booking</span>
            <p className="text-sm font-semibold text-[#2C1810]">Instant WhatsApp</p>
            <p className="text-xs text-[#6B4B3E]">Quick response & slots</p>
          </div>
          <div className="bg-white/60 backdrop-blur-xs p-3.5 rounded-xl border border-[#EED8BA]/40 hover:bg-white hover:shadow-md transition-all duration-300">
            <span className="text-[11px] uppercase tracking-wider text-[#B89047] font-semibold">Hair Artistry</span>
            <p className="text-sm font-semibold text-[#2C1810]">Rebonding & Keratin</p>
            <p className="text-xs text-[#6B4B3E]">Full & half treatments</p>
          </div>
          <div className="bg-white/60 backdrop-blur-xs p-3.5 rounded-xl border border-[#EED8BA]/40 hover:bg-white hover:shadow-md transition-all duration-300">
            <span className="text-[11px] uppercase tracking-wider text-[#B89047] font-semibold">Henna & Glow</span>
            <p className="text-sm font-semibold text-[#2C1810]">Bridal & Injection Mehndi</p>
            <p className="text-xs text-[#6B4B3E]">24K Gold & Rice Facials</p>
          </div>
        </div>

      </div>
    </section>
  );
};
