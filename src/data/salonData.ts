export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  categorySlug: 'all' | 'mehndi' | 'bleach' | 'skin-polish' | 'facial' | 'bridal-facial' | 'hair-colour' | 'hair-treatments';
  pricePKR: number;
  priceFormatted: string;
  description: string;
  popular?: boolean;
  image: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  name: string;
  count: number;
}

export const SALON_INFO = {
  name: "Riwaj Beauty Salon",
  address: "Kamla Link Road, Dinga, near Zafar Cold Traders, Pakistan",
  shortAddress: "Kamla Link Road, Dinga",
  landmark: "Near Zafar Cold Traders, Dinga",
  phone: "+92 329 1170623",
  phoneRaw: "+923291170623",
  whatsappNumber: "923291170623",
  whatsappUrl: "https://wa.me/923291170623",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Riwaj+Beauty+Salon%2C+Kamla+Link+Road%2C+Dinga%2C+near+Zafar+Cold+Traders%2C+Pakistan",
  mapsEmbedQuery: "Kamla Link Road, Dinga, Pakistan"
};

export const createWhatsAppBookingUrl = (serviceName?: string, date?: string, time?: string, clientName?: string, notes?: string) => {
  let message = "";
  if (serviceName && (date || clientName)) {
    message = `Assalam-o-Alaikum! I would like to book an appointment at Riwaj Beauty Salon.\n\n*Booking Request Details:*\n• Name: ${clientName || 'Not provided'}\n• Service: ${serviceName}\n• Preferred Date: ${date || 'Flexible'}\n• Preferred Time: ${time || 'Flexible'}${notes ? `\n• Notes: ${notes}` : ''}\n\nPlease share the available appointment timings and confirmation. Thank you!`;
  } else if (serviceName) {
    message = `Assalam-o-Alaikum! I would like to book ${serviceName} at Riwaj Beauty Salon. Please let me know the available timings and appointment details.`;
  } else {
    message = "Assalam-o-Alaikum! I would like to book an appointment at Riwaj Beauty Salon. Please share the available appointment timings and details. Thank you.";
  }
  return `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const SERVICES: ServiceItem[] = [
  // Mehndi
  {
    id: "mehndi-1",
    name: "Injection Mehndi Half Arms",
    category: "Mehndi",
    categorySlug: "mehndi",
    pricePKR: 2500,
    priceFormatted: "Rs. 2,500",
    description: "Finely detailed, high-precision injection mehndi applied up to half arms with rich lasting color.",
    image: "/src/assets/images/card_mehndi_art_1792986915956.jpg"
  },
  {
    id: "mehndi-2",
    name: "Injection Mehndi Full Arms",
    category: "Mehndi",
    categorySlug: "mehndi",
    pricePKR: 3500,
    priceFormatted: "Rs. 3,500",
    description: "Intricate, ultra-refined needle-tip injection mehndi covering full arms with exquisite traditional patterns.",
    image: "/src/assets/images/card_mehndi_art_1792986915956.jpg"
  },
  {
    id: "mehndi-3",
    name: "Simple Mehndi Two Hands",
    category: "Mehndi",
    categorySlug: "mehndi",
    pricePKR: 800,
    priceFormatted: "Rs. 800",
    description: "Graceful contemporary henna pattern for both front and back palms, perfect for festive occasions.",
    image: "/src/assets/images/card_mehndi_art_1792986915956.jpg"
  },
  {
    id: "mehndi-4",
    name: "Full Arm Mehndi",
    category: "Mehndi",
    categorySlug: "mehndi",
    pricePKR: 1500,
    priceFormatted: "Rs. 1,500",
    description: "Traditional floral and mandala mehndi art extending completely up the arms with deep natural stain.",
    image: "/src/assets/images/gallery_bridal_mehndi_1792986288054.jpg"
  },
  {
    id: "mehndi-5",
    name: "Bridal Mehndi",
    category: "Mehndi",
    categorySlug: "mehndi",
    pricePKR: 5000,
    priceFormatted: "Rs. 5,000",
    popular: true,
    description: "Signature bridal henna featuring bespoke South Asian motifs, dense paisleys, and majestic detailing.",
    image: "/src/assets/images/gallery_bridal_mehndi_1792986288054.jpg"
  },

  // Bleach
  {
    id: "bleach-1",
    name: "Simple Bleach",
    category: "Bleach",
    categorySlug: "bleach",
    pricePKR: 500,
    priceFormatted: "Rs. 500",
    description: "Gentle skin lightening treatment to even out facial tone and blend fine facial hair effortlessly.",
    image: "/src/assets/images/card_skincare_facial_1792986915914.jpg"
  },
  {
    id: "bleach-2",
    name: "Bleach with Cleanser",
    category: "Bleach",
    categorySlug: "bleach",
    pricePKR: 800,
    priceFormatted: "Rs. 800",
    description: "Deep purifying cleansing followed by refreshing bleach to restore natural skin brightness.",
    image: "/src/assets/images/card_skincare_facial_1792986915914.jpg"
  },
  {
    id: "bleach-3",
    name: "Whitening Bleach with Mask",
    category: "Bleach",
    categorySlug: "bleach",
    pricePKR: 1000,
    priceFormatted: "Rs. 1,000",
    description: "High-performance whitening bleach complemented by a cooling, revitalizing face mask.",
    image: "/src/assets/images/card_skincare_facial_1792986915914.jpg"
  },

  // Skin Polish
  {
    id: "polish-1",
    name: "Whitening Skin Polish",
    category: "Skin Polish",
    categorySlug: "skin-polish",
    pricePKR: 1500,
    priceFormatted: "Rs. 1,500",
    popular: true,
    description: "Exfoliating glow treatment that removes dead cells, refines texture, and boosts radiant luminous skin.",
    image: "/src/assets/images/about_salon_experience_1792986287679.jpg"
  },
  {
    id: "polish-2",
    name: "Herbal Skin Polish",
    category: "Skin Polish",
    categorySlug: "skin-polish",
    pricePKR: 1200,
    priceFormatted: "Rs. 1,200",
    description: "Pure botanical formulation enriched with herbal extracts, soothing sensitive skin while polishing.",
    image: "/src/assets/images/card_skincare_facial_1792986915914.jpg"
  },
  {
    id: "polish-3",
    name: "Acne Skin Polish",
    category: "Skin Polish",
    categorySlug: "skin-polish",
    pricePKR: 1600,
    priceFormatted: "Rs. 1,600",
    description: "Targeted calming scrub tailored for blemish-prone and oily skin to unclog pores and reduce redness.",
    image: "/src/assets/images/card_skincare_facial_1792986915914.jpg"
  },

  // Facial
  {
    id: "facial-1",
    name: "24K Gold Facial",
    category: "Facial",
    categorySlug: "facial",
    pricePKR: 2000,
    priceFormatted: "Rs. 2,000",
    popular: true,
    description: "Opulent anti-aging ritual infused with 24K gold foil and micro-nutrients to restore elasticity and glow.",
    image: "/src/assets/images/gallery_gold_facial_1792986289490.jpg"
  },
  {
    id: "facial-2",
    name: "Gold Facial",
    category: "Facial",
    categorySlug: "facial",
    pricePKR: 2000,
    priceFormatted: "Rs. 2,000",
    description: "Classic gold-infused brightening facial designed to impart radiant warmth and smooth suppleness.",
    image: "/src/assets/images/gallery_gold_facial_1792986289490.jpg"
  },
  {
    id: "facial-3",
    name: "Rice Facial",
    category: "Facial",
    categorySlug: "facial",
    pricePKR: 2000,
    priceFormatted: "Rs. 2,000",
    description: "Hydrating Korean-inspired rice water facial that refines pores, clarifies tone, and provides glass-skin clarity.",
    image: "/src/assets/images/about_salon_experience_1792986287679.jpg"
  },
  {
    id: "facial-4",
    name: "Derm's Facial",
    category: "Facial",
    categorySlug: "facial",
    pricePKR: 2500,
    priceFormatted: "Rs. 2,500",
    description: "Clinical-grade dermatological facial focused on deep exfoliation, hydration, and dermal rejuvenation.",
    image: "/src/assets/images/gallery_gold_facial_1792986289490.jpg"
  },
  {
    id: "facial-5",
    name: "Cerave Facial",
    category: "Facial",
    categorySlug: "facial",
    pricePKR: 3000,
    priceFormatted: "Rs. 3,000",
    description: "Ceramide-rich gentle therapeutic facial to reinforce natural moisture barrier and repair irritated skin.",
    image: "/src/assets/images/card_skincare_facial_1792986915914.jpg"
  },
  {
    id: "facial-6",
    name: "Johnson Facial",
    category: "Facial",
    categorySlug: "facial",
    pricePKR: 3500,
    priceFormatted: "Rs. 3,500",
    description: "Premium mild-action nourishing facial providing delicate, deep hydration for supple, velvety skin.",
    image: "/src/assets/images/about_salon_experience_1792986287679.jpg"
  },

  // Bridal Facial
  {
    id: "bridal-1",
    name: "Whitening Bridal Facial",
    category: "Bridal Facial",
    categorySlug: "bridal-facial",
    pricePKR: 4000,
    priceFormatted: "Rs. 4,000",
    popular: true,
    description: "Comprehensive multi-step bridal glow ritual designed for camera-ready perfection on your special day.",
    image: "/src/assets/images/gallery_gold_facial_1792986289490.jpg"
  },
  {
    id: "bridal-2",
    name: "Ultra Whitening Bridal Facial",
    category: "Bridal Facial",
    categorySlug: "bridal-facial",
    pricePKR: 3500,
    priceFormatted: "Rs. 3,500",
    description: "Intense lightening and hydrating bridal therapy formulated to maximize luminosity under wedding lights.",
    image: "/src/assets/images/gallery_gold_facial_1792986289490.jpg"
  },

  // Hair Colour
  {
    id: "colour-1",
    name: "Olive",
    category: "Hair Colour",
    categorySlug: "hair-colour",
    pricePKR: 800,
    priceFormatted: "Rs. 800",
    description: "Natural herbal olive oil hair tinting for smooth gray coverage and conditioning shine.",
    image: "/src/assets/images/card_hair_colour_1792986917039.jpg"
  },
  {
    id: "colour-2",
    name: "Keune",
    category: "Hair Colour",
    categorySlug: "hair-colour",
    pricePKR: 2500,
    priceFormatted: "Rs. 2,500",
    popular: true,
    description: "Professional salon-grade Dutch Keune color system offering rich, lasting, vibrant multi-dimensional shades.",
    image: "/src/assets/images/card_hair_colour_1792986917039.jpg"
  },
  {
    id: "colour-3",
    name: "Bermo",
    category: "Hair Colour",
    categorySlug: "hair-colour",
    pricePKR: 2000,
    priceFormatted: "Rs. 2,000",
    description: "Long-lasting salon color cream delivering high sheen, deep pigment depth, and silk protein care.",
    image: "/src/assets/images/card_hair_colour_1792986917039.jpg"
  },
  {
    id: "colour-4",
    name: "Easy",
    category: "Hair Colour",
    categorySlug: "hair-colour",
    pricePKR: 1500,
    priceFormatted: "Rs. 1,500",
    description: "Quick-acting gentle hair coloring formula for seamless natural root coverage and all-over lustre.",
    image: "/src/assets/images/card_hair_colour_1792986917039.jpg"
  },

  // Hair Treatments and Haircuts
  {
    id: "hair-1",
    name: "Rebounding Full Hair",
    category: "Hair Treatments and Haircuts",
    categorySlug: "hair-treatments",
    pricePKR: 25000,
    priceFormatted: "Rs. 25,000",
    popular: true,
    description: "Complete permanent hair rebonding process creating ultra-sleek, pin-straight, mirror-reflective hair.",
    image: "/src/assets/images/card_hair_rebonding_1792986916002.jpg"
  },
  {
    id: "hair-2",
    name: "Rebounding Half Hair",
    category: "Hair Treatments and Haircuts",
    categorySlug: "hair-treatments",
    pricePKR: 20000,
    priceFormatted: "Rs. 20,000",
    description: "Targeted rebonding for crown or mid-to-end hair lengths to eliminate stubborn frizz and curl patterns.",
    image: "/src/assets/images/card_hair_rebonding_1792986916002.jpg"
  },
  {
    id: "hair-3",
    name: "Keratin Full Hair",
    category: "Hair Treatments and Haircuts",
    categorySlug: "hair-treatments",
    pricePKR: 20000,
    priceFormatted: "Rs. 20,000",
    popular: true,
    description: "Intensive keratin protein smoothing therapy that deeply repairs damaged strands and imparts silky softness.",
    image: "/src/assets/images/gallery_hair_styling_1792986288775.jpg"
  },
  {
    id: "hair-4",
    name: "Keratin Half Hair",
    category: "Hair Treatments and Haircuts",
    categorySlug: "hair-treatments",
    pricePKR: 15000,
    priceFormatted: "Rs. 15,000",
    description: "Focus keratin treatment for shoulder-length hair or sensitive damaged zones for healthy bounce and shine.",
    image: "/src/assets/images/gallery_hair_styling_1792986288775.jpg"
  },
  {
    id: "hair-5",
    name: "Cut Down Full Hair",
    category: "Hair Treatments and Haircuts",
    categorySlug: "hair-treatments",
    pricePKR: 8000,
    priceFormatted: "Rs. 8,000",
    description: "Professional full-length hair pre-lightening cut down safely managed by experienced stylists.",
    image: "/src/assets/images/card_hair_colour_1792986917039.jpg"
  },
  {
    id: "hair-6",
    name: "Cut Down Half Hair",
    category: "Hair Treatments and Haircuts",
    categorySlug: "hair-treatments",
    pricePKR: 5000,
    priceFormatted: "Rs. 5,000",
    description: "Partial or section cut down lifting natural tone for balayage, ombre, or vibrant tone transitions.",
    image: "/src/assets/images/card_hair_colour_1792986917039.jpg"
  }
];

export const CATEGORIES: ServiceCategory[] = [
  { id: "all", slug: "all", name: "All Services", count: SERVICES.length },
  { id: "mehndi", slug: "mehndi", name: "Mehndi", count: 5 },
  { id: "facial", slug: "facial", name: "Facial", count: 6 },
  { id: "bridal-facial", slug: "bridal-facial", name: "Bridal Facial", count: 2 },
  { id: "skin-polish", slug: "skin-polish", name: "Skin Polish", count: 3 },
  { id: "bleach", slug: "bleach", name: "Bleach", count: 3 },
  { id: "hair-treatments", slug: "hair-treatments", name: "Hair Treatments & Rebonding", count: 6 },
  { id: "hair-colour", slug: "hair-colour", name: "Hair Colour", count: 4 }
];

export const GALLERY_IMAGES = [
  {
    id: "gal-1",
    title: "Signature Bridal Mehndi",
    category: "Mehndi Art",
    src: "/src/assets/images/gallery_bridal_mehndi_1792986288054.jpg",
    alt: "Intricate bridal henna mehndi patterns on hands and forearms at Riwaj Beauty Salon",
    caption: "High-precision bridal henna with intricate floral motifs and deep traditional stain."
  },
  {
    id: "gal-2",
    title: "Luxury 24K Gold Facial",
    category: "Facial Care",
    src: "/src/assets/images/gallery_gold_facial_1792986289490.jpg",
    alt: "Woman receiving luxury 24K gold facial treatment at Riwaj Beauty Salon",
    caption: "Revitalizing gold facial designed to enhance natural radiance and skin elasticity."
  },
  {
    id: "gal-3",
    title: "Keratin & Rebonding Treatment",
    category: "Hair Care",
    src: "/src/assets/images/gallery_hair_styling_1792986288775.jpg",
    alt: "Glossy, smooth hair after professional keratin treatment at Riwaj Beauty Salon",
    caption: "Mirror-sleek keratin and rebonding treatments providing long-lasting softness and sheen."
  },
  {
    id: "gal-4",
    title: "Luxury Salon Atmosphere",
    category: "Salon Interior",
    src: "/src/assets/images/hero_salon_interior_1792986286186.jpg",
    alt: "Elegant modern salon interior styling stations at Riwaj Beauty Salon",
    caption: "A serene, boutique environment dedicated to your comfort, beauty, and relaxation."
  },
  {
    id: "gal-5",
    title: "Personalized Beauty Care",
    category: "Skincare",
    src: "/src/assets/images/about_salon_experience_1792986287679.jpg",
    alt: "Professional beauty aesthetician administering facial care at Riwaj Beauty Salon",
    caption: "Tailored treatments using premier skincare formulas in a peaceful sanctuary."
  }
];
