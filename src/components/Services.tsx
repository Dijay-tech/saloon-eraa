import React, { useState, useMemo } from 'react';
import { MessageCircle, Sparkles, Search, Info } from 'lucide-react';
import { SERVICES, CATEGORIES, ServiceItem, createWhatsAppBookingUrl } from '../data/salonData';
import { Card3D } from './Card3D';

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-20 bg-[#FCF9F5] relative overflow-hidden">
      
      {/* Background Soft Photographic Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#F6D0D6]/30 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-[#ECD9A9]/25 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B89047] bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-[#EED8BA]/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Salon Offerings & Treatments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight">
            Our Signature Services
          </h2>
          <p className="text-base text-[#5C3D2E]">
            Explore our curated menu of hair, skin, facial, and bridal henna treatments. Book any service directly via WhatsApp.
          </p>
          <div className="w-16 h-0.5 bg-[#B89047] mx-auto rounded-full mt-2" />
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#8C6D58] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search facials, mehndi, hair colour, keratin..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8D8C8] rounded-xl text-sm text-[#2C1810] placeholder-[#8C6D58]/70 focus:outline-hidden focus:ring-2 focus:ring-[#B89047] shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C6D58] hover:text-[#2C1810] font-medium"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Tabs with Smooth 3D Pill Touch */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.slug
                    ? 'bg-[#9F1239] text-white shadow-md scale-105'
                    : 'bg-white text-[#5C3D2E] hover:bg-[#F4ECE3] border border-[#E8D8C8] hover:scale-102'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services 3D Grid with Real Pictures Behind Every Card */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#EED8BA] max-w-lg mx-auto p-8 shadow-sm">
            <p className="text-base font-semibold text-[#2C1810]">No services found</p>
            <p className="text-xs text-[#6B4B3E] mt-1">Try searching for a different keyword or choose another category.</p>
            <button
              type="button"
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#9F1239] bg-[#FDF2F4] rounded-md hover:bg-[#FADDE3] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service: ServiceItem) => (
              <Card3D
                key={service.id}
                maxTilt={6}
                className="h-full"
              >
                <div className="bg-white rounded-2xl border border-[#EED8BA] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full group relative">
                  
                  {/* Real Photograph Header/Backdrop for every Card */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#2C1810]">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Gradient Scrim & Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-[#2C1810]/20 to-transparent" />

                    {/* Category Label */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#2C1810] rounded-full shadow-xs">
                        {service.category}
                      </span>
                    </div>

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-3.5 right-3.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#B89047] text-white px-2.5 py-1 rounded-full shadow-xs">
                          Popular
                        </span>
                      </div>
                    )}

                    {/* Price tag over image */}
                    <div className="absolute bottom-3 right-3 bg-[#FCF9F5]/95 backdrop-blur-sm px-3 py-1 rounded-lg border border-[#EED8BA] shadow-xs">
                      <span className="font-serif text-base font-bold text-[#9F1239] tabular-nums">
                        {service.priceFormatted}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white/95 backdrop-blur-xs">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-[#2C1810] group-hover:text-[#9F1239] transition-colors leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-[#F0E4D7] flex items-center justify-between gap-3">
                      <span className="text-[11px] text-[#8C6D58] font-medium">
                        Official Salon Rate
                      </span>

                      <a
                        href={createWhatsAppBookingUrl(service.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-lg shadow-xs hover:shadow-md transition-all duration-200 whitespace-nowrap cursor-pointer hover:scale-102"
                        title={`Book ${service.name} on WhatsApp`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Book on WhatsApp
                      </a>
                    </div>
                  </div>

                </div>
              </Card3D>
            ))}
          </div>
        )}

        {/* Pricing consultation notice */}
        <div className="mt-14 bg-white/80 backdrop-blur-sm border border-[#EED8BA] rounded-xl p-4 flex items-start gap-3 max-w-2xl mx-auto text-xs text-[#5C3D2E] shadow-xs">
          <Info className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
          <p>
            <strong className="font-semibold text-[#2C1810]">Please note:</strong> Prices listed are official salon standard rates. Final prices for specialized treatments (such as extended hair length, custom bridal packages, or multiple arm designs) can be confirmed during consultation with salon staff.
          </p>
        </div>

      </div>
    </section>
  );
};
