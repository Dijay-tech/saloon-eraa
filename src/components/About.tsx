import React from 'react';
import { Heart, Sparkles, Flower2, CheckCircle2 } from 'lucide-react';
import { Card3D } from './Card3D';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-b border-[#F0E4D7]/70 relative overflow-hidden">
      
      {/* Blurred Background Photograph for Depth & Atmosphere */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none opacity-20">
        <img
          src="/src/assets/images/about_salon_experience_1792986287679.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover filter blur-3xl scale-110"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B89047] bg-[#FAF0E1]/80 px-3 py-1 rounded-full border border-[#EED8BA]/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Riwaj Beauty Salon</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight">
            Where Beauty Meets Elegance
          </h2>
          <div className="w-16 h-0.5 bg-[#B89047] mx-auto rounded-full mt-2" />
        </div>

        {/* Content Split: 3D Image & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Visual Showcase with 3D Tilt */}
          <div className="lg:col-span-5 relative">
            <Card3D maxTilt={7}>
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#EED8BA] shadow-xl aspect-4/3 group">
                <img
                  src="/src/assets/images/about_salon_experience_1792986287679.jpg"
                  alt="Client receiving personalized facial and beauty care at Riwaj Beauty Salon"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white font-serif text-base font-medium">
                    A serene salon sanctuary dedicated to your personal glow and comfort.
                  </p>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Narrative Description */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C1810] leading-snug">
              A Welcoming Space Designed for Self-Care & Refined Beauty
            </h3>
            
            <p className="text-[#5C3D2E] text-base sm:text-lg leading-relaxed">
              At <strong className="text-[#2C1810] font-semibold">Riwaj Beauty Salon</strong>, we believe every woman deserves a thoughtful, rejuvenating beauty experience. Located conveniently on Kamla Link Road in Dinga (near Zafar Cold Traders), our salon provides a peaceful ambiance where you can unwind and indulge in specialized beauty treatments.
            </p>

            <p className="text-[#5C3D2E] text-base leading-relaxed">
              Whether you are preparing for a wedding with custom bridal mehndi, rejuvenating your complexion with a 24K Gold or Rice facial, or transforming your hair with professional keratin and rebonding treatments, our focus is always on your individuality, comfort, and radiant satisfaction.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#2C1810]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B89047] shrink-0" />
                <span>Dedicated bridal mehndi & event preparation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B89047] shrink-0" />
                <span>Gentle, skin-friendly facial & polish treatments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B89047] shrink-0" />
                <span>Expert hair rebonding, keratin & colour</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B89047] shrink-0" />
                <span>Clean, hygienic, and relaxing salon ambiance</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Visual 3D Feature Cards with Real Photos Behind Each */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <Card3D maxTilt={7} className="h-full">
            <div className="relative rounded-2xl overflow-hidden border border-[#EED8BA] shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col group min-h-[320px]">
              {/* Real picture backdrop */}
              <img
                src="/src/assets/images/gallery_gold_facial_1792986289490.jpg"
                alt="Personalized Beauty Care"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 -z-10"
              />
              {/* Frosted Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/95 via-[#2C1810]/85 to-[#2C1810]/60 -z-10" />

              <div className="p-8 flex-1 flex flex-col justify-between space-y-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-[#ECD9A9] flex items-center justify-center border border-white/20 shadow-sm">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl font-bold text-white group-hover:text-[#ECD9A9] transition-colors">
                    Personalized Beauty Care
                  </h4>
                  <p className="text-sm text-[#F0E4D7] leading-relaxed">
                    Every client receives attentive care suited to her unique skin texture, hair type, and personal beauty goals. We listen carefully to deliver results that make you feel truly confident.
                  </p>
                </div>
              </div>
            </div>
          </Card3D>

          {/* Card 2 */}
          <Card3D maxTilt={7} className="h-full">
            <div className="relative rounded-2xl overflow-hidden border border-[#EED8BA] shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col group min-h-[320px]">
              {/* Real picture backdrop */}
              <img
                src="/src/assets/images/gallery_hair_styling_1792986288775.jpg"
                alt="Elegant Hair and Skin Treatments"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 -z-10"
              />
              {/* Frosted Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/95 via-[#2C1810]/85 to-[#2C1810]/60 -z-10" />

              <div className="p-8 flex-1 flex flex-col justify-between space-y-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-[#ECD9A9] flex items-center justify-center border border-white/20 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl font-bold text-white group-hover:text-[#ECD9A9] transition-colors">
                    Elegant Hair & Skin Treatments
                  </h4>
                  <p className="text-sm text-[#F0E4D7] leading-relaxed">
                    From signature 24K Gold and Cerave facials to high-gloss rebonding and precision hair colouring, each treatment is performed with careful technique and tested formulations.
                  </p>
                </div>
              </div>
            </div>
          </Card3D>

          {/* Card 3 */}
          <Card3D maxTilt={7} className="h-full">
            <div className="relative rounded-2xl overflow-hidden border border-[#EED8BA] shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col group min-h-[320px]">
              {/* Real picture backdrop */}
              <img
                src="/src/assets/images/about_salon_experience_1792986287679.jpg"
                alt="Your Moment of Relaxation"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 -z-10"
              />
              {/* Frosted Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/95 via-[#2C1810]/85 to-[#2C1810]/60 -z-10" />

              <div className="p-8 flex-1 flex flex-col justify-between space-y-4 text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-[#ECD9A9] flex items-center justify-center border border-white/20 shadow-sm">
                  <Flower2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl font-bold text-white group-hover:text-[#ECD9A9] transition-colors">
                    Your Moment of Relaxation
                  </h4>
                  <p className="text-sm text-[#F0E4D7] leading-relaxed">
                    Enjoy a tranquil, friendly, and respectful environment where you can recharge away from daily routines while being pampered by passionate beauty professionals.
                  </p>
                </div>
              </div>
            </div>
          </Card3D>

        </div>

      </div>
    </section>
  );
};
