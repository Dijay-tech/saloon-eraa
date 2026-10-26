import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppBookingUrl, SALON_INFO } from '../data/salonData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end group">
      {/* Optional Hover Tooltip */}
      {showTooltip && (
        <div className="mb-2 bg-[#2C1810] text-white text-xs py-1.5 px-3 rounded-lg shadow-lg max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-150 flex items-center gap-2">
          <span>Book with Riwaj Beauty Salon</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-white/70 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={createWhatsAppBookingUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        aria-label="Chat with Riwaj Beauty Salon on WhatsApp (+92 329 1170623)"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
