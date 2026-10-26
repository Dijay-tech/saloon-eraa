import React, { useState, useEffect } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, MessageCircle, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES, createWhatsAppBookingUrl } from '../data/salonData';
import { Card3D } from './Card3D';

export const Gallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;

      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  const activeItem = activeImageIndex !== null ? GALLERY_IMAGES[activeImageIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#FCF9F5] relative overflow-hidden">
      
      {/* Background soft photographic glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#F6D0D6]/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#ECD9A9]/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B89047] bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-[#EED8BA]/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight">
            Beauty & Bridal Gallery
          </h2>
          <p className="text-base text-[#5C3D2E]">
            A glimpse into our bridal mehndi artistry, radiant skincare treatments, hair styling, and salon atmosphere.
          </p>
          <div className="w-16 h-0.5 bg-[#B89047] mx-auto rounded-full mt-2" />
        </div>

        {/* Gallery 3D Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <Card3D key={image.id} maxTilt={8}>
              <div
                onClick={() => setActiveImageIndex(index)}
                className="group relative rounded-2xl overflow-hidden border-2 border-[#EED8BA] bg-white cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 aspect-4/3"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay with zoom icon and details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/85 via-[#2C1810]/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="self-end bg-white/30 backdrop-blur-md text-white p-2.5 rounded-full border border-white/20 shadow-xs">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  <div className="text-white space-y-1">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#ECD9A9] bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-sm inline-block">
                      {image.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold leading-tight">
                      {image.title}
                    </h3>
                    <p className="text-xs text-[#EED8BA] line-clamp-2">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Gallery Note */}
        <p className="text-center text-xs text-[#8C6D58] mt-10">
          Illustrative salon photographs highlighting bridal henna, luxury skincare, and hair transformations available at Riwaj Beauty Salon.
        </p>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-[#2C1810]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Close Gallery Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) =>
                prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) =>
                prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0
              );
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl max-h-[90vh] bg-[#FCF9F5] rounded-2xl overflow-hidden border border-[#EED8BA] shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[50vh] md:max-h-[80vh] overflow-hidden">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="w-full h-full object-cover md:object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Information & Action Sidebar */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B89047]">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#5C3D2E] leading-relaxed">
                  {activeItem.caption}
                </p>
                <div className="pt-2 text-xs text-[#8C6D58]">
                  Image {activeImageIndex! + 1} of {GALLERY_IMAGES.length}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-[#EED8BA]">
                <a
                  href={createWhatsAppBookingUrl(activeItem.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-md shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Similar Service via WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => setActiveImageIndex(null)}
                  className="w-full py-2.5 px-4 text-xs font-medium text-[#5C3D2E] hover:text-[#2C1810] border border-[#E8D8C8] rounded-md hover:bg-[#F4ECE3] transition-colors cursor-pointer"
                >
                  Close Lightbox
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
