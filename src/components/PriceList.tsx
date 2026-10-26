import React, { useState } from 'react';
import { Sparkles, MessageCircle, FileText, Phone, Check } from 'lucide-react';
import { SERVICES, SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

export const PriceList: React.FC = () => {
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Group services by category
  const categoriesList = [
    { name: 'Mehndi', slug: 'mehndi' },
    { name: 'Bleach', slug: 'bleach' },
    { name: 'Skin Polish', slug: 'skin-polish' },
    { name: 'Facial', slug: 'facial' },
    { name: 'Bridal Facial', slug: 'bridal-facial' },
    { name: 'Hair Colour', slug: 'hair-colour' },
    { name: 'Hair Treatments and Haircuts', slug: 'hair-treatments' },
  ];

  const handleSharePriceList = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Riwaj Beauty Salon Price List (Dinga, Pakistan)\nPhone/WhatsApp: ${SALON_INFO.phone}\nAddress: ${SALON_INFO.address}\n\nVisit: ${window.location.origin}#price-list`
      );
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  return (
    <section id="price-list" className="py-20 bg-white border-t border-[#F0E4D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B89047]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Price Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight">
            Services & Complete Price List
          </h2>
          <p className="text-base text-[#5C3D2E]">
            All prices are listed in Pakistani Rupees (PKR) as provided by Riwaj Beauty Salon.
          </p>
          <div className="w-16 h-0.5 bg-[#B89047] mx-auto rounded-full mt-2" />
        </div>

        {/* Price Menu Container */}
        <div className="bg-[#FCF9F5] rounded-2xl border-2 border-[#EED8BA] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {/* Subtle watermarked crest styling */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#E8D8C8] gap-4 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#2C1810]">Riwaj Beauty Salon Menu</h3>
              <p className="text-xs text-[#6B4B3E]">Kamla Link Road, Dinga · Near Zafar Cold Traders</p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSharePriceList}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2C1810] bg-white border border-[#E8D8C8] rounded-md hover:bg-[#FAF4ED] transition-colors"
                title="Copy salon price info"
              >
                {copiedNotification ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <FileText className="w-3.5 h-3.5 text-[#B89047]" />}
                <span>{copiedNotification ? 'Details Copied!' : 'Share Price List'}</span>
              </button>

              <a
                href={createWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-md shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Categorized Tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {categoriesList.map((category) => {
              const categoryServices = SERVICES.filter(
                (s) => s.categorySlug === category.slug
              );

              return (
                <div key={category.slug} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#B89047]/40 pb-2">
                    <h4 className="font-serif text-xl font-bold text-[#9F1239]">
                      {category.name}
                    </h4>
                    <span className="text-[11px] uppercase tracking-wider text-[#B89047] font-semibold">
                      PKR
                    </span>
                  </div>

                  <div className="space-y-3">
                    {categoryServices.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-baseline justify-between gap-4 py-1.5 border-b border-[#F0E4D7]/60 hover:bg-[#F8EFE4]/50 px-2 rounded-sm transition-colors group"
                      >
                        <div className="flex-1 pr-2">
                          <span className="text-sm font-medium text-[#2C1810] group-hover:text-[#9F1239] transition-colors">
                            {service.name}
                          </span>
                        </div>

                        {/* Leader dots in print/menu style */}
                        <div className="flex-1 border-b border-dotted border-[#D8C2B0] mb-1 hidden sm:block opacity-40" />

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-serif text-sm font-bold text-[#2C1810] tabular-nums">
                            {service.priceFormatted}
                          </span>
                          <a
                            href={createWhatsAppBookingUrl(service.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#25D366] hover:text-[#1EAE54] p-1 rounded-sm hover:bg-white transition-colors"
                            title={`Book ${service.name}`}
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Footnote & Consultation Callout */}
          <div className="mt-10 pt-6 border-t border-[#E8D8C8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B4B3E]">
            <p>
              * Prices are verified according to the salon rate card. Rates are subject to consultation for specific customized requests.
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <Phone className="w-3.5 h-3.5 text-[#B89047]" />
              <span>Inquiries: </span>
              <a href={`tel:${SALON_INFO.phoneRaw}`} className="font-semibold text-[#9F1239] hover:underline tabular-nums">
                {SALON_INFO.phone}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
